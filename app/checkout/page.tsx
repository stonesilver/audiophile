import CheckoutForm from "@/components/cart/checkout-form";
import GoBack from "@/components/cart/go-back";

const Page = () => {
  return (
    <div className="content-wrapper flex flex-1 flex-col border-purple-500 pb-[97px] pt-4 md:pb-[116px] md:pt-12 lg:pb-[141px] lg:pt-16">
      <GoBack />

      <CheckoutForm />
    </div>
  );
};

export default Page;
//
