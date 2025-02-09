import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  title: string;
  titleClass?: string;
  desc: string;
  href: string;
  isReverse?: boolean;
  newProduct?: boolean;
};
const ProductList = ({ src, title, desc, href, isReverse, newProduct, titleClass }: Props) => {
  return (
    <section className="content-wrapper mt-[120px] grid grid-cols-1 md:mt-[160px] lg:grid-cols-2">
      <div
        className={cn(
          "flex h-[352px] items-center justify-center rounded-lg bg-light-gray lg:h-[540px]",
          isReverse ? "lg:order-2" : undefined
        )}
      >
        <Image src={src} width={350} height={350} alt="black Headphone" className="h-[69%] object-contain lg:w-[65%]" />
      </div>
      <div
        className={cn(
          "flex flex-col justify-center pt-8 max-lg:items-center md:pt-14 lg:pt-0",
          isReverse ? "lg:pr-[5rem]" : "lg:pl-[5rem]"
        )}
      >
        {newProduct && <p className="text-sm leading-[19.12px] tracking-[10px] text-primary-main">NEW PRODUCT</p>}
        <p
          className={cn(
            "text-[1.75rem] font-bold uppercase leading-[38.25px] text-black max-lg:text-center max-md:w-[327px] md:text-[2.5rem] md:leading-[44px] lg:max-w-[445px]",
            titleClass
          )}
        >
          {title}
        </p>
        <p className="mt-6 text-15 text-black/50 max-lg:text-center md:max-lg:max-w-[572px]">{desc}</p>

        <Link href={href} className="button-primary center-item mt-8 w-fit leading-none">
          See Product
        </Link>
      </div>
    </section>
  );
};

export default ProductList;
