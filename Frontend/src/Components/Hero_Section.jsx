import React from 'react'
import { Bus, MapPin, Users, Database } from "lucide-react";
const Hero_Section = () => {
  return (
    <div>
        <header className="text-center py-16 bg-gradient-to-r from-amber-500 to-amber-700 text-white">
          <h2 className="text-4xl font-bold mb-4">
            Track, Manage & Ride Smarter
          </h2>

          <p className="max-w-2xl mx-auto text-lg">
            A modern platform for real-time bus tracking, seat availability, and passenger monitoring.
          </p>

          <a
            href="/Routes"
            className="mt-6 px-6 btn btn-active py-3 bg-black text-white rounded-lg shadow hover:scale-105 transition"
          >
            Get Started
          </a>
        </header>
      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white shadow rounded-xl text-center hover:shadow-lg transition">
            <Bus className="mx-auto text-amber-600 w-12 h-12 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Available Buses</h4>
            <p className="text-sm text-gray-600">
              Check buses operating between your selected routes in real-time.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl text-center hover:shadow-lg transition">
            <MapPin className="mx-auto text-amber-600 w-12 h-12 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Route Information</h4>
            <p className="text-sm text-gray-600">
              Get detailed information about starting points and destinations.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl text-center hover:shadow-lg transition">
            <Users className="mx-auto text-amber-600 w-12 h-12 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Passenger Count</h4>
            <p className="text-sm text-gray-600">
              View real-time passenger data and available seats instantly.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl text-center hover:shadow-lg transition">
            <Database className="mx-auto text-amber-600 w-12 h-12 mb-4" />
            <h4 className="font-semibold text-lg mb-2">IoT Integration</h4>
            <p className="text-sm text-gray-600">
              Powered by ESP32 sensors and live updates from the database.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero_Section
