/**
 * Hex / RGB / HSL color helpers. All hex strings are 6-char, no leading `#`;
 * callers prepend `#` when emitting to CSS.
 */

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

export function hexToRgb(hex: string): RGB {
  const c = hex.replace("#", "").padEnd(6, "0").slice(0, 6);
  return {
    r: parseInt(c.slice(0, 2), 16),
    g: parseInt(c.slice(2, 4), 16),
    b: parseInt(c.slice(4, 6), 16),
  };
}

export function rgbToHex({ r, g, b }: RGB): string {
  return [r, g, b]
    .map((v) =>
      Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0"),
    )
    .join("")
    .toUpperCase();
}

export function hexToHsl(hex: string): HSL {
  const { r, g, b } = hexToRgb(hex);
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) * 60;
  else if (max === gn) h = ((bn - rn) / d + 2) * 60;
  else h = ((rn - gn) / d + 4) * 60;
  return { h, s, l };
}

export function hslToHex({ h, s, l }: HSL): string {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return rgbToHex({ r: (r + m) * 255, g: (g + m) * 255, b: (b + m) * 255 });
}

/** Shift a hex's HSL lightness by `delta` (positive = lighter). Clamped to
 *  [0, 1]. Returns 6-char hex without `#`. */
export function shiftLightness(hex: string, delta: number): string {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex({ h, s, l: Math.max(0, Math.min(1, l + delta)) });
}

/** Sanitize a hex string to 6 uppercase hex chars (no leading `#`). */
export function normalizeHex(input: string): string {
  return input.replace(/[^0-9a-fA-F]/g, "").slice(0, 6).toUpperCase();
}

/** Pick a foreground (white vs near-black) that reads on top of `hex`,
 *  using perceived luminance. */
export function readableOnHex(hex: string): string {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? "#0a0a0a" : "#ffffff";
}
