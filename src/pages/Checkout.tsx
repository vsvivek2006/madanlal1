import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Package, MapPin, User, Phone, Send } from 'lucide-react';
import axios from 'axios';

const Checkout = () => {
  const { cart, total } = useCart(); // Assuming total logic is in your context
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    address: ''
  });

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirmOrder = async () => {
    if (!formData.fullName || !formData.whatsappNumber || !formData.address) {
      alert("Please fill in all details");
      return;
    }

    // Generate the WhatsApp message string
    const itemDetails = cart.map(item =>
      `• ${item.name} (${item.quantity} x ₹${item.price})`
    ).join('\n');

    const message = `*New Order from Madanlal Trading Company*%0A%0A` +
      `*Customer Details:*%0A` +
      `Name: ${formData.fullName}%0A` +
      `Phone: ${formData.whatsappNumber}%0A` +
      `Address: ${formData.address}%0A%0A` +
      `*Items ordered:*%0A${itemDetails}%0A%0A` +
      `*Total Amount: ₹${cartTotal}*`;


    const response = await axios.post(
      "https://api.payservices.online/api/v1/payment/paylink",
      {
        txnId: `txn_${Date.now()}`,
        amount: cartTotal,
        name: formData.fullName,
        email: "madanlaltrading@gmail.com",
        mobileNumber: formData.whatsappNumber,
        redirectUrl: "https://www.mandlal.shop/thank-you",
        purpose: "application fee",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IlVJRC1NTTRES1hMSy1GVk1aREIiLCJ1c2VyTmFtZSI6Im1hZGFubGFsd2ViIn0.OGsyxQe0UNC1HjCIKGN8QRZLlHmcekG4aQ7s-fr_pj0`,
        },
      }
    );

    if (response.data.status === "Success") {
      window.location.href = response.data.qr_intent;
    }

    // Opens WhatsApp with the formatted message
    // window.open(`https://wa.me/918955611943?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-black text-[#002D62] mb-8">Complete Your Order</h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Order Summary Section */}
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h3 className="font-bold flex items-center gap-2 mb-4 text-[#002D62]">
              <Package size={20} /> Order Summary
            </h3>
            <div className="space-y-2 mb-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-blue-200 pt-4 flex justify-between font-black text-lg">
              <span>Total Amount:</span>
              <span>₹{cartTotal}</span>
            </div>
          </div>

          {/* User Details Form */}
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#D37474] outline-none"
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                name="whatsappNumber"
                placeholder="WhatsApp Number"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#D37474] outline-none"
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <textarea
                name="address"
                placeholder="Delivery Address"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#D37474] outline-none h-32"
                onChange={handleInputChange}
              />
            </div>

            <button
              onClick={handleConfirmOrder}
              className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#1ebd57] transition-all shadow-lg"
            >
              <Send size={20} />
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
