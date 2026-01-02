import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-300 to-blue-600 p-4">
      
      {/* Heading */}
      <h1 className="text-6xl font-extrabold text-white text-center drop-shadow-lg">
        About SwimConnect
      </h1>
      
      {/* Description */}
      <p className="mt-6 text-lg text-white text-center max-w-2xl drop-shadow-md">
        SwimConnect is your all-in-one platform to find swimming pools, certified instructors, and aquatic activities near you.  
        Whether you're a beginner learning to swim or a fitness enthusiast, we connect you with the resources and instructors you need to dive in with confidence.
      </p>

      {/* Optional feature list */}
      <div className="mt-10 flex flex-col space-y-4 text-white text-center max-w-xl">
        <p>🏊 Access swimming pools near you</p>
        <p>👩‍🏫 Book certified instructors easily</p>
        <p>📅 Manage schedules and bookings</p>
      </div>
    </div>
  );
}

export default About;
