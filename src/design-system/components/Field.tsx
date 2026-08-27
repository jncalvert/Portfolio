import type {
  CSSProperties,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type FieldBase = {
  as?: "input" | "textarea";
  className?: string;
  style?: CSSProperties;
};

export type FieldProps = FieldBase &
  Omit<
    InputHTMLAttributes<HTMLInputElement> &
      TextareaHTMLAttributes<HTMLTextAreaElement>,
    "as" | "className" | "style"
  >;

/**
 * Text input. Pass `as="textarea"` for the multi-line variant, which switches
 * to auto height, roomier padding, a squarer radius, and vertical resize.
 * Layout (width, grid placement) is the caller's job via `className` / `style`.
 */
export function Field({
  as = "input",
  className = "",
  style,
  rows = 4,
  ...rest
}: FieldProps) {
  const cls = ["field", className].filter(Boolean).join(" ");

  if (as === "textarea") {
    return (
      <textarea
        className={cls}
        rows={rows}
        style={{
          height: "auto",
          paddingTop: "var(--space-4)",
          paddingBottom: "var(--space-4)",
          borderRadius: "var(--radius-2xl)",
          resize: "vertical",
          fontFamily: "var(--font-body)",
          ...style,
        }}
        {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return (
    <input
      className={cls}
      style={style}
      {...(rest as InputHTMLAttributes<HTMLInputElement>)}
    />
  );
}

export default Field;
