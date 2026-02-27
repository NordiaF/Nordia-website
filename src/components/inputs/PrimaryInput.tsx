import type { ChangeEvent } from "react";
import { TInputProps } from "./inputTypes";

const PrimaryInput: React.FC<TInputProps> = ({
  name,
  onBlur,
  value,
  placeholder,
  label,
  error,
  type,
  onChange,
  onKeyDown,
  required,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // If the type is "tel," allow only numeric characters
    if (type === "tel") {
      inputValue = inputValue.replace(/[^0-9]/g, "");
    } else if (type === "pin") {
      const numericInput = inputValue.replace(/[^0-9]/g, "");
      inputValue = numericInput.slice(0, 6); // Limit to 6 digits
    } else if (type === "number") {
      // Prevent negative numbers for type="number"
      const numericValue = parseFloat(inputValue);
      if (numericValue < 0) {
        inputValue = "0";
      }
    }

    const customEvent = {
      target: {
        name,
        value: inputValue,
      },
    };

    // Call the onChange callback with the custom event
    onChange(customEvent as ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col space-y-1 text-sm placeholder:text-sm font-ttCommons">
      <label htmlFor={name} className="text-[16px] ">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={handleInputChange}
        className={`border-[1px] border-text-grey rounded-[10px] h-[54px] pl-4 outline-none focus:border-blue-200 focus:outline-blue-50 focus:outline-4 transition-all duration-300 ${
          error ? "border-red-500 bg-errorBg" : ""
        }`}
      />
      {error && (
        <small className="text-red-500 text-xs transition-all duration-300">
          {error}
        </small>
      )}
    </div>
  );
};

export default PrimaryInput;
