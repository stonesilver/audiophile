"use client";

import { useState, useRef } from "react";
import HamburgerIcon from "@/assets/icons/hamburger.svg";
import ProductCategories from "../shared/product-categories";
import { createPortal } from "react-dom";

const MobileHamburger = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  const toggle = () => {
    setShow((prevS) => !prevS);
  };

  const focusOnMount = (event: HTMLDivElement) => {
    console.dir(event, "mounted");
    // event.target
    console.log(menuRef);
  };

  return (
    <>
      <button type="button" className="size-fit lg:hidden" onClick={toggle}>
        <HamburgerIcon />
      </button>

      {show &&
        createPortal(
          <div
            ref={focusOnMount}
            className="fixed left-0 top-[92px] z-[5] max-h-[calc(90dvh-92px)] w-full overflow-y-scroll overscroll-y-contain rounded-b-lg bg-white px-4 pb-14 pt-28 shadow-lg md:px-8 lg:hidden lg:pt-40"
          >
            <ProductCategories />
          </div>,
          document.body
        )}
    </>
  );
};

export default MobileHamburger;
