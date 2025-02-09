import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = { label: string; value: ReactNode; className?: string };

const ListItem = ({ label, value, className }: Props) => {
  return (
    <div className={cn("flex items-center justify-between text-black", className)}>
      <p className="text-13 text-black/50">{label}</p>
      <p className="text-base font-bold">{value}</p>
    </div>
  );
};

export default ListItem;
