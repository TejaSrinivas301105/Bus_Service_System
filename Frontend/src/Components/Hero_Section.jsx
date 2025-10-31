import React from 'react'
import { Bus, MapPin, Users, Database } from "lucide-react";

const Hero_Section = () => {
  return (
    <div className="pt-20"> {/* added top padding to offset fixed header */}
      
      {/* Hero Header */}
      <header className="text-center py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-amber-600 text-white shadow-2xl relative overflow-hidden">
        {/* Glow Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20 blur-2xl"></div>

        <h2 className="relative text-5xl font-extrabold mb-6 drop-shadow-[0_3px_10px_rgba(0,0,0,0.3)] bg-gradient-to-r from-amber-300 via-yellow-200 to-white bg-clip-text text-transparent tracking-wide">
          Track, Manage & Ride Smarter
        </h2>
        <p className="relative max-w-2xl mx-auto text-lg opacity-90 text-gray-100 drop-shadow-md">
          A modern platform for real-time bus tracking, seat availability, and passenger monitoring.
        </p>
        <a
          href="/routes"
          className="relative mt-10 inline-block px-10 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full text-black font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Get Started
        </a>
      </header>

      {/* Key Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold text-center mb-14 from-blue-900 via-blue-800 to-amber-600 text-white shadow-2xl tracking-tight">
  Key Features
</h3>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <Bus className="w-10 h-10" />,
              title: "Available Buses",
              desc: "Check buses operating between your selected routes in real-time.",
            },
            {
              icon: <MapPin className="w-10 h-10" />,
              title: "Route Information",
              desc: "Get detailed information about starting points and destinations.",
            },
            {
              icon: <Users className="w-10 h-10" />,
              title: "Passenger Count",
              desc: "View real-time passenger data and available seats instantly.",
            },
            {
              icon: <Database className="w-10 h-10" />,
              title: "IoT Integration",
              desc: "Powered by ESP32 sensors and live updates from the database.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-amber-400 drop-shadow-md">
                {f.icon}
              </div>
              <h4 className="font-semibold text-lg mb-2 text-white tracking-wide">
                {f.title}
              </h4>
              <p className="text-sm text-gray-200 opacity-90">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero_Section;
