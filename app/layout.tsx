import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Toast } from "@/components/ui/toast";

const geistSans = Manrope({ variable: "--font-Manrope", subsets: ["latin"] });

export const metadata: Metadata = { title: "Audiophile", description: "Audiophile" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${geistSans.variable} flex min-h-dvh flex-col font-[family-name:var(--font-Manrope)] antialiased`}
        >
          <Toast />
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
