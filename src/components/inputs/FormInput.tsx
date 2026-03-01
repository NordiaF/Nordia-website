import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className, id, name, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="flex flex-col">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1 text-sm font-medium text-black/80"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          name={name}
          className={cn(
            "w-full border-b border-black bg-transparent py-2 text-sm text-black outline-none placeholder:text-black/40 focus:border-black/80",
            error && "border-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <small className="mt-1 text-xs text-red-500">{error}</small>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
