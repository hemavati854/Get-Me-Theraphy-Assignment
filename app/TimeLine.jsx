// components/Timeline.js
import React from 'react';

const Timeline = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-4xl">
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 relative">
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-pink-500 font-bold text-lg">1</div>
          <div className="h-12 md:h-0 md:w-12 w-0 bg-pink-500 absolute top-4 md:top-auto md:left-8"></div>
          <div className="bg-white p-4 shadow-md border-2 border-pink-200 rounded-md text-center md:text-left">
            <h2 className="text-pink-500 font-semibold">Week 1 - Relief & Clarity:</h2>
            <p className="text-gray-700">Feel the weight start to lift as you open up, discovering clarity in a safe, non-judgmental space.</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0 space-y-4 md:space-y-0 md:space-x-4 relative">
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-pink-500 font-bold text-lg">2</div>
          <div className="h-12 md:h-0 md:w-12 w-0 bg-pink-500 absolute top-4 md:top-auto md:left-8"></div>
          <div className="bg-white p-4 shadow-md border-2 border-pink-200 rounded-md text-center md:text-left">
            <h2 className="text-pink-500 font-semibold">Week 4 - Increased Resilience:</h2>
            <p className="text-gray-700">Begin to notice your reactions shift—less anxiety, more calmness, and tools to manage stress.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
