"use client";

import { useRef, useState } from "react";
import CartIcon from "@/assets/icons/cart.svg";
import { createPortal } from "react-dom";
import CartItem from "./cart-item";
import { dummyCartItems } from "@/utils/constants";
import ListItem from "../shared/list-item";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import useOutsideClick from "@/hooks/use-outside-click";

const boxVariants = { visible: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 0.85 } };
const wrapperVariants = { visible: { opacity: 1 }, hidden: { opacity: 0 } };

const CartHeader = () => {
  const [open, setOpen] = useState(false);
  const callback = useRef(() => setOpen(false));
  const cartRef = useOutsideClick(callback);

  const toggle = () => {
    setOpen((prevS) => !prevS);
  };

  const assignRef = (elem: unknown) => {
    if (elem) {
      cartRef.current.splice(cartRef.current.length, 1, elem as HTMLElement);
    }
  };

  return (
    <>
      <li>
        <motion.button ref={assignRef} type="button" whileTap={{ scale: 1.2 }} className="group" onClick={toggle}>
          <CartIcon className="group-hover:stroke-primary-main" />
        </motion.button>
      </li>

      <AnimatePresence initial={false}>
        {open && (
          <>
            {createPortal(
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={wrapperVariants}
                transition={{ delay: 0.2 }}
                key="wrapper"
                className="fixed inset-0 top-[80px] z-[10] h-[calc(100dvh-80px)] w-full bg-black/40 px-5 max-md:flex max-md:justify-center md:top-[92px] md:h-[calc(100dvh-92px)]"
              >
                <AnimatePresence propagate>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={boxVariants}
                    transition={{ delay: 0.1 }}
                    key="cart"
                    ref={assignRef}
                    className="mt-6 h-fit max-h-[calc(100dvh-132px)] w-full max-w-[377px] overflow-y-auto rounded-lg bg-white px-5 py-8 md:ml-auto md:mr-5 md:max-h-[488px] md:px-7 lg:mt-8 xl:mr-20"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-base font-bold leading-none text-black md:text-lg">cart (3)</p>
                      <button
                        type="button"
                        className="text-15 leading-none text-black/50 underline hover:text-primary-main"
                      >
                        Remove all
                      </button>
                    </div>

                    <div className="mt-8 space-y-6">
                      {dummyCartItems.map(({ id, name, img, price, quantity }) => (
                        <div key={id} className="flex items-center justify-between">
                          <CartItem img={img} title={name} price={price} />

                          <div className="flex h-8 min-w-24 items-center bg-light-gray text-13 font-bold">
                            <button
                              type="button"
                              className="center-item w-8 select-none text-black/25 hover:text-primary-main"
                            >
                              -
                            </button>
                            <p className="flex-1 text-center">{quantity}</p>
                            <button
                              type="button"
                              className="center-item w-8 select-none text-black/25 hover:text-primary-main"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <ListItem label="TOTAL" value="$ 5,396" />
                    </div>

                    <Link href="/checkout" className="button-primary mt-6 w-full" onClick={toggle}>
                      CHECKOUT
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </motion.div>,
              document.body,
              "cart-portal"
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartHeader;
