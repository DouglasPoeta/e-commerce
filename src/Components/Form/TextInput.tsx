import { useField } from "formik";
import { InputHTMLAttributes } from "react";
import "./textInput.css";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export default function TextInput({ label, ...props }: TextInputProps) {
  const { name } = props;
  const [field, meta] = useField({ name }); // Trata o input name

  const error = meta.touched && meta.error;

  return (
    <>
      <div className="input-container">
        <label htmlFor={name} className="input-label">
          {" "}
          {label}{" "}
        </label>
        <input
          type="text"
          id={name}
          {...field}
          {...props}
          className={`input-field ${error ? "input-error" : ""}`}
        />
        {error && <span className="error-message">{error}</span>}
      </div>
    </>
  );
}
