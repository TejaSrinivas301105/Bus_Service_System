import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-amber-500">SmartBus 🚍</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            A modern platform for real-time bus tracking, seat availability, 
            and IoT-powered passenger monitoring.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/Home" className="hover:text-amber-500 transition">Home</a></li>
            <li><a href="/Routes" className="hover:text-amber-500 transition">Available Buses</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">About</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-500 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-amber-500 transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-amber-500 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-amber-500 transition"><Github size={20} /></a>
            <a href="mailto:example@email.com" className="hover:text-amber-500 transition"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} SmartBus | Built with ❤️ by Our Team
      </div>
    </footer>
  );
};

export default Footer;
