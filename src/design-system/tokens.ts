/**
 * Design tokens: typed accessors for the CSS custom properties defined in
 * `src/index.css` (LAYER 3 and the semantic layer above it).
 *
 * Values are `var(--...)` strings, so they resolve at runtime and stay
 * theme-reactive when used in inline styles or CSS-in-JS. `raw` holds literal
 * values for the rare context that cannot take a CSS variable (canvas paint,
 * `<meta name="theme-color">`, matchMedia math, etc).
 *
 * When this folder becomes its own package, ship `tokens.css` alongside this
 * file so consumers get the variable definitions too.
 */

export const color = {
  bg: {
    page: "var(--color-bg-page)",
    surface: "var(--color-bg-surface)",
    elevated: "var(--color-bg-elevated)",
    inverse: "var(--color-bg-inverse)",
  },
  text: {
    primary: "var(--color-text-primary)",
    secondary: "var(--color-text-secondary)",
    tertiary: "var(--color-text-tertiary)",
    muted: "var(--color-text-muted)",
    inverse: "var(--color-text-inverse)",
    onAccent: "var(--color-text-on-accent)",
    link: "var(--color-text-link)",
  },
  border: {
    base: "var(--color-border)",
    strong: "var(--color-border-strong)",
    subtle: "var(--color-border-subtle)",
  },
  accent: {
    base: "var(--color-accent)",
    hover: "var(--color-accent-hover)",
    subtle: "var(--color-accent-subtle)",
    border: "var(--color-accent-border)",
  },
  status: {
    success: "var(--color-success)",
    danger: "var(--color-danger)",
    warning: "var(--color-warning)",
  },
  hue: {
    orange: "var(--color-orange)",
    pink: "var(--color-pink)",
    purple: "var(--color-purple)",
  },
  gradient: {
    brand: "var(--gradient-brand)",
    text: "var(--gradient-text)",
  },
} as const;

export const space = {
  1: "var(--space-1)",
  2: "var(--space-2)",
  3: "var(--space-3)",
  4: "var(--space-4)",
  5: "var(--space-5)",
  6: "var(--space-6)",
  8: "var(--space-8)",
  9: "var(--space-9)",
  10: "var(--space-10)",
  12: "var(--space-12)",
  14: "var(--space-14)",
  18: "var(--space-18)",
  28: "var(--space-28)",
} as const;

export const text = {
  xs: "var(--text-xs)",
  sm: "var(--text-sm)",
  base: "var(--text-base)",
  lg: "var(--text-lg)",
  xl: "var(--text-xl)",
  "2xl": "var(--text-2xl)",
  "3xl": "var(--text-3xl)",
  "4xl": "var(--text-4xl)",
  "5xl": "var(--text-5xl)",
  "6xl": "var(--text-6xl)",
} as const;

export const leading = {
  tight: "var(--leading-tight)",
  snug: "var(--leading-snug)",
  normal: "var(--leading-normal)",
  relaxed: "var(--leading-relaxed)",
} as const;

export const weight = {
  regular: "var(--weight-regular)",
  medium: "var(--weight-medium)",
} as const;

export const font = {
  display: "var(--font-display)",
  sans: "var(--font-sans)",
  body: "var(--font-body)",
  mono: "var(--font-mono)",
} as const;

export const radius = {
  xs: "var(--radius-xs)",
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  "2xl": "var(--radius-2xl)",
  "3xl": "var(--radius-3xl)",
  full: "var(--radius-full)",
} as const;

export const shadow = {
  xs: "var(--shadow-xs)",
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
} as const;

export const motion = {
  easeOut: "var(--ease-out)",
  easeInOut: "var(--ease-in-out)",
  fast: "var(--duration-fast)",
  base: "var(--duration-base)",
  slow: "var(--duration-slow)",
} as const;

export const layout = {
  containerMax: "var(--container-max)",
  tracking: "var(--tracking)",
} as const;

/** Literal values, for contexts that cannot use a CSS variable. */
export const raw = {
  color: {
    charcoal: "#0a0a0a",
    warmGrey: "#f5f5f7",
    softBeige: "#faf7f2",
    blue: "#3b82f6",
    blueDeep: "#0050bd",
    orange: "#d94a1e",
    pink: "#d04aee",
    purple: "#8a38f5",
    success: "#16a34a",
    danger: "#f63b3b",
    warning: "#f5d538",
    ink900: "#0a0a0a",
  },
  space: {
    1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32,
    9: 36, 10: 40, 12: 48, 14: 56, 18: 72, 28: 112,
  },
} as const;

export const tokens = {
  color,
  space,
  text,
  leading,
  weight,
  font,
  radius,
  shadow,
  motion,
  layout,
  raw,
} as const;

export default tokens;
