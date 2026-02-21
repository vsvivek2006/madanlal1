import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, ShoppingBag, Phone, MessageCircle, Star, Zap } from "lucide-react";
import { Helmet } from "react-helmet";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-[#002D62]">
      {/* ✅ SEO Component */}
      <Helmet>
        <title>404 - Taste Not Found | Madanlal Trading Company - Jaipur</title>
        <meta
          name="description"
          content="The page you are looking for is missing, but our premium Jaipur snacks are always here. Explore Madanlal Trading Company's shop."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Hero Section - Error Display */}
      <section className="relative py-20 bg-[#002D62] text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-[120px] md:text-[200px] font-black leading-none opacity-20 select-none">404</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter -mt-10 md:-mt-20">
            Taste <span className="text-[#D37474]">Missing</span>!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            This page has vanished, just like a freshly opened packet of our crunchy Bhujia!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-[#002D62] transition-all font-bold"
            >
              <ArrowLeft size={20} /> Go Back
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#D37474] text-white hover:bg-[#b85a5a] transition-all font-bold shadow-lg"
            >
              <Home size={20} /> Return Home
            </Link>
          </div>
        </div>
      </section>

      {/* Suggestion Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest">Why not try something fresh?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Suggestion 1 */}
          <Link to="/shop" className="group p-8 bg-[#F8F5F2] rounded-[2rem] border border-transparent hover:border-[#D37474] transition-all">
            <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#002D62] shadow-sm group-hover:bg-[#D37474] group-hover:text-white transition-all">
              <ShoppingBag size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase">Full Shop</h3>
            <p className="text-gray-500 text-sm mb-4">Explore our full range of 50+ Namkeen and Chips varieties.</p>
            <span className="text-[#D37474] font-black group-hover:underline">Browse Products →</span>
          </Link>

          {/* Suggestion 2 */}
          <Link to="/about" className="group p-8 bg-[#F8F5F2] rounded-[2rem] border border-transparent hover:border-[#D37474] transition-all">
            <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#002D62] shadow-sm group-hover:bg-[#D37474] group-hover:text-white transition-all">
              <Star size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase">Our Story</h3>
            <p className="text-gray-500 text-sm mb-4">Discover the legacy and purity of Madanlal Trading Company.</p>
            <span className="text-[#D37474] font-black group-hover:underline">Learn More →</span>
          </Link>

          {/* Suggestion 3 */}
          <div onClick={() => window.open('https://wa.me/918955611943', '_blank')} className="cursor-pointer group p-8 bg-[#F8F5F2] rounded-[2rem] border border-transparent hover:border-[#D37474] transition-all">
            <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#002D62] shadow-sm group-hover:bg-[#25D366] group-hover:text-white transition-all">
              <MessageCircle size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase">Bulk Order</h3>
            <p className="text-gray-500 text-sm mb-4">Place a direct WhatsApp order or discuss distributorship.</p>
            <span className="text-[#25D366] font-black group-hover:underline">Chat Now →</span>
          </div>
        </div>
      </section>

      {/* Quick Help Banner */}
      <section className="pb-20 px-6 max-w-5xl mx-auto">
        <div className="bg-[#002D62] rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Feeling Hungry?</h3>
            <p className="text-blue-200">Madanlal's premium snacks are just a message away.</p>
          </div>
          <div className="flex gap-4">
            <a href="tel:+918955611943" className="bg-[#D37474] p-4 rounded-2xl hover:scale-105 transition-transform flex items-center justify-center shadow-lg">
              <Phone size={24} />
            </a>
            <a href="https://wa.me/918955611943" className="bg-[#25D366] p-4 rounded-2xl hover:scale-105 transition-transform flex items-center justify-center shadow-lg">
              <MessageCircle size={24} fill="currentColor" />
            </a>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
           <Zap size={16} fill="currentColor" className="text-[#D37474]"/> Madanlal Trading Company - Authentic Jaipur Taste
        </p>
      </section>
    </div>
  );
};

export default NotFound;