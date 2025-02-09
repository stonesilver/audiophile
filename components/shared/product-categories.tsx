import { shopSection } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import CaretRightIcon from "@/assets/icons/caret-right.svg";
import { cn } from "@/lib/utils";

const ProductCategories = ({ className }: { className?: HTMLElement["className"] }) => {
  return (
    <section className={cn("flex min-h-[300px] gap-[100px] max-md:flex-col md:items-center md:gap-[30px]", className)}>
      {shopSection.map(({ img, label, href, cln }) => (
        <div key={label} className="relative min-h-[165px] flex-1 rounded-lg bg-light-gray lg:h-[204px]">
          <div className="relative mx-auto size-fit -translate-y-[50%]">
            <Image
              src={img}
              width={103}
              height={125}
              loading="lazy"
              quality={75}
              alt={label}
              className={cn("block object-contain", cln)}
            />
            <span className="absolute -bottom-[15px] left-[50%] h-[15px] w-[100px] -translate-x-[50%] rounded-full bg-black blur-xl" />
          </div>

          <div className="absolute bottom-2 left-0 w-full">
            <p className="text-center text-15 font-bold text-black md:text-lg">{label}</p>
            <Link href={href} className="button-ghost mx-auto flex w-fit items-center gap-3">
              SHOP <CaretRightIcon />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCategories;
