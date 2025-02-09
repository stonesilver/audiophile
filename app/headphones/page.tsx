import PreFooter from "@/components/layout/pre-footer";
import ProductCategories from "@/components/shared/product-categories";
import ProductCategoryHeader from "@/components/shared/product-category-header";
import ProductList from "@/components/shared/product-list";

const HeadPhones = () => {
  return (
    <>
      <ProductCategoryHeader title="HEADPHONES" />

      <ProductList
        src="/images/headphone-transparent.webp"
        title="XX99 Mark II Headphones"
        desc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound."
        href="/headphones/XX99-mark-II"
        newProduct
      />

      <ProductList
        src="/images/headphone.webp"
        title="XX99 Mark I Headphones"
        desc="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go."
        href="/headphones/XX99-mark-I"
        isReverse
      />

      <ProductList
        src="/images/white-headphone.webp"
        title="XX59 Headphones"
        desc="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move."
        href="/headphones/XX59"
        titleClass="max-md:w-[327px]"
      />

      <ProductCategories className="content-wrapper pt-40" />

      <PreFooter />
    </>
  );
};

export default HeadPhones;
