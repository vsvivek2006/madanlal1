import React, { useState } from 'react';
import { MessageCircle, X, ShoppingCart } from 'lucide-react';

const WhatsAppFloat = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState(''); // Business ki jagah Address
  const [mobile, setMobile] = useState('');
  const [productNote, setProductNote] = useState(''); // Message field for snacks

  const handleSubmit = () => {
    if (!name || !address || !mobile) {
      alert('Kripya saari details bharein');
      return;
    }

    const phoneNumber = "918955611943"; // Mandlal Trading Company Number
    const message = `*Naya Order - Mandlal.shop*%0A%0A` +
      `*Naam:* ${encodeURIComponent(name)}%0A` +
      `*Mobile:* ${encodeURIComponent(mobile)}%0A` +
      `*Address:* ${encodeURIComponent(address)}%0A` +
      `*Order Details:* ${encodeURIComponent(productNote)}%0A%0A` +
      `Mujhe upar diye gaye items order karne hain.`;

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
    
    // Reset and Close
    setOpen(false);
    setName('');
    setAddress('');
    setMobile('');
    setProductNote('');
  };

  return (
    <>
      {/* Floating Order Button - Right Middle */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 bg-[#D37474] hover:bg-[#b85a5a] text-white py-4 px-3 rounded-l-2xl shadow-2xl transition-all hover:pr-6 flex flex-col items-center gap-2 border-y border-l border-white/20"
        aria-label="Order Now"
      >
        <ShoppingCart className="h-6 w-6 animate-bounce" />
        <span className="[writing-mode:vertical-lr] font-bold text-xs uppercase tracking-widest">
          Order Now
        </span>
      </button>

      {/* Popup Form */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white p-8 rounded-[2rem] w-full max-w-sm shadow-2xl relative border-4 border-[#F3F1ED]">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-[#002D62] uppercase">Quick Order</h3>
              <p className="text-xs text-gray-500 font-medium">Direct WhatsApp Par Order Karein</p>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Apka Naam"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-none bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-[#002D62] transition-all"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full border-none bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-[#002D62] transition-all"
              />
              <input
                type="text"
                placeholder="Pura Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border-none bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-[#002D62] transition-all"
              />
              <textarea
                placeholder="Kya chahiye? (e.g. 2 Packet Bhujia, 5 Chips)"
                value={productNote}
                onChange={(e) => setProductNote(e.target.value)}
                className="w-full border-none bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-[#002D62] transition-all h-24 resize-none"
              />
              
              <button
                onClick={handleSubmit}
                className="w-full bg-[#25D366] hover:bg-[#1ebd57] text-white py-4 rounded-xl font-black text-lg shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <MessageCircle fill="white" size={20} />
                CONFIRM ON WHATSAPP
              </button>
            </div>

            <p className="text-[10px] text-center text-gray-400 mt-4 uppercase tracking-widest font-bold">
              Mandlal Trading Company
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;