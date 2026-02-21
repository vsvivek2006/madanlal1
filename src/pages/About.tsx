import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  Phone, MessageCircle, MapPin, Star, Heart, 
  ShieldCheck, Award, Utensils, Zap, Users, 
  Target, Factory, Truck
} from "lucide-react";

const About = () => {
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const coreValues = [
    {
      title: "Manufacturing Excellence",
      icon: <Factory className="text-[#D37474]" size={32} />,
      description: "Our state-of-the-art facility in Jaipur follows rigorous hygiene protocols to ensure that every packet of Madanlal snacks is safe and crunchy."
    },
    {
      title: "Authentic Ingredients",
      icon: <Utensils className="text-[#D37474]" size={32} />,
      description: "We use only premium quality vegetable oils and hand-picked spices sourced directly from the spice markets of Rajasthan."
    },
    {
      title: "Customer Trust",
      icon: <Users className="text-[#D37474]" size={32} />,
      description: "Serving over 10,000+ happy customers across India, we have built our reputation on consistency, taste, and honest business practices."
    }
  ];

  const stats = [
    { number: "2019", label: "Established", description: "Our Journey Began" },
    { number: "50+", label: "Product Varieties", description: "Namkeen & Chips" },
    { number: "PAN", label: "India Delivery", description: "Serving all States" },
    { number: "100%", label: "Pure Vegetarian", description: "Airtight Packaging" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#002D62]">
      <Helmet>
        <title>About Us | Madanlal Trading Company - Pure Jaipur Taste</title>
        <meta name="description" content="Discover the story of Madanlal Trading Company. We are Jaipur's leading wholesaler of premium chips, namkeen, and traditional Rajasthani snacks." />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-[#002D62] text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="inline-block bg-[#D37474] text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-6 shadow-xl">
            Established 2019
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            Madanlal <span className="text-[#D37474]">Trading</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            The standard of excellence in Rajasthani snacks. Delivering authentic 
            flavors and unbeatable crunch from our factory to your home.
          </p>
        </div>
      </section>

      {/* --- BRAND STORY --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#F3F1ED] rounded-[3rem] -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1605030537441-337580793740?w=800" 
              alt="Madanlal Manufacturing" 
              className="rounded-[2.5rem] shadow-2xl w-full h-[550px] object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full"><ShieldCheck className="text-green-600" /></div>
              <div>
                <p className="text-xs font-black uppercase text-gray-400">Quality Status</p>
                <p className="text-sm font-bold">FSSAI Certified</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-[#002D62] uppercase tracking-tighter">Tradition Meets <br /> <span className="text-[#D37474]">Quality</span></h2>
            <div className="w-24 h-2 bg-[#002D62] rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed italic">
              "At Madanlal Trading Company, we believe that snacks are not just food; they are memories of home, tradition, and taste."
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Based in the industrial hub of <strong>VKI Area, Jaipur</strong>, we have specialized in the production of high-quality Indian savories. Our focus remains on using <strong>zero-cholesterol oils</strong> and traditional spice blends that have been part of Rajasthan's heritage for decades.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-6 py-3 bg-[#002D62] text-white rounded-2xl font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                <Target size={18} /> Pure Vegetarian
              </span>
              <span className="px-6 py-3 bg-[#F3F1ED] text-[#002D62] rounded-2xl font-bold uppercase text-xs tracking-widest flex items-center gap-2 border border-gray-100">
                <Truck size={18} /> PAN India Shipping
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-[#002D62] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group p-4">
              <div className="text-4xl md:text-6xl font-black text-[#D37474] mb-2 group-hover:scale-110 transition-transform duration-500">{stat.number}</div>
              <div className="text-xs font-black text-white uppercase tracking-[0.3em] mb-2">{stat.label}</div>
              <p className="text-xs text-blue-200 font-medium uppercase opacity-60">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MISSION & VALUES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Our Core Pillars</h2>
          <div className="w-20 h-1 bg-[#D37474] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {coreValues.map((value, i) => (
            <div key={i} className="bg-[#F8F5F2] p-10 rounded-[3rem] border border-transparent hover:border-[#D37474] hover:bg-white hover:shadow-2xl transition-all duration-500 text-center space-y-4">
              <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto shadow-sm mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight">{value.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CORPORATE DETAILS --- */}
      <section className="py-20 px-6 bg-[#F3F1ED]">
        <div className="max-w-5xl mx-auto bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100">
           <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="space-y-6 flex-1">
                 <h2 className="text-3xl font-black uppercase text-[#002D62]">Official Information</h2>
                 <div className="space-y-4">
                    <div className="flex items-start gap-4">
                       <MapPin className="text-[#D37474] shrink-0" />
                       <p className="text-sm font-medium text-gray-600">
                          PLOT NO 189-B, BAALNATH NAGAR-8, SISIYAWAS, AKEDA ROAD, VKI AREA, Jaipur, Rajasthan, 302013
                       </p>
                    </div>
                    <div className="flex items-center gap-4">
                       <Award className="text-[#D37474] shrink-0" />
                       <p className="text-sm font-medium text-gray-600">GST Registration: 08APOPR8044J1Z6</p>
                    </div>
                    <div className="flex items-center gap-4">
                       <ShieldCheck className="text-[#D37474] shrink-0" />
                       <p className="text-sm font-medium text-gray-600">Food License: 12324012000456 (FSSAI)</p>
                    </div>
                 </div>
              </div>
              <div className="flex-1 w-full text-center space-y-6">
                 <div className="p-8 bg-[#F8F5F2] rounded-[2.5rem] border-2 border-dashed border-gray-200">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Bulk & Dealership Inquiries</p>
                    <a href="https://wa.me/918955611943" className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-green-100">
                       <MessageCircle fill="white" size={20}/> WHATSAPP SUPPORT
                    </a>
                    <a href="tel:+918955611943" className="mt-4 w-full bg-[#002D62] text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-all">
                       <Phone size={20}/> +91 89556 11943
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter">Ready for the <span className="text-[#D37474]">Ultimate</span> Crunch?</h2>
        <Link 
          to="/shop" 
          className="bg-[#002D62] text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-[#D37474] transition-all shadow-[0_20px_50px_rgba(0,45,98,0.3)] inline-flex items-center gap-3 active:scale-95"
        >
          VISIT THE SHOP <Zap size={24} fill="currentColor" />
        </Link>
        <p className="mt-10 text-xs font-bold text-gray-300 uppercase tracking-[0.5em]">Madanlal Trading Company - Authentically Jaipur</p>
      </section>
    </div>
  );
};

export default About;