import React from "react";

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-blue-100 overflow-hidden">
      
      {/* Decorative waves */}
      <div className="absolute bottom-0 w-full h-40 bg-blue-600 rounded-t-full opacity-20 animate-wave"></div>
      <div className="absolute bottom-0 w-full h-32 bg-blue-500 rounded-t-full opacity-30 animate-wave animation-delay-2000"></div>

      {/* Main content */}
      <h1 className="text-7xl font-extrabold text-white text-center drop-shadow-lg">
        Welcome to SwimConnect
      </h1>
      <p className="mt-6 text-xl text-white text-center max-w-xl drop-shadow-md">
        Your gateway to swimming pools, instructors, and aquatic adventures.
      </p>
      
      <button className="mt-10 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
        Get Started
      </button>
    </div>
  );
}

export default Home;
