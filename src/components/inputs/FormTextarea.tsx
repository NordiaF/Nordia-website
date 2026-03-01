import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type FormTextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
  };

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, className, id, name, ...props }, ref) => {
    const textareaId = id ?? name;

    return (
      <div className="flex flex-col">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-1 text-sm font-medium text-black/80"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          name={name}
          className={cn(
            "w-full resize-y rounded border border-black/30 bg-transparent px-3 py-2 text-sm text-black outline-none placeholder:text-black/40 focus:border-black/60",
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

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;
