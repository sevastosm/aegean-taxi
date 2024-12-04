import Image from "next/image";

import "../globals.css";
import "../tailwind.scss";


// Image imports
import SearchIcon from 'public/assets/blog/search.png'
import HamburgerIcon from "public/assets/blog/hamburger.png";
import Footer from "@/components/blog/footer";
import Link from "next/link";


export const metadata = {
  title: "The best taxi app in Greece | Book 24/7 | Since 2015 | About Aegean",
  description: "The Best Taxi App for Greek Islands. 200,000+ Downloads in Apple iOS and Google Play store. Rated #1. Expert Team. Great Customer Service. Open 24/7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">
    <body>
      <header className="bg-black px-8 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-base font-medium">
          <Link href="/blog">
          Aegean Taxi <span className="font-bold">Blog</span>
          </Link>
        </div>
        {/* Action Section */}
        <div className="flex items-center space-x-4">
          <Image src={SearchIcon} alt="Search" className="w-5 h-5" />
          <button className="bg-white text-black py-2 px-4 rounded-full font-medium">
            Sign Up
          </button>
          <Image src={HamburgerIcon} alt="Menu" className="w-5 h-5" />
        </div>
      </header>
      {children}
      <Footer/>
    </body>
  </html>
}
