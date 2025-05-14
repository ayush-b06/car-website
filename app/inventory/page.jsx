'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Anton, Jost } from 'next/font/google';
import { cars } from '@/data/cars'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const jost = Jost({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const anton = Anton({
  subsets: ['latin'],
  weight: ['400']
});



export default function InventoryPage() {
  return (
    <div className="">
      <Navbar />

      <div className="min-h-screen px-6 py-10 bg-white mb-[50px]">
        <div className="max-w-7xl mx-auto mt-[50px]">
          <div className="flex items-center">
            <h1 className={`text-[45px] font-black text-black mb-2 mr-[30px] ${anton.className} tracking-[3px] text-nowrap`}>CAR INVENTORY</h1>
            <div className="h-1 w-full LineGradient mb-10 my-[auto]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {cars.map((car) => (
              <Link
                key={car.id}
                href={`/inventory/${car.id}`}
                className="block shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-5">

                  <div className="h-[250px] flex items-center">
                    <Image
                      src={car.image}
                      alt={car.name}
                      layout="responsive"
                      width={0}
                      height={0}
                    />
                  </div>
                  <h2 className={`text-[16px] font-semibold mt-4 uppercase tracking-[0.5px] ${jost.className}`}>{car.name}</h2>
                  <div className="mt-1 text-[12px] text-gray-600">
                    <div className={`flex justify-between w-full ${jost.className}`}>
                      <div className="font-light uppercase tracking-[1px]">Type: <span className="font-semibold">{car.bodyType}</span> </div>
                      <div className="font-light uppercase tracking-[1px]">Model: <span className="font-semibold">{car.model}</span> </div>
                      <div className="font-light uppercase tracking-[1px]">Color: <span className="font-semibold">{car.exteriorColor}</span> </div>
                    </div>
                  </div>
                  <p className={`mt-3 TextGradient font-bold text-[18px] tracking-[1px] ${jost.className}`}>${car.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}
