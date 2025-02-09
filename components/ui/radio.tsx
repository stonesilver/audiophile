"use client";

import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  options: { label: ReactNode; value: string | number }[];
  name?: string;
  className?: string;
  defaultValue?: string | number;
};

const Radio = ({ options, name, className, defaultValue }: Props) => {
  const [active, setActive] = useState(defaultValue ?? options[0].value);

  return (
    <fieldset className={cn(className)}>
      {options.map(({ label, value }) => (
        <button
          key={value}
          type="button"
          className={cn(
            "relative flex h-12 w-full appearance-none items-center gap-4 rounded-lg px-5 ring-1 hover:ring-primary-main md:px-6",
            active === value ? "ring-primary-main" : "ring-border"
          )}
        >
          <div className="border-border center-item block size-5 flex-shrink-0 rounded-full border">
            {active === value && <span className="size-[10px] rounded-full bg-primary-main" />}
          </div>
          <input
            type="radio"
            name={name}
            value={value}
            checked={active === value}
            className="absolute left-0 top-0 size-full cursor-pointer appearance-none bg-transparent"
            onChange={() => {
              setActive(value);
            }}
          />

          <p className="text-sm font-bold text-black">{label}</p>
        </button>
      ))}
    </fieldset>
  );
};

export default Radio;
