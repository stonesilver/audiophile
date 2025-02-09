import Link from "next/link";
import BrandIcon from "@/assets/icons/brand-logo.svg";
import { navList } from "@/utils/constants";
import MobileHamburger from "../home/mobile-hamburger";
import CartHeader from "../cart/cart-header";

const Header = () => {
  return (
    <header className="sticky top-0 z-[10] bg-[#141414]">
      <nav className="flex h-[80px] px-6 text-white md:h-[92px] md:border-b-[0.1px] md:border-b-[#97979780] md:px-10 xl:px-24">
        <ul className="flex flex-1 items-center justify-between">
          <li className="">
            <MobileHamburger />

            <Link href="/" className="max-lg:hidden">
              <BrandIcon />
            </Link>
          </li>
          <li className="flex-1 max-lg:hidden">
            <ul className="flex items-center justify-center gap-8 text-13 font-bold">
              {navList.map(({ label, href }) => (
                <li key={label} className="">
                  <Link href={href} className="hover:text-primary-main">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <CartHeader />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
