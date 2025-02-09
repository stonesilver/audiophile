import BrandIcon from "@/assets/icons/brand-logo.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import Link from "next/link";
import { navList } from "@/utils/constants";

const socials = [
  { Icon: FacebookIcon, href: "https://facebook.com" },
  { Icon: TwitterIcon, href: "https://x.com" },
  { Icon: InstagramIcon, href: "https://instagram.com" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <section className="content-wrapper relative py-12 text-white md:py-14 lg:py-16">
        <ul className="flex space-y-8 text-13 font-bold max-lg:flex-col max-md:items-center lg:items-center lg:justify-between">
          <li className="">
            <Link href="">
              <BrandIcon />
            </Link>
          </li>
          <li className="">
            <ul className="flex gap-8 max-md:flex-col">
              {navList.map(({ label, href }) => (
                <li key={label} className="text-center">
                  <Link href={href} className="hover:text-primary-main">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <div className="mt-8 grid grid-cols-1 gap-12 text-white/50 max-md:text-center md:grid-cols-2">
          <p className="leading-[25px ] text-15 md:max-lg:col-span-2">
            Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and
            sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
            facility - we&apos;re open 7 days a week.
          </p>
          <div className="flex justify-center gap-4 max-lg:order-3 md:items-end md:justify-end">
            {socials.map(({ Icon, href }) => (
              <Link key={href} href={href} target="_blank" className="group">
                <Icon className="cursor-pointer group-hover:[&>path]:fill-primary-main" />
              </Link>
            ))}
          </div>
          <p className="flex-1 text-15 font-bold">Copyright 2021. All Rights Reserved</p>
        </div>

        <span className="absolute left-[50%] top-0 h-[4px] w-[110px] bg-primary-main max-md:-translate-x-[50%] md:left-0" />
      </section>
    </footer>
  );
};

export default Footer;
