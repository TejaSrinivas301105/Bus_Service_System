import React, { useState } from 'react'
import { Bus, CircleUserRound, X, Menu } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-amber-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between backdrop:blur-md">

        <div className="flex items-center gap-3">
          <Bus className="w-8 h-8 text-blue-600" />
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-green-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent">
            Bus Service System
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="/Home" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="/Routes" className="hover:text-blue-600 transition-colors">Routes</a>
          <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Queries</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="btn btn-circle bg-amber-200 w-10 h-10 hover:bg-amber-400">
            <CircleUserRound className="w-6 h-6 text-black" />
          </button>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7 text-black hover:text-amber-200 cursor-pointer opacity-0.2" /> : <Menu className="w-7 h-7 text-black hover:text-amber-200 cursor-pointer" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-amber-50 shadow-lg px-6 py-4 space-y-3 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <a href="/Home" className="block text-gray-700 hover:text-blue-600 transition-colors">Home</a>
        <a href="/Routes" className="block text-gray-700 hover:text-blue-600 transition-colors">Routes</a>
        <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
        <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors">Queries</a>
      </div>
    </header>
  )
}

export default Header


