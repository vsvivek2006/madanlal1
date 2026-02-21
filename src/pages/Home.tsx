import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { 
  Truck, ShieldCheck, Star, 
  ShoppingCart, ArrowRight, MessageCircle, 
  Zap, Award
} from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../context/CartContext"; 

const Home: React.FC = () => {
  const navigate = useNavigate(); 
  const { addToCart } = useCart(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const officialPhone = "917665386165";

  const products = [
    { id: 1, name: "Madanlal Bikaneri Bhujia", price: 120, weight: "400g", tag: "Best Seller", image: "/BikaneriBhujia.png", desc: "Authentic handmade Rajasthani bhujia with a perfect blend of dew bean flour and spices." },
    { id: 2, name: "Madanlal Potato Chips - Salted", price: 80, weight: "400g", tag: "Crispy", image: "/PotatoChipsSalted.png", desc: "Thinly sliced, golden-fried potatoes seasoned with premium sea salt for a classic crunch." },
    { id: 3, name: "Madanlal Masala Kurkure", price: 90, weight: "400g", tag: "Spicy", image: "/Masala Kurkure.png", desc: "Zesty and crunchy corn-based sticks coated in a bold, secret Jaipur masala blend." },
    { id: 4, name: "Madanlal Aloo Bhujia", price: 110, weight: "400g", tag: "Classic", image: "/AlooBhujia.png", desc: "A crowd-favorite savory snack made with mashed potatoes and gram flour for a mild, spicy tang." },
    { id: 5, name: "Madanlal Green Chutney Sticks", price: 90, weight: "400g", tag: "New", image: "/GreenChutneyKurkure.png", desc: "Crispy snack sticks infused with the refreshing and sharp taste of traditional mint chutney." },
    { id: 6, name: "Madanlal Tangy Tomato Chips", price: 85, weight: "400g", tag: "Kids Choice", image: "/TomatoChips.png", desc: "Sweet and sour tomato seasoning on light potato chips that kids and adults love." },
    { id: 7, name: "Madanlal Cheese Puffs", price: 95, weight: "400g", tag: "Cheesy", image: "/CheesePuffs.png", desc: "Air-puffed corn snacks generously coated in rich, melted cheddar cheese powder." },
    { id: 8, name: "Madanlal Masala Puffs", price: 90, weight: "400g", tag: "Zesty", image: "/MasalaPuffs.png", desc: "Light and airy puffs seasoned with a variety of traditional Indian spices for a quick bite." },
    { id: 9, name: "Madanlal Corn Rings", price: 100, weight: "400g", tag: "Crax Style", image: "/CornRings.png", desc: "Fun-shaped corn rings with a signature crunch and a savory, spiced finish." },
    { id: 10, name: "Madanlal Crunchy Katori", price: 75, weight: "400g", tag: "Fun Shape", image: "/KatoriSnacks.png", desc: "Unique cup-shaped snacks that offer an extra loud crunch in every spicy mouthful." },
    { id: 11, name: "Madanlal Moong Dal", price: 115, weight: "400g", tag: "Healthy", image: "/BikaneriBhujia.png", desc: "Protein-rich, salty fried moong lentils—the perfect light snack for healthy munching." },
    { id: 12, name: "Madanlal Wheel Chips", price: 80, weight: "400g", tag: "Classic", image: "/PotatoChipsSalted.png", desc: "Nostalgic wheel-shaped snacks that bring back the traditional taste of Jaipur's streets." },
  ];

  const handleAddToCartAction = (product: any) => {
    addToCart(product);
    //navigate("/cart");
  };

  return (
    <main className="w-full bg-[#FDFDFD] font-sans min-h-screen selection:bg-[#D37474] selection:text-white">
      <Helmet>
        <title>Madanlal Trading Company | Premium Jaipur Snacks & Namkeen</title>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="bg-[#002D62] pt-10 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D37474] rounded-full blur-[150px] opacity-20"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-3/5 text-center md:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Zap size={16} className="text-[#D37474]" />
              <span className="text-white text-xs font-black uppercase tracking-widest">Fresh Batch Just Arrived</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
              Madanlal's <br /> <span className="text-[#D37474]">Crunchy</span> Universe
            </h1>
            <p className="text-blue-100 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Authentic Jaipur taste delivered across India. Pure ingredients, 400g economy packs, and a crunch you'll fall in love with.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#002D62] px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#D37474] hover:text-white transition-all shadow-2xl"
              >
                Start Shopping <ArrowRight size={20}/>
              </button>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <img src="/logo.png" alt="Madanlal Logo" className="w-64 md:w-80 animate-float drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: <Truck />, title: "Fast Delivery", sub: "Same day dispatch in Jaipur" },
             { icon: <ShieldCheck />, title: "Quality Lab", sub: "FSSAI Standard Hygiene" },
             { icon: <Award />, title: "Bulk Rates", sub: "Best price for 400g packs" }
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="bg-[#F3F1ED] p-4 rounded-2xl text-[#002D62]">{item.icon}</div>
                <div>
                   <h4 className="font-black text-sm uppercase tracking-wider">{item.title}</h4>
                   <p className="text-xs text-gray-500 font-medium">{item.sub}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* --- PRODUCT GRID --- */}
      <section id="products" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-4xl md:text-5xl font-black text-[#002D62] uppercase tracking-tighter italic">Our Crunchy Collection</h2>
           <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Standard 400g Economy Packs</p>
           <div className="w-24 h-1 bg-[#D37474] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((p) => (
            <div key={p.id} className="bg-white border border-gray-50 p-6 rounded-[3rem] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col">
              <div className="relative h-64 bg-[#F9F9F9] rounded-[2.5rem] flex items-center justify-center overflow-hidden mb-6 p-6">
                <img src={p.image} alt={p.name} className="h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out"/>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                   <p className="text-[10px] font-black text-[#002D62] uppercase tracking-widest">{p.weight}</p>
                </div>
                <span className="absolute bottom-4 right-4 bg-[#D37474] text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">{p.tag}</span>
              </div>
              
              <div className="px-2 flex-1 flex flex-col">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <h3 className="font-black text-[#002D62] text-xl leading-tight mb-1 uppercase tracking-tighter">{p.name}</h3>
                <p className="text-gray-500 text-[11px] leading-snug mb-4 italic">{p.desc}</p>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex flex-col">
                     <span className="text-gray-400 text-[10px] font-bold line-through">₹{p.price + 30}</span>
                     <span className="text-3xl font-black text-[#002D62]">₹{p.price}</span>
                  </div>
                  <button 
                    onClick={() => handleAddToCartAction(p)} 
                    className="bg-[#002D62] text-white p-5 rounded-[2rem] hover:bg-[#25D366] transition-all shadow-xl shadow-blue-100 active:scale-90"
                  >
                    <ShoppingCart size={22} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Disclaimer */}
      <section className="bg-white py-12 border-t border-gray-100 text-center">
         <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">Madanlal Trading Company Jaipur • Official Online Store</p>
      </section>

      {/* WhatsApp Floating FAB */}
      <a href={`https://wa.me/${officialPhone}`} className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform z-50">
        <MessageCircle size={32} fill="currentColor"/>
      </a>
    </main>
  );
};

export default Home;