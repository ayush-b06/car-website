import { IBM_Plex_Mono, Jost } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const ibm_Plex_Mono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700']
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-[75px]">
      <div className="mx-auto px-8">
        <div className="pb-[30px] max-w-7xl flex justify-between mx-auto flex-col md:flex-row mb-10">
          <div>
            <Link
              href="/"
              className="flex flex-col items-center">
              <div className="text-4xl font-bold">MAK'S</div>
              <div className={`${ibm_Plex_Mono.className} text-[8px] tracking-[4px]`}>FAMILY ENTERPRISE</div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-[20px] mt-6 md:mt-0">
            <Link href="/inventory" className={`${jost.className} tracking-[1.3px] text-sm hover:text-gray-300 duration-300 ease-in-out font-light`}>Shop Car Inventory</Link>
            <Link href="/about" className={`${jost.className} tracking-[1.3px] text-sm hover:text-gray-300 duration-300 ease-in-out font-light`}>About Company</Link>
          </div>
        </div>

        <div className="pt-2 pb-[2px] opacity-70 text-[10px] font-light text-white text-center">
          <div className="w-full h-[0.5px] bg-white opacity-50"></div>
          © {new Date().getFullYear()} Mak's Family Enterprise
        </div>
      </div>
    </footer>
  );
};

export default Footer