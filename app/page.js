import Image from "next/image";
import Link from "next/link";
import BottleSection from "./BottleSection";
import HydrationShowcase from "./HydrationShowcase";
import Footer from "./Footer";
import Transform from "./Transform";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-white text-black font-sans relative">
        {/* Header */}
        <header className="w-full flex justify-between items-center p-6 px-12">
          <h1 className="text-2xl font-bold">BOTOL</h1>
          {/* <Image src="/botol.jpg" width={300} height={100} alt="botol logo"/> */}
          <nav className="space-x-6">
            <Link href="#" className="text-gray-600 hover:text-black">Shop</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Contact us</Link>
            <Link href="#" className="text-gray-600 hover:text-black">About</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Journal</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Custom</Link>
          </nav>
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full">Inquiry Now</button>
        </header>

        {/* Main Section */}
        <div className="relative flex flex-col items-center text-center mt-24">
          {/* Cap Image positioned just above the heading */}
          <div className="absolute top-[-60px] flex justify-center w-full">
            <Image src="/cap.png" width={100} height={100} alt="Bottle Cap" />
          </div>

          {/* Circular Ring */}
          <div className="absolute w-96 h-96 border-4 border-blue-300 rounded-full"></div>

          {/* Content inside the circle */}
          <h2 className="text-5xl font-extrabold relative z-10 mt-12">
            The Ultimate Companion for Hydration
          </h2>
          <p className="text-lg text-gray-600 mt-4 relative z-10">
            We believe in the power of hydration.<br />Our mission is simple yet vital.
          </p>
          <button className="mt-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-full text-lg relative z-10">
            Inquiry Now
          </button>
        </div>

        {/* Bottom Side Bottles */}
        <div className="absolute bottom-[-15rem] left-0 p-4">
          <Image src="/2.png" width={120} height={120} alt="Left Side Bottle" />
        </div>
        <div className="absolute bottom-[-15rem] right-0 p-4">
          <Image src="/3.png" width={120} height={120} alt="Right Side Bottle" />
        </div>
      </div>

      <div className="min-h-screen mt-60">
        <main className="container mx-auto px-4 py-16">
          <BottleSection />
        </main>
      </div>
      <div className="min-h-screen">
        <main className="container mx-auto px-4 py-16">
          <HydrationShowcase />
        </main>
      </div>
      <div className="min-h-screen">
        <main className="container mx-auto px-4 py-16">
          <Transform/>
          <Footer />
        </main>
      </div>
    </div>
  );
}
