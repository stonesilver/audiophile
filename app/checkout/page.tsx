import CartItem from "@/components/cart/cart-item";
import GoBack from "@/components/cart/go-back";
import ListItem from "@/components/shared/list-item";
import Input from "@/components/ui/input";
import Radio from "@/components/ui/radio";
import { checkoutFormFields, dummyCartItems, dummyCheckout } from "@/utils/constants";

const Page = () => {
  return (
    <div className="content-wrapper flex flex-1 flex-col border-purple-500 pb-[97px] pt-4 md:pb-[116px] md:pt-12 lg:pb-[141px] lg:pt-16">
      <GoBack />

      <form className="mt-6 grid flex-1 grid-cols-1 gap-8 lg:mt-9 lg:grid-cols-[1fr_350px] lg:gap-30">
        <div className="min-h-[730px] rounded-lg bg-white px-5 py-6 md:px-7 md:py-30 lg:px-12 lg:py-[3.375rem]">
          <h1 className="mb-8 text-2xl font-bold leading-none text-black md:mb-10 md:text-3xl">CHECKOUT</h1>

          <div className="space-y-12">
            {checkoutFormFields.map(({ title, formFields }) => (
              <div key={title}>
                <h3 className="mb-4 text-13 font-bold text-primary-main">{title}</h3>

                <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2">
                  {formFields.map((field) => (
                    <>
                      {field.type === "radio" ? (
                        <div key={field.label} className="grid grid-cols-1 gap-4 md:col-span-2 md:grid-cols-2">
                          <p className="text-xs font-bold text-black">{field.label}</p>

                          <Radio
                            name={field.name}
                            options={(field as unknown as { options: { label: string; value: string }[] }).options}
                            className="grid grid-cols-1 gap-4"
                          />
                        </div>
                      ) : (
                        <Input key={field.name} {...field} required error="" />
                      )}
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-fit rounded-lg bg-white p-[2rem_1.25rem] md:p-8">
          <h2 className="text-base font-bold leading-none text-black md:text-lg">Summary</h2>

          <div className="mt-7 space-y-6">
            {dummyCartItems.map(({ id, name, img, price, quantity }) => (
              <div key={id} className="flex items-center justify-between">
                <CartItem img={img} title={name} price={price} />

                <p className="flex-1 text-right text-15 font-bold text-black/50">x{quantity}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-2">
            {dummyCheckout.map(({ label, value }) => (
              <ListItem key={label} label={label} value={value} className="last:mt-3 last:text-primary-main" />
            ))}
          </div>

          <button type="button" className="button-primary mt-8 w-full">
            CHECKOUT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
//
