/**
 * Design system: the single import surface.
 *
 *   import { Button, Chip, Field, Card, Badge, tokens } from "@/design-system";
 *
 * Structured as its own folder with a barrel export so it can be lifted into a
 * standalone npm package later with minimal changes. Component styling still
 * lives in `src/index.css` (the `.btn-*`, `.tag`, `.field`, `.glow-card`,
 * `.kicker` / `.services-badge` rule groups); that CSS moves in here when the
 * package is split out.
 */

export * from "./components";
export * from "./tokens";
