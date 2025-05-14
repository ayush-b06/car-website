"use client"

import { IBM_Plex_Mono, Jost } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const jost = Jost({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const ibm_Plex_Mono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700']
});


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center pt-[40px]">
            <div className={`${jost.className} justify-between xl:w-[65%] w-[80%] flex items-center mx-auto`}>
                <div className="flex gap-[25px] text-[14px]">

                    <Link href="/" className="tracking-[0.7px]">Home</Link>
                    <Link href="/inventory" className="tracking-[0.7px]">Inventory</Link>
                </div>
                <div className="">

                    <Link
                        href="/"
                        className="flex flex-col items-center">
                        <div className="text-4xl font-bold">MAK'S</div>
                        <div className={`${ibm_Plex_Mono.className} text-[8px] tracking-[4px]`}>FAMILY ENTERPRISE</div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar