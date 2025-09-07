import { forwardRef } from "react";
import classNames from "classnames";

interface RangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: number;
  error?: string;
  suffix?: string; 
  prefix?: string;
}

export const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  ({ label, value, error, suffix, prefix, className, ...props }, ref) => {
    return (
      <div className={classNames("flex flex-col mb-4", className)}>
        {label && (
          <label className="mb-2 font-medium text-gray-700">
            {label}: {prefix} {value} {suffix}
          </label>
        )}
        <input
          type="range"
          ref={ref}
          value={value}
          {...props}
          className="w-full"
        />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    );
  }
);

RangeInput.displayName = "RangeInput";
