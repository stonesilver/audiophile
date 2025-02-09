import PreFooter from "@/components/layout/pre-footer";
import ProductCategories from "@/components/shared/product-categories";
import ProductCategoryHeader from "@/components/shared/product-category-header";
import ProductList from "@/components/shared/product-list";

const Speakers = () => {
  return (
    <>
      <ProductCategoryHeader title="SPEAKERS" />

      <ProductList
        src="/images/speaker.webp"
        title="ZX9 SPEAKER"
        desc="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        href="/speakers/ZX9"
        titleClass="md:w-[150px]"
        newProduct
      />

      <ProductList
        src="/images/ZX7.webp"
        title="ZX7 SPEAKER"
        desc="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        href="/headphones/ZX7"
        titleClass="md:w-[150px]"
        isReverse
      />

      <ProductCategories className="content-wrapper pt-40" />

      <PreFooter />
    </>
  );
};

export default Speakers;
