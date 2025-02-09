const PreFooter = () => {
  return (
    <section className="content-wrapper my-24 grid grid-cols-1 gap-6 md:gap-12 lg:grid-cols-2 lg:gap-[1.875rem]">
      <div className="h-[300px] rounded-lg bg-listening-to-music bg-cover bg-center lg:order-2 lg:h-[588px]"></div>
      <div className="flex flex-col justify-center">
        <p className="text-[1.75rem] font-bold uppercase leading-[38.25px] text-black max-lg:text-center md:max-w-[573px] md:text-[2.5rem] md:leading-[44px] md:max-lg:mx-auto lg:max-w-[445px]">
          Bringing you the <span className="text-primary-main">best</span> audio gear
        </p>
        <p className="mt-6 text-15 text-black/50 max-lg:text-center">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
          speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default PreFooter;
