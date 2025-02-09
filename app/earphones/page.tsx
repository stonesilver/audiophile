import PreFooter from "@/components/layout/pre-footer";
import ProductCategories from "@/components/shared/product-categories";
import ProductCategoryHeader from "@/components/shared/product-category-header";
import ProductList from "@/components/shared/product-list";

const EarPhones = () => {
  return (
    <>
      <ProductCategoryHeader title="EARPHONES" />

      <ProductList
        src="/images/earphone.webp"
        title="YX1 WIRELESS EARPHONES"
        desc="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        href="/speakers/YX1-wireless"
        titleClass="md:w-[340px]"
        newProduct
      />

      <ProductCategories className="content-wrapper pt-40" />

      <PreFooter />
    </>
  );
};

export default EarPhones;
