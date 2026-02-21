import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ShoppingCart, Star, Search } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../context/CartContext"; 

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const navigate = useNavigate(); 
  const { addToCart } = useCart(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["All", "Namkeen", "Chips", "Kurkure", "Puffs", "Snacks"];

  const products = [
    { id: 1, category: "Namkeen", name: "Madanlal Bikaneri Bhujia", price: 120, weight: "400g", image: "/BikaneriBhujia.png", tag: "Best Seller", desc: "Authentic handmade Rajasthani bhujia with a perfect blend of dew bean flour and spices." },
    { id: 2, category: "Chips", name: "Madanlal Potato Chips - Salted", price: 80, weight: "400g", image: "/PotatoChipsSalted.png", tag: "Fresh Batch", desc: "Thinly sliced, golden-fried potatoes seasoned with premium sea salt for a classic crunch." },
    { id: 3, category: "Kurkure", name: "Madanlal Masala Kurkure", price: 90, weight: "400g", image: "/Masala Kurkure.png", tag: "Spicy", desc: "Zesty and crunchy corn-based sticks coated in a bold, secret Jaipur masala blend." },
    { id: 4, category: "Namkeen", name: "Madanlal Aloo Bhujia", price: 110, weight: "400g", image: "/AlooBhujia.png", tag: "Classic", desc: "A crowd-favorite savory snack made with mashed potatoes and gram flour for a mild, spicy tang." },
    { id: 5, category: "Kurkure", name: "Madanlal Green Chutney Sticks", price: 90, weight: "400g", image: "/GreenChutneyKurkure.png", tag: "Tangy", desc: "Crispy snack sticks infused with the refreshing and sharp taste of traditional mint chutney." },
    { id: 6, category: "Chips", name: "Madanlal Tangy Tomato Chips", price: 85, weight: "400g", image: "/TomatoChips.png", tag: "Kids Choice", desc: "Sweet and sour tomato seasoning on light potato chips that kids and adults love." },
    { id: 7, category: "Puffs", name: "Madanlal Cheese Puffs", price: 95, weight: "400g", image: "/CheesePuffs.png", tag: "Cheesy", desc: "Air-puffed corn snacks generously coated in rich, melted cheddar cheese powder." },
    { id: 8, category: "Puffs", name: "Madanlal Masala Puffs", price: 90, weight: "400g", image: "/MasalaPuffs.png", tag: "Zesty", desc: "Light and airy puffs seasoned with a variety of traditional Indian spices for a quick bite." },
    { id: 9, category: "Snacks", name: "Madanlal Corn Rings", price: 100, weight: "400g", image: "/CornRings.png", tag: "Crunchy", desc: "Fun-shaped corn rings with a signature crunch and a savory, spiced finish." },
    { id: 10, category: "Snacks", name: "Madanlal Crunchy Katori", price: 75, weight: "400g", image: "/KatoriSnacks.png", tag: "Traditional", desc: "Unique cup-shaped snacks that offer an extra loud crunch in every spicy mouthful." },
    { id: 11, category: "Namkeen", name: "Madanlal Moong Dal", price: 115, weight: "400g", image: "/BikaneriBhujia.png", tag: "Healthy", desc: "Protein-rich, salty fried moong lentils—the perfect light snack for healthy munching." },
    { id: 12, category: "Snacks", name: "Madanlal Wheel Chips", price: 80, weight: "400g", image: "/PotatoChipsSalted.png", tag: "Fun Shape", desc: "Nostalgic wheel-shaped snacks that bring back the traditional taste of Jaipur's streets." },
  ];

  const filteredProducts = products.filter(p => 
    (selectedCategory === "All" || p.category === selectedCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCartAction = (product: any) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#002D62]">
      <Helmet>
        <title>Shop Online | Madanlal Trading Company - Premium Jaipur Snacks</title>
        <meta name="description" content="Order Madanlal premium snacks: Bhujia, Chips, Kurkure, Puffs and more. Authentic 400g packs delivered from Jaipur." />
      </Helmet>

      {/* --- PAGE HEADER --- */}
      <section className="bg-[#F3F1ED] py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-[#002D62]">Madanlal Store</h1>
          <div className="w-20 h-1 bg-[#D37474] mx-auto mb-4"></div>
          <p className="text-gray-500 max-w-xl mx-auto uppercase text-[10px] font-black tracking-[0.3em]">Full Collection • 400g Packs</p>
        </div>
      </section>

      {/* --- FILTERS & SEARCH --- */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  selectedCategory === cat 
                  ? "bg-[#002D62] text-white shadow-lg" 
                  : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Search Madanlal snacks..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border-none rounded-2xl px-5 py-2.5 pl-10 focus:ring-2 ring-[#D37474] outline-none text-sm font-medium"
            />
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          </div>
        </div>
      </section>

      {/* --- PRODUCT GRID --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredProducts.map((p) => (
              <div key={p.id} className="group bg-white border border-gray-50 p-5 rounded-[2.5rem] hover:shadow-[0_20px_50px_rgba(0,45,98,0.05)] transition-all duration-500 text-center flex flex-col">
                <div className="relative h-64 bg-[#F9F9F9] rounded-[2rem] flex items-center justify-center overflow-hidden mb-6 p-6">
                  <img src={p.image} alt={p.name} className="h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-[#D37474] text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {p.tag}
                  </span>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <h3 className="font-black text-lg leading-tight mb-1 text-[#002D62] uppercase tracking-tight">{p.name}</h3>
                  <p className="text-gray-500 text-[11px] leading-snug mb-2 italic">{p.desc}</p>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{p.category} | {p.weight}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <span className="text-2xl font-black text-[#002D62]">₹{p.price}</span>
                    <button 
                      onClick={() => handleAddToCartAction(p)}
                      className="bg-[#002D62] text-white p-4 rounded-2xl hover:bg-[#25D366] transition-all shadow-lg active:scale-90"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl font-medium">Sorry, no snacks found :(</p>
            <button onClick={() => {setSelectedCategory("All"); setSearchQuery("");}} className="mt-4 text-[#D37474] font-black uppercase tracking-widest text-sm underline">Reset Shop</button>
          </div>
        )}
      </section>

      <div className="h-20"></div>
    </div>
  );
};

export default Shop;