import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import { Anton, Bayon, Bebas_Neue, IBM_Plex_Mono, Jost } from 'next/font/google';
import Footer from './Footer';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
});

const anton = Anton({
  subsets: ['latin'],
  weight: ['400']
});

const bayon = Bayon({
  subsets: ['latin'],
  weight: ['400']
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const ibm_Plex_Mono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700']
});

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/range-rover background.png"
          alt="Range Rover Sport"
          fill
          className="object-cover"
          priority
        />
      </div>
      <Navbar />




      {/* Hero Content */}
      <div className="relative z-10 flex flex-col h-full max-w-7xl mx-auto px-8">
        <div className="text-center mt-[100px]">
          <p className={`text-[18px] uppercase tracking-[3.6px] mb-2 ${bebasNeue.className} uppercase`}>New Listing</p>
          <h1 className={`text-5xl font-bold uppercase tracking-[4.5px] ${anton.className} `}>
            2023 Range Rover Sport
          </h1>
        </div>
      </div>
    </div>
  );
};

const AboutCompany = () => {
  return (
    <div className="">
      <div className="pt-[100px] pb-[50px] px-8">
        <div className="max-w-[1088px] mx-auto">
          <div className="flex mb-[10px]">
            <h2 className={`${bebasNeue.className} mr-[15px] text-nowrap text-[16px] tracking-[1.6px] uppercase text-sm font-bold`}>About Company</h2>
            <div className="w-full h-[2px] bg-black my-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left side image */}
            <div className="w-[643px]">
              <Image
                src="/jeep 1 pic.png"
                alt="Jeep in dark lighting"
                layout="responsive"
                width={0}
                height={0}
              />
            </div>

            {/* Center stats */}
            <div className="flex flex-col justify-between xl:h-[502px] lg:gap-[50px] gap-[25px]">
              <div className="bg-white rounded-[25px] w-[120px] h-[120px] flex justify-center items-center flex-col shadow-xl hover:scale-90 duration-300 ease-in-out">
                <div className={`${bayon.className} text-[50px] tracking-[5px]`}>3+</div>
                <div className={`${bebasNeue.className} text-[12px] -mt-[10px] tracking-[1.2px]`}>Years</div>
              </div>

              <div className="bg-white rounded-[25px] w-[120px] h-[120px] flex justify-center items-center flex-col shadow-xl hover:scale-90 duration-300 ease-in-out">
                <div className={`${bayon.className} text-[50px] tracking-[5px]`}>60+</div>
                <div className={`${bebasNeue.className} text-[12px] -mt-[10px] tracking-[1.2px]`}>Deals</div>
              </div>

              <div className="bg-white rounded-[25px] w-[120px] h-[120px] flex justify-center items-center flex-col shadow-xl hover:scale-90 duration-300 ease-in-out">
                <div className={`${bayon.className} text-[50px] tracking-[5px]`}>2</div>
                <div className={`${bebasNeue.className} text-[12px] -mt-[10px] tracking-[1.2px]`}>Locations</div>
              </div>
            </div>

            {/* Right side image */}
            <div className="w-[264px]">
              <Image
                src="/jeep 2 pic.png"
                alt="Jeep in dark lighting"
                layout="responsive"
                width={0}
                height={0}
              />
            </div>
          </div>


        </div>

      </div>
      {/* Brand logos */}
      <div className="w-full justify-center flex  mt-16 mb-[100px] overflow-clip">
        <div className="flex lg:justify-between xl:gap-[180px] lg:-gap-[100px] gap-[100px] items-center flex-nowrap">
          <div className="w-[60px]">
            <Image
              src="/mercedes logo.png"
              alt="Mercedes Logo"
              layout="responsive"
              width={0}
              height={0}
            />
          </div>
          <div className="w-[140px]">
            <Image
              src="/ford logo.png"
              alt="ford Logo"
              layout="responsive"
              width={0}
              height={0}
            />
          </div>
          <div className="w-[120px]">
            <Image
              src="/toyota logo.png"
              alt="toyota Logo"
              layout="responsive"
              width={0}
              height={0}
            />
          </div>
          <div className="w-[140px]">
            <Image
              src="/mustang logo.png"
              alt="mustang Logo"
              layout="responsive"
              width={0}
              height={0}
            />
          </div>
          <div className="w-[140px]">
            <Image
              src="/hyundai logo.png"
              alt="hyundai Logo"
              layout="responsive"
              width={0}
              height={0}
            />
          </div>
          <div className="w-[140px]">
            <Image
              src="/lexus logo.png"
              alt="lexus Logo"
              layout="responsive"
              width={0}
              height={0}
            />
          </div>
          <div className="w-[100px]">
            <Image
              src="/infinity logo.png"
              alt="infinity Logo"
              layout="responsive"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InventorySection = () => {
  return (
    <div className="py-16 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex mb-[10px]">
          <h2 className={`${bebasNeue.className} mr-[15px] text-nowrap text-[16px] tracking-[1.6px] uppercase text-sm font-bold`}>Our Inventory</h2>
          <div className="w-full h-[2px] bg-black my-auto"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side text */}
          <div className={`${jost.className} lg:w-1/2 `}>
            <h3 className={`${bayon.className} mb-6 text-[50px] tracking-[5px]`}>CARS / <span className="TextGradient">CAR PARTS</span></h3>
            <p className="text-[16px] tracking-[1.6px] mb-6">
              At Mak's Family Enterprise, we offer a wide range of cars from top brands and high-quality car parts that ensure performance and reliability. Whether you're looking for your next ride or the perfect part, we've got you covered.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">

              <Link
                href="/inventory"
                className={`${jost.className} hover:scale-95 hover:opacity-85 tracking-[1.6px] ButtonGradient text-white gap-[4px] py-[8px] px-[15px] flex items-center text-center hover:bg-red-900 transition`}
              >
                <div className={`w-[20px] -rotate-135 text-[16px]`}>
                  <Image
                    src="/right arrow.png"
                    alt="right arrow"
                    layout="responsive"
                    width={0}
                    height={0}
                  />
                </div>
                Browse Car Inventory
              </Link>
            </div>

            {/* Icon bar */}
            <div className="flex mt-[30px] gap-8">
              {/* Center stats */}
              <div className="flex gap-[50px] w-full">
                <div className="bg-white rounded-[25px] w-[100px] h-[100px] flex justify-center items-center flex-col shadow-md hover:-translate-y-[8px] ease-in-out duration-400 hover:scale-110">
                  <div className="w-[60px]">
                    <Image
                      src="/car icon.png"
                      alt="toyota car"
                      layout="responsive"
                      width={0}
                      height={0}
                    />
                  </div>
                </div>

                <div className="bg-white rounded-[25px] w-[100px] h-[100px] flex justify-center items-center flex-col shadow-md hover:-translate-y-[8px] ease-in-out duration-400 hover:scale-110">
                  <div className="w-[60px]">
                    <Image
                      src="/handshake icon.png"
                      alt="toyota car"
                      layout="responsive"
                      width={0}
                      height={0}
                    />
                  </div>
                </div>

                <div className="bg-white rounded-[25px] w-[100px] h-[100px] flex justify-center items-center flex-col shadow-md hover:-translate-y-[8px] ease-in-out duration-400 hover:scale-110">
                  <div className="w-[60px]">
                    <Image
                      src="/maintenance icon.png"
                      alt="toyota car"
                      layout="responsive"
                      width={0}
                      height={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side images */}
          <div className="lg:w-1/2 flex gap-[10px]">
            <div className="w-[227px]">
              <Image
                src="/toyota 1 pic.png"
                alt="toyota car"
                layout="responsive"
                width={0}
                height={0}
              />
            </div>
            <div className="w-[212px]">
              <Image
                src="/toyota 2 pic.png"
                alt="toyota car"
                layout="responsive"
                width={0}
                height={0}
              />
            </div>
            <div className="w-[217px]">
              <Image
                src="/toyota 3 pic.png"
                alt="toyota car"
                layout="responsive"
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

const LocationsSection = () => {
  return (
    <div className="py-16 px-8 mb-[100px]">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex mb-[10px]">
          <h2 className={`${bebasNeue.className} mr-[15px] text-nowrap text-[16px] tracking-[1.6px] uppercase text-sm font-bold`}>Export / Import</h2>
          <div className="w-full h-[2px] bg-black my-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side locations */}
          <div className="lg:w-[550px] shadow-lg rounded-[25px] px-[30px] py-[50px]">
            <div className="mb-12">
              <div className="flex mb-[10px]">
                <h2 className={`${bebasNeue.className} mr-[15px] text-nowrap text-[30px] tracking-[3px] uppercase text-sm font-bold`}>Charlotte</h2>
                <div className="w-full h-[2px] bg-black my-auto"></div>
              </div>
              <p className={`${jost.className} text-[13px] font-light tracking-[1.3px]`}>
                We export vehicles overseas for customers between Charlotte USA, and Republic of Congo Africa. We will have a few more locations coming soon. Contact us for any questions.              </p>
            </div>

            <div>
              <div className="flex mb-[10px]">
                <div className="w-full h-[2px] ButtonGradient my-auto mr-[15px]"></div>
                <h2 className={`${bebasNeue.className} text-nowrap text-[30px] TextGradient tracking-[3px] uppercase text-sm font-bold`}>Republic of Congo</h2>
              </div>
              <p className={`${jost.className} text-[13px] font-light tracking-[1.3px]`}>
                Our import/export process makes it easy to move vehicles between the Republic of Congo and Charlotte. From logistics to delivery, we handle every step to ensure cars arrive safely and on time.              </p>
            </div>
          </div>

          {/* Right side map */}
          <div className="shadow-lg px-[15px] py-[10px] flex items-center rounded-[25px]">

            <div className="w-[521px]">
              <Image
                src="/export map.png"
                alt="map"
                layout="responsive"
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const ContactSection = () => {
//   return (
//     <div className="relative py-16 bg-white">
//       {/* "GOT" text */}
//       <div className="text-center mb-[-40px]">
//         <h2 className="text-9xl font-black uppercase">GOT</h2>
//       </div>

//       {/* Contact form */}
//       <div className="max-w-md mx-auto bg-black text-white p-8 relative z-10">
//         <h3 className="text-center font-bold mb-6">CONTACT US.</h3>
//         <p className="text-center text-sm text-gray-400 mb-6">Have a question? Send us a message and we will get back to you in 2 days.</p>

//         <form className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm mb-1">First name</label>
//               <input
//                 type="text"
//                 className="w-full bg-gray-900 border-none p-2 text-white"
//                 placeholder="Your first name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-1">Last name</label>
//               <input
//                 type="text"
//                 className="w-full bg-gray-900 border-none p-2 text-white"
//                 placeholder="Your last name"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm mb-1">Email</label>
//               <input
//                 type="email"
//                 className="w-full bg-gray-900 border-none p-2 text-white"
//                 placeholder="Your email"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-1">Location</label>
//               <input
//                 type="text"
//                 className="w-full bg-gray-900 border-none p-2 text-white"
//                 placeholder="Charlotte/Republic of Congo"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Message</label>
//             <textarea
//               className="w-full bg-gray-900 border-none p-2 text-white h-24"
//               placeholder="Leave us a message..."
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-red-700 hover:bg-red-800 text-white py-3 uppercase font-bold"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* "QUESTIONS?" text */}
//       <div className="text-center mt-[-40px]">
//         <h2 className="text-9xl font-black uppercase text-red-700">QUESTIONS?</h2>
//       </div>
//     </div>
//   );
// };

<Footer />

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutCompany />
      <InventorySection />
      <LocationsSection />
      {/* <ContactSection /> */}
    </div>
  );
};

export default HomePage;