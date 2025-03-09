"use client";

import { HTMLProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLProps<HTMLInputElement> {
  options: { label: ReactNode; value: string | number }[];
}

const Radio = ({ options, className, value: val, ...props }: Props) => {
  return (
    <fieldset className={cn(className)}>
      {options.map(({ label, value }) => (
        <button
          key={value}
          type="button"
          className={cn(
            "relative flex h-12 w-full appearance-none items-center gap-4 rounded-lg px-5 ring-1 hover:ring-primary-main md:px-6",
            val === value ? "ring-primary-main" : "ring-border"
          )}
        >
          <div className="center-item block size-5 flex-shrink-0 rounded-full border border-border">
            {val === value && <span className="size-[10px] rounded-full bg-primary-main" />}
          </div>
          <input
            type="radio"
            value={value}
            checked={val === value}
            className="absolute left-0 top-0 size-full cursor-pointer appearance-none bg-transparent"
            {...props}
          />

          <p className="text-sm font-bold text-black">{label}</p>
        </button>
      ))}
    </fieldset>
  );
};

export default Radio;
