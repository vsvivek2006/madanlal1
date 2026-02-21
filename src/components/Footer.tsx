import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Truck, ShieldCheck, Store, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  // Updated Contact Details
  const phoneNumber = "+917665386165";
  const displayPhone = "+91 76653 86165";
  const officialEmail = "info@madanlal.shop";

  return (
    <footer className="w-full bg-white font-sans text-[#002D62] mt-10 border-t border-gray-100">
      {/* --- TOP FEATURE GRID --- */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#F8F5F2] p-6 flex flex-col gap-2 rounded-sm border border-gray-50">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-[#002D62]" size={32} />
            <h3 className="font-bold text-lg">Uniqueness</h3>
          </div>
          <p className="text-sm text-gray-600">Pure Rajasthani traditional taste in every bite.</p>
        </div>

        <div className="bg-[#F8F5F2] p-6 flex flex-col gap-2 rounded-sm border border-gray-50">
          <div className="flex items-center gap-3">
            <Truck className="text-[#002D62]" size={32} />
            <h3 className="font-bold text-lg">Fast Delivery</h3>
          </div>
          <p className="text-sm text-gray-600">Fresh snacks delivered safely across India.</p>
        </div>

        <div className="bg-[#F8F5F2] p-6 flex flex-col gap-2 rounded-sm border border-gray-50">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#002D62]" size={32} />
            <h3 className="font-bold text-lg">Hygiene First</h3>
          </div>
          <p className="text-sm text-gray-600">100% pure ingredients and untouched packing.</p>
        </div>

        <div className="bg-[#F8F5F2] p-6 flex flex-col gap-2 rounded-sm border border-gray-50">
          <div className="flex items-center gap-3">
            <Store className="text-[#002D62]" size={32} />
            <h3 className="font-bold text-lg">Bulk Orders</h3>
          </div>
          <p className="text-sm text-gray-600">Special wholesale rates for shops and events.</p>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* --- MAIN FOOTER LINKS --- */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Information Section */}
        <div>
          <h4 className="font-bold mb-6 text-lg underline decoration-1 underline-offset-8 uppercase tracking-wider">Information</h4>
          <ul className="space-y-3 text-sm text-gray-700 font-medium">
            <li><Link to="/privacy" className="hover:text-[#D37474] transition-colors">Privacy policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-[#D37474] transition-colors">Refund Policy</Link></li>
            <li><Link to="/shipping-return" className="hover:text-[#D37474] transition-colors">Shipping & Return</Link></li>
            <li><Link to="/terms" className="hover:text-[#D37474] transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/onboarding-agreement" className="hover:text-[#D37474] transition-colors">Onboarding Agreement</Link></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="font-bold mb-6 text-lg underline decoration-1 underline-offset-8 uppercase tracking-wider">Quick links</h4>
          <ul className="space-y-3 text-sm text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-[#D37474] transition-colors">Home</Link></li>
            <li><Link to="/shop" className="hover:text-[#D37474] transition-colors">Shop</Link></li>
            <li><Link to="/about" className="hover:text-[#D37474] transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#D37474] transition-colors">Contact Us</Link></li>
            <li><Link to="/account" className="hover:text-[#D37474] transition-colors">My account</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="font-bold mb-6 text-lg underline decoration-1 underline-offset-8 uppercase tracking-wider">Contact us</h4>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Madanlal Trading Company ke swadisht snacks ke bulk order ke liye sampark karein.
          </p>
          <p className="text-sm font-bold mb-1 text-[#002D62]">{displayPhone}</p>
          <p className="text-sm text-gray-600 break-all font-medium">{officialEmail}</p>
        </div>

        {/* Our Factory Section */}
        <div>
          <h4 className="font-bold mb-6 text-lg underline decoration-1 underline-offset-8 uppercase tracking-wider">Our Factory</h4>
          <div className="text-sm space-y-4">
            <p>
              <span className="font-bold block text-[#002D62]">Address:</span>
              <span className="text-gray-600 leading-relaxed italic">
                PLOT NO 189-B, BAALNATH NAGAR-8, SISIYAWAS, AKEDA ROAD, VKI AREA, Jaipur, Rajasthan, 302013
              </span>
            </p>
            <p>
              <span className="font-bold block text-[#002D62]">Business Hours:</span>
              <span className="text-gray-600">9.30am – 6.30pm (Mon to Sat)</span>
            </p>
          </div>
        </div>
      </div>

      {/* --- COPYRIGHT BAR --- */}
      <div className="border-t border-gray-100 py-6 text-center text-xs md:text-sm text-gray-500 bg-[#F9F9F9] font-bold tracking-widest uppercase">
        Copyright 2026 © MADANLAL.SHOP All rights reserved.
      </div>

      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <a 
        href={`https://wa.me/${phoneNumber.replace('+', '').replace(/\s/g, '')}?text=Hello Madanlal Trading Company, I want to order snacks.`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center group cursor-pointer z-50"
      >
        <div className="bg-white px-4 py-2 rounded-full shadow-lg mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium text-gray-700 border border-gray-100">
          Order on WhatsApp
        </div>
        <div className="bg-[#25D366] p-3 rounded-full shadow-2xl text-white hover:scale-110 transition-transform duration-300">
          <MessageCircle size={30} fill="currentColor" />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
