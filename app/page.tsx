import Image from "next/image";
import Link from "next/link";
import ProductCategories from "@/components/shared/product-categories";
import PreFooter from "@/components/layout/pre-footer";

const Home = () => {
  return (
    <>
      <section className="bg-[#141414]">
        <div className="content-wrapper grid min-h-[550px] flex-1 grid-cols-1 max-lg:!px-0 max-md:mx-1 md:min-h-[738px] lg:grid-cols-2">
          <div className="flex flex-col justify-center max-lg:bg-headphone max-lg:bg-cover max-lg:bg-center max-lg:bg-no-repeat">
            <div className="max-w-[328px] max-lg:mx-auto max-lg:flex max-lg:flex-col max-lg:items-center md:max-w-[396px]">
              <p className="text-sm tracking-[10px] text-white/50">NEW PRODUCT</p>
              <h1 className="my-4 text-[2.25rem] font-bold leading-[40px] tracking-[1.29px] text-white max-lg:text-center md:text-[3.5rem] md:leading-[58px] md:tracking-[2px]">
                XX99 Mark II Headphones
              </h1>
              <p className="text-15 text-white/75 max-lg:text-center">
                Experience natural, lifelike audio and exceptional build quality made for the passionate music
                enthusiast.
              </p>

              <Link href="/headphones" className="button-primary center-item mt-10 max-w-[160px]">
                SEE PRODUCT
              </Link>
            </div>
          </div>
          <div className="bg-headphone bg-cover bg-center bg-no-repeat max-lg:hidden" />
        </div>
      </section>

      <ProductCategories className="content-wrapper pt-28 lg:pt-40" />

      <section className="content-wrapper relative mt-24 grid h-[600px] grid-cols-1 overflow-hidden rounded-lg bg-primary-main max-lg:py-14 md:h-[720px] lg:h-[560px] lg:grid-cols-[1fr_0.7fr]">
        <span className="absolute -left-[20%] bottom-[5%] size-[558px] rounded-full border border-white/20 md:-left-[13%] md:size-[944px] lg:-left-[15%] lg:-top-[10%]" />
        <div className="z-[1] flex items-end justify-center overflow-hidden">
          <Image
            src="/images/speaker.webp"
            alt="speaker"
            width={410}
            height={493}
            className="block h-[207px] w-[192.25px] object-contain md:h-[237px] md:w-[197.23px] lg:h-[493px] lg:w-[410px] lg:translate-y-7"
          />
        </div>
        <div className="z-[1] flex flex-col justify-center max-lg:items-center">
          <p className="max-w-[240px] text-[2.25rem] font-bold leading-[40px] text-white max-lg:text-center md:text-[3.5rem] md:leading-[58px]">
            ZX9 SPEAKER
          </p>
          <p className="mt-3 max-w-[349px] text-15 leading-[25px] text-white/75 max-lg:text-center max-md:px-5">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>

          <Link href="/speakers" className="button-secondary center-item mt-6 w-fit">
            SEE PRODUCT
          </Link>
        </div>
      </section>

      <section className="content-wrapper mt-6 flex h-[320px] items-center rounded-lg bg-speaker-on-table bg-cover bg-bottom bg-no-repeat md:mt-8 lg:mt-12">
        <div className="ml-4 md:ml-16 lg:ml-20">
          <p className="text-[1.75rem] font-bold leading-[38.25px] text-black">ZX7 SPEAKER</p>
          <Link href="/speakers" className="button-outline mt-6 flex w-[160px] items-center justify-center">
            SEE PRODUCT
          </Link>
        </div>
      </section>

      <section className="content-wrapper mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2 md:gap-[11px] lg:mt-12 lg:gap-[1.875rem]">
        <div className="h-[200px] rounded-lg bg-earbud bg-cover bg-center md:h-[320px]" />
        <div className="flex h-[200px] flex-col justify-center rounded-lg bg-light-gray pl-4 md:h-[320px] md:pl-16 lg:pl-20">
          <p className="text-[1.75rem] font-bold leading-[38.25px] text-black">YX1 EARPHONES</p>
          <Link href="/earphones" className="button-outline mt-6 flex w-[160px] items-center justify-center">
            SEE PRODUCT
          </Link>
        </div>
      </section>

      <PreFooter />
    </>
  );
};

export default Home;
