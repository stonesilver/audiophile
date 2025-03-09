"use client";

import { useState } from "react";
import HamburgerIcon from "@/assets/icons/hamburger.svg";
import ProductCategories from "../shared/product-categories";
import { createPortal } from "react-dom";

const MobileHamburger = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prevS) => !prevS);
  };

  return (
    <>
      <button type="button" className="size-fit lg:hidden" onClick={toggle}>
        <HamburgerIcon />
      </button>

      {show &&
        createPortal(
          <div className="fixed left-0 top-[92px] z-[5] max-h-[calc(90dvh-92px)] w-full overflow-y-scroll overscroll-y-contain rounded-b-lg bg-white px-4 pb-14 pt-28 shadow-lg md:px-8 lg:hidden lg:pt-40">
            <ProductCategories />
          </div>,
          document.body
        )}
    </>
  );
};

export default MobileHamburger;
