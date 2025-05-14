import { notFound } from 'next/navigation';
import { cars } from '@/data/cars';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CarDetailPage({ params }) {
  const car = cars.find((c) => c.id === params.id);

  if (!car) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-[100px]">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Image and Price */}
          <div className="lg:w-1/2">

            <div className="w-full items-center flex mb-8">
              <Image
                src={car.image}
                alt={car.name}
                layout="responsive"
                width={0}
                height={0}
              />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-sm text-gray-500">LISTING PRICE</div>
                <div className="text-4xl font-bold">${car.price.toLocaleString()}</div>
              </div>
              <Link href="/contact" className="bg-red-900 hover:bg-red-800 text-white px-6 py-3 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Dealer
              </Link>
            </div>
          </div>

          {/* Right Column - Car Details */}
          <div className="lg:w-1/2">
            <div className="border-b border-gray-200">
              <h1 className="text-5xl font-bold">{car.name}</h1>
              <p className="text-xl text-gray-500 uppercase">{car.make}</p>
              <div className="LineGradient w-full h-[3px] mb-6 mt-6"></div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="border border-gray-300 rounded-full px-4 py-1">Slightly Used</span>
              <span className="border border-gray-300 rounded-full px-4 py-1">{car.year}</span>
              <span className="border border-gray-300 rounded-full px-4 py-1">{car.make}</span>
            </div>

            <div className="grid grid-cols-2 gap-y-4 mb-8">
              <div>
                <div className="text-sm font-bold uppercase">MAKE & MODEL</div>
                <div>{car.make} {car.model}</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase">MODEL YEAR</div>
                <div>{car.year}</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase">MILEAGE</div>
                <div>{car.mileage} miles (slightly used)</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase">TOP SPEED</div>
                <div>{car.topSpeed} mph (limited)</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase">0-60 MPH</div>
                <div>{car.acceleration} seconds</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase">HORSEPOWER</div>
                <div>{car.horsepower} HP</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase">EXTERIOR COLOR</div>
                <div>{car.exteriorColor}</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase">INTERIOR COLOR</div>
                <div>{car.interiorColor}</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase">ENGINE</div>
                <div>{car.engine}</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase">MPG (CITY/HIGHWAY)</div>
                <div>{car.mpgCity}/{car.mpgHighway} MPG</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase">FUEL TYPE</div>
                <div>{car.fuelType}</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase">SEATING CAPACITY</div>
                <div>{car.seatingCapacity}</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase">BODY TYPE</div>
                <div>{car.bodyType}</div>
              </div>
            </div>

            <div>
              <p className="text-gray-700">
                {car.description || `The ${car.year} ${car.make} ${car.model} blends luxury, technology, and performance into a refined driving experience. With its sleek design, turbocharged power, and advanced tech features, the ${car.model} is the perfect balance of sophistication and sportiness.`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}