import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartFloat = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // Hide the floating button if we are already on the Cart or Checkout pages
  if (location.pathname === '/cart' || location.pathname === '/checkout' || cart.length === 0) {
    return null;
  }

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={() => navigate('/cart')}
      className="fixed bottom-24 right-6 z-[60] bg-[#002D62] text-white p-4 rounded-full shadow-2xl hover:bg-[#D37474] transition-all flex items-center gap-3 animate-bounce-subtle"
    >
      <div className="relative">
        <ShoppingCart size={24} />
        <span className="absolute -top-2 -right-2 bg-[#D37474] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#002D62]">
          {itemCount}
        </span>
      </div>
      <span className="font-bold text-sm pr-2">View Cart</span>
    </button>
  );
};

export default CartFloat;