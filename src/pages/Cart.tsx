import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FDFDFD] py-12 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-black text-[#002D62] flex items-center gap-3 uppercase tracking-tighter italic">
            <ShoppingBag className="text-[#D37474]" /> Your Snack Cart
          </h1>
          <Link to="/shop" className="text-[#002D62] font-bold text-sm flex items-center gap-2 hover:text-[#D37474] transition-colors">
            <ArrowLeft size={18} /> Continue Shopping
          </Link>
        </div>
        
        {cart.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-[3rem] border border-gray-100 shadow-sm">
            <div className="bg-[#F3F1ED] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
               <ShoppingBag size={40} className="text-gray-300" />
            </div>
            <p className="text-xl font-bold text-gray-400 mb-8 uppercase tracking-widest">Your cart is feeling light!</p>
            <Link to="/shop" className="bg-[#002D62] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-[#D37474] transition-all">
              Fill it with Snacks
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 overflow-hidden">
              {cart.map((item) => (
                <div key={item.id} className="p-6 border-b border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-center gap-6 w-full">
                    <div className="w-24 h-24 bg-[#F9F9F9] rounded-2xl flex items-center justify-center p-2 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-[#002D62] text-lg uppercase tracking-tight leading-tight">{item.name}</h3>
                      {/* ✅ Added Product Description */}
                      <p className="text-gray-400 text-[11px] italic mb-2 leading-relaxed max-w-md">{item.desc}</p>
                      <div className="flex items-center gap-3">
                        <span className="bg-[#F3F1ED] text-[#002D62] text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider">
                          ₹{item.price} x {item.quantity}
                        </span>
                        <span className="text-[#D37474] font-black text-sm">₹{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all self-end sm:self-center"
                    title="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
              
              <div className="p-8 bg-[#F3F1ED]/50 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Grand Total</p>
                  <span className="text-4xl font-black text-[#002D62]">₹{total}</span>
                </div>
                <Link to="/checkout" className="w-full sm:w-auto bg-[#D37474] text-white px-12 py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-red-100 hover:scale-105 transition-all text-center uppercase tracking-tighter">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
            
            <p className="text-center text-[10px] text-gray-300 font-black uppercase tracking-[0.3em]">
              Free Shipping on orders above ₹500
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;