import {
  useId,
  type CSSProperties,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

type FieldBase = {
  as?: "input" | "textarea";
  /** Label text. Always rendered for screen readers; see `hideLabel`. */
  label?: string;
  /** Visually hide the label (placeholder-only look) while keeping it for AT. */
  hideLabel?: boolean;
  /** Helper text below the control. Hidden while an `error` is showing. */
  hint?: string;
  /** Error message. Sets the danger ring and `aria-invalid`. */
  error?: string;
  /** Wrapper class / style (e.g. grid placement). The control keeps `.field`. */
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
 * Text input with an optional label, hint, and error. Pass `as="textarea"` for
 * the multi-line variant. `className` / `style` land on the wrapper so callers
 * can place the field in a layout; the control itself always carries `.field`.
 */
export function Field({
  as = "input",
  label,
  hideLabel = false,
  hint,
  error,
  className = "",
  style,
  id,
  rows = 4,
  required,
  ...rest
}: FieldProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const descId = hint || error ? `${fieldId}-desc` : undefined;

  const controlCls = ["field", error && "field--error"].filter(Boolean).join(" ");
  const shared = {
    id: fieldId,
    className: controlCls,
    required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": descId,
  };

  return (
    <div className={["field-group", className].filter(Boolean).join(" ")} style={style}>
      {label && (
        <label
          htmlFor={fieldId}
          className={hideLabel ? "sr-only" : "field-label"}
        >
          {label}
          {required && !hideLabel && (
            <span className="field-req" aria-hidden>
              {" "}
              *
            </span>
          )}
        </label>
      )}

      {as === "textarea" ? (
        <textarea
          {...shared}
          rows={rows}
          style={{
            height: "auto",
            paddingTop: "var(--space-4)",
            paddingBottom: "var(--space-4)",
            borderRadius: "var(--radius-2xl)",
            resize: "vertical",
            fontFamily: "var(--font-body)",
          }}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          {...shared}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {error ? (
        <p className="field-msg field-msg--error" id={descId}>
          {error}
        </p>
      ) : hint ? (
        <p className="field-msg" id={descId}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export default Field;
