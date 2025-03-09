"use client";

import { convertToCurrency } from "@/lib/helper";
import Image from "next/image";
import { useMemo } from "react";

type Props = { img: string; title: string; price: number };

const CartItem = ({ img, title, price }: Props) => {
  const unitPrice = useMemo(() => {
    return convertToCurrency(price);
  }, [price]);
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="center-item size-16 rounded-lg bg-light-gray">
        <Image src={img} alt={title} width={36.19} height={40} className="object-contain" />
      </div>
      <div className="font-bold">
        <p className="text-sm text-black">{title}</p>
        <p className="text-13 text-black/50">{unitPrice}</p>
      </div>
    </div>
  );
};

export default CartItem;
