import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { 
  Search, User, Heart, ShoppingBag, 
  Truck, Menu, X 
} from "lucide-react";
// ✅ Added for global cart state
import { useCart } from "../context/CartContext"; 

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // ✅ Hook to access live cart data
  const { cart } = useCart(); 

  // ✅ Dynamic calculations
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const phoneNumber = "+91 76653 86165";
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-sm">
      {/* --- TOP BAR (Pinkish Red) --- */}
      <div className="bg-[#D37474] text-white py-2 px-4 md:px-10 flex justify-between items-center text-[10px] md:text-xs tracking-wider uppercase font-medium">
        <div className="flex items-center gap-1">
          <span>Need Help?</span>
          <a href={`tel:+917665386165`} className="font-bold hover:underline">
            {phoneNumber}
          </a>
        </div>
        
        <div className="hidden lg:block tracking-[0.2em]">
          FREE SHIPPING ON ALL ORDERS – <span className="underline cursor-pointer tracking-normal text-white">Madanlal Special</span>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/order-tracking" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <Truck size={14} /> <span className="hidden sm:inline">Order Tracking</span>
          </Link>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav className="bg-[#F3F1ED] border-b border-gray-200 px-4 md:px-10 py-3 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Left: Navigation (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 text-[#002D62] text-[13px] font-bold uppercase tracking-tight">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.href}
                className={({ isActive }) => 
                  `hover:text-blue-800 transition-colors py-1 ${isActive ? "border-b-2 border-[#002D62]" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Center: Brand Logo & Label */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="flex flex-col items-center">
              <img 
                src="/logo.png" 
                alt="Madanlal Trading Company" 
                className="h-12 md:h-16 w-auto object-contain"
              />
              <span className="text-[10px] font-black text-[#002D62] uppercase tracking-[0.2em] mt-1">
                Madanlal Trading Co.
              </span>
            </Link>
          </div>

          {/* Right: Icons & Actions */}
          <div className="flex items-center gap-3 md:gap-5 text-[#002D62]">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-1 hover:bg-gray-200 rounded-full transition-all"
            >
              <Search size={20} />
            </button>
            
            <button className="hidden md:block p-1 hover:bg-gray-200 rounded-full transition-all">
              <User size={20} />
            </button>
            
            <button className="p-1 hover:bg-gray-200 rounded-full transition-all relative">
              <Heart size={20} />
            </button>
            
            {/* ✅ Updated Cart Link with Dynamic Data */}
            <Link to="/cart" className="flex items-center gap-2 cursor-pointer group ml-1">
              <div className="relative">
                <ShoppingBag size={22} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D37474] text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:block font-bold text-sm">₹{totalAmount.toFixed(2)}</span>
            </Link>

            <button className="lg:hidden ml-2 p-1" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE SIDEBAR --- */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 transition-all">
            <div className="flex flex-col gap-4 text-[#002D62] font-bold uppercase text-sm">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="border-b border-gray-50 pb-2 hover:text-[#D37474]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- SEARCH MODAL --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[60] flex items-start justify-center pt-20 px-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b flex justify-between items-center bg-[#F3F1ED]">
              <h3 className="text-lg font-bold text-[#002D62] uppercase tracking-wider">Search Products</h3>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>
            <form onSubmit={handleSearch} className="p-6">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What are you craving today?"
                  className="flex-1 px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#002D62] text-[#002D62] font-medium"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#002D62] text-white font-bold rounded-xl hover:bg-blue-900 transition-all shadow-lg active:scale-95"
                >
                  Find
                </button>
              </div>
              <p className="mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                Popular: Bikaneri Bhujia, Potato Chips, Masala Kurkure
              </p>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;