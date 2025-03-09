"use client";

import CartItem from "@/components/cart/cart-item";
import ListItem from "@/components/shared/list-item";
import Input from "@/components/ui/input";
import Radio from "@/components/ui/radio";
import { dummyCartItems, dummyCheckout } from "@/utils/constants";
import { Fragment, useActionState, useEffect, useRef, useState } from "react";
import { submitCheckoutForm } from "./cart.actions";
import { ActionResponse } from "../../types/index";
import Modal from "../ui/modal";
import CheckIcon from "@/assets/icons/check.svg";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cartSchema, CartFormData, cartDefaults, checkoutFormFields } from "./cart.constants";

const initialState: ActionResponse<CartFormData> = {
  message: "",
  success: false,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const CheckoutCartItem = (props: (typeof dummyCartItems)[0] & { className?: string }) => {
  return (
    <motion.div variants={listItem} className={cn("flex flex-wrap items-center justify-between", props.className)}>
      <CartItem img={props.img} title={props.name} price={props.price} />

      <p className="flex-1 text-right text-15 font-bold text-black/50">x{props.quantity}</p>
    </motion.div>
  );
};

const CheckoutForm = () => {
  const [state, action, isPending] = useActionState(submitCheckoutForm, initialState);
  const [openModal, setOpenModal] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showMore, setShowMore] = useState(1);

  const onChange = (arg: boolean) => {
    setOpenModal(arg);
  };

  const handleToggleShowMore = () => {
    setShowMore((prevS) => (prevS === 1 ? dummyCartItems.length : 1));
  };

  const form = useForm<CartFormData>({
    defaultValues: state.input ? state.input : cartDefaults,
    resolver: zodResolver(cartSchema),
  });

  const onSubmit = form.handleSubmit(async (values, event) => {
    event?.preventDefault();
    event?.stopPropagation();

    console.log(values);
    if (formRef.current) {
      formRef.current.submit();
    }
  });

  useEffect(() => {
    if (state.message === "Form submitted") {
      setOpenModal(true);
    }
  }, [state]);

  return (
    <>
      <form
        ref={formRef}
        action={action}
        autoComplete="off"
        className="mt-6 grid flex-1 grid-cols-1 gap-8 lg:mt-9 lg:grid-cols-[1fr_350px] lg:gap-30"
        onSubmit={onSubmit}
      >
        <div className="min-h-[730px] rounded-lg bg-white px-5 py-6 md:px-7 md:py-30 lg:px-12 lg:py-[3.375rem]">
          <h1 className="mb-8 text-2xl font-bold leading-none text-black md:mb-10 md:text-3xl">CHECKOUT</h1>

          <div className="space-y-12">
            {checkoutFormFields.map(({ title, formFields }) => (
              <div key={title}>
                <h3 className="mb-4 text-13 font-bold text-primary-main">{title}</h3>

                <div className="grid grid-cols-1 items-end gap-6 sm:grid-cols-2">
                  {formFields.map((field) => (
                    <Fragment key={field.label}>
                      {field.type === "radio" ? (
                        <div className="grid grid-cols-1 gap-4 sm:col-span-2 sm:grid-cols-2">
                          <p className="text-xs font-bold text-black">{field.label}</p>

                          <Controller
                            name={field.name}
                            control={form.control}
                            render={(arg) => (
                              <Radio
                                options={(field as unknown as { options: { label: string; value: string }[] }).options}
                                className="grid grid-cols-1 gap-4"
                                {...arg.field}
                              />
                            )}
                          />
                        </div>
                      ) : (
                        <Controller
                          name={field.name}
                          control={form.control}
                          render={(arg) => (
                            <Input
                              {...field}
                              title={field.placeholder}
                              autoComplete="off"
                              error={
                                arg?.fieldState?.error?.message
                                // ??
                                // state.errors?.[field.name as keyof typeof state.errors]
                              }
                              {...arg.field}
                            />
                          )}
                        />
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-fit rounded-lg bg-white p-[2rem_1.25rem] md:p-8">
          <h2 className="text-base font-bold leading-none text-black md:text-lg">Summary</h2>

          <motion.div variants={container} initial="hidden" animate="show" className="mt-7 space-y-6">
            {dummyCartItems.map((item) => (
              <CheckoutCartItem key={item.id} {...item} />
            ))}
          </motion.div>

          <div className="mt-8 flex flex-col gap-2">
            {dummyCheckout.map(({ label, value }) => (
              <ListItem key={label} label={label} value={value} className="last:mt-3 last:text-primary-main" />
            ))}
          </div>

          <button
            type="submit"
            className="button-primary mt-8 w-full"
            disabled={isPending}
            // onClick={() => onChange(true)}
          >
            CHECKOUT
          </button>
        </div>
      </form>

      <Modal open={openModal} onChange={onChange} disableBackdropClick>
        <Modal.Content className="" hideClose>
          <div className="center-item size-16 rounded-full bg-primary-main">
            <CheckIcon />
          </div>

          <h4 className="mt-6 font-bold leading-none md:mt-7" style={{ fontSize: "clamp(24px, 5vw + 10px, 32px)" }}>
            THANK YOU
            <span className="block">FOR YOUR ORDER</span>
          </h4>

          <p className="mt-4 text-15 text-black/50 md:mt-6">You will receive an email confirmation shortly.</p>

          <motion.div
            layout
            transition={{ duration: 0.1 }}
            className="mt-6 grid grid-cols-1 md:mt-8 md:grid-cols-[1fr_0.65fr]"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="group space-y-4 bg-light-gray px-6 pt-6 max-md:rounded-t-lg md:rounded-l-lg"
            >
              {dummyCartItems.slice(0, showMore).map((item) => (
                <CheckoutCartItem key={item.id} {...item} className="border-b group-last:border-b-0" />
              ))}

              <button
                type="button"
                className="w-full pb-[19px] pt-3 text-center text-xs font-bold text-black/50"
                onClick={handleToggleShowMore}
              >
                {showMore === 1 ? `and ${dummyCartItems.length - 1} other item(s)` : "View less"}
              </button>
            </motion.div>

            <div className="flex min-h-[92px] flex-col justify-end bg-black pb-[19px] pl-6 max-md:rounded-b-lg md:rounded-r-lg md:pb-10">
              <p className="text-15 text-white/50">GRAND TOTAL</p>
              <p className="text-lg font-bold text-white">$ 5,446</p>
            </div>
          </motion.div>

          <Link href="/" className="button-primary mt-6 md:mt-12">
            BACK TO HOME
          </Link>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default CheckoutForm;
