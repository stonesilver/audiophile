const ProductCategoryHeader = ({ title }: { title: string }) => {
  return (
    <section className="flex h-[96px] flex-col bg-[#141414] md:h-[240px]">
      <div className="content-wrapper flex flex-1 items-center justify-center text-[1.75rem] font-bold leading-[38px] text-white md:text-[2.5rem] md:leading-[40px]">
        {title}
      </div>
    </section>
  );
};

export default ProductCategoryHeader;
