import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
  inputClassname?: string;
  error?: string;
}

const Input = ({ className, type, id, inputClassname, label, error, ...props }: Props) => {
  return (
    <div className={cn("relative w-full", className)}>
      {label && (
        <label htmlFor={id} className="mb-[9px] block text-xs font-bold leading-none text-black">
          {label}
        </label>
      )}

      <input
        type={type}
        className={cn(
          "h-12 w-full appearance-none rounded-lg border-none px-5 text-sm font-bold text-black caret-primary-main outline-none placeholder:font-normal placeholder:text-black/40 focus:ring-1 focus:ring-primary-main md:px-6",
          inputClassname,
          !!error ? "ring-2 ring-[#cd2c2c]" : "ring-border ring-1"
        )}
        {...props}
      />

      {!!error && (
        <span className="absolute right-0 top-0 block max-w-[80%] text-right text-xs leading-none text-[#cd2c2c]">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
