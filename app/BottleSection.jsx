'use client';

import Image from 'next/image';

export default function BottlesPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      {/* Left Side - Image */}
      <div className="flex-1 flex justify-center items-center relative z-10 w-full md:w-1/2 min-h-screen">
        <Image 
          src="/22.png" 
          alt="Bottle" 
          width={1000} 
          height={1000} 
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>
      
      {/* Right Side - Info */}
      <div className="flex-1 bg-gray-900 text-white p-16 md:p-20 flex flex-col justify-center relative z-20 md:w-1/2 min-h-screen">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Our Bottle Collection</h2>
        <div className="space-y-8">
          {[ 
            { name: 'Vacuum Bottles', icon: '🔵' },
            { name: 'Fridge Bottles & Jugs', icon: '🧊' },
            { name: 'Borosilicate Bottles', icon: '🥤' },
            { name: 'Kettles', icon: '♨️' },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-6 text-2xl md:text-3xl ml-16">
              <span>{item.icon}</span>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Center Image Overlapping Sections */}
      <div className="absolute top-1/2 left-[680px] transform -translate-x-1/2 -translate-y-1/2 z-30 w-[100%] h-[100%]">
        <Image 
          src="/bottlebody.png" 
          alt="Center Image" 
          width={1000} 
          height={1000} 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
