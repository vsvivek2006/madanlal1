import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { 
  ShieldCheck, Lock, Eye, Database, 
  MessageCircle, Phone, Mail, AlertCircle, 
  CheckCircle2, XCircle, Clock, Truck 
} from "lucide-react";

const Privacy: React.FC = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "Feb 19, 2026";

  return (
    <div className="min-h-screen bg-white font-sans text-[#002D62]">
      <Helmet>
        <title>Privacy & Refund Policy | Mandlal Trading Company</title>
        <meta name="description" content="Official Privacy and Refund Policy for Mandlal Trading Company. Learn how we protect your data and our snack order return guidelines." />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="bg-[#002D62] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-[#D37474] text-white px-6 py-2 rounded-full text-sm font-bold mb-6 tracking-widest uppercase">
            Mandlal.shop Official
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase italic">Legal center</h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
            Our commitment to your privacy and transparent shopping experience.
          </p>
          <p className="text-sm text-blue-300 mt-4 font-bold uppercase tracking-tighter">Last updated: {lastUpdated}</p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-8 py-4 rounded-2xl font-black transition-all uppercase tracking-widest text-sm border-2 ${
                activeTab === "privacy" 
                ? "bg-white text-[#002D62] border-white shadow-2xl scale-105" 
                : "bg-transparent text-white border-white/30 hover:bg-white/10"
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("refund")}
              className={`px-8 py-4 rounded-2xl font-black transition-all uppercase tracking-widest text-sm border-2 ${
                activeTab === "refund" 
                ? "bg-white text-[#002D62] border-white shadow-2xl scale-105" 
                : "bg-transparent text-white border-white/30 hover:bg-white/10"
              }`}
            >
              Refund Policy
            </button>
          </div>
        </div>
      </section>

      {/* --- PRIVACY POLICY CONTENT --- */}
      {activeTab === "privacy" && (
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-gray-700 space-y-12">
            
            <div className="bg-[#F8F5F2] p-8 rounded-[2rem] border-l-8 border-[#002D62]">
              <h2 className="text-2xl font-black text-[#002D62] mb-4 uppercase">1. Information Governance</h2>
              <p className="leading-relaxed">
                Mandlal Trading Company ("we", "us") values your trust. This policy governs how we collect and process 
                data for our snack business. We collect only essential information such as your <strong>Name, 
                WhatsApp Number, and Delivery Address</strong> to fulfill your orders effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2 text-[#002D62]">
                  <Database size={20} className="text-[#D37474]"/> Data Collection
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Order details (Chips, Namkeen choices)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Contact information for WhatsApp updates</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Delivery address for logistics partners</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2 text-[#002D62]">
                  <Lock size={20} className="text-[#D37474]"/> Data Security
                </h3>
                <p className="text-sm leading-relaxed">
                  We implement industry-standard encryption and security measures. We do not sell or trade your 
                  personal data to third-party marketing firms. Your information is strictly used for order fulfillment.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            <div className="text-center">
              <h2 className="text-2xl font-black mb-6 uppercase">Got a Privacy Question?</h2>
              <a href="mailto:info@mandlal.shop" className="text-xl font-bold text-[#D37474] hover:underline flex items-center justify-center gap-2">
                <Mail size={24}/> info@mandlal.shop
              </a>
            </div>
          </div>
        </section>
      )}

      {/* --- REFUND POLICY CONTENT --- */}
      {activeTab === "refund" && (
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-12">
            
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black text-[#002D62] uppercase tracking-tighter">Order Returns & Refunds</h2>
              <p className="text-gray-500 mt-2">Professional guidelines for food product returns</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 bg-green-50 border border-green-200 rounded-3xl text-center">
                <CheckCircle2 size={40} className="text-green-600 mx-auto mb-4"/>
                <h4 className="font-bold text-green-900 mb-2">Valid Return</h4>
                <p className="text-xs text-green-700">Damaged packaging, expired items, or incorrect product delivered.</p>
              </div>
              <div className="p-8 bg-yellow-50 border border-yellow-200 rounded-3xl text-center">
                <Clock size={40} className="text-yellow-600 mx-auto mb-4"/>
                <h4 className="font-bold text-yellow-900 mb-2">24h Window</h4>
                <p className="text-xs text-yellow-700">All issues must be reported within 24 hours of delivery via WhatsApp.</p>
              </div>
              <div className="p-8 bg-red-50 border border-red-200 rounded-3xl text-center">
                <XCircle size={40} className="text-red-600 mx-auto mb-4"/>
                <h4 className="font-bold text-red-900 mb-2">Non-Returnable</h4>
                <p className="text-xs text-red-700">Opened packets, partial consumption, or change of mind after delivery.</p>
              </div>
            </div>

            <div className="space-y-8 text-gray-700">
              <div className="bg-[#F8F5F2] p-8 rounded-[2rem]">
                <h3 className="text-2xl font-black text-[#002D62] mb-6 flex items-center gap-3 uppercase">
                   <Truck className="text-[#D37474]"/> Shipping & Logistics
                </h3>
                <p className="leading-relaxed mb-4">
                  Mandlal Trading Company ensures fresh dispatch of all items. Since food items are perishable, 
                  <strong> No Returns</strong> are accepted once the seal is broken or if the product is delivered correctly 
                  as per your order.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm italic">
                  <li>Orders are usually processed within 24-48 business hours.</li>
                  <li>In case of a lost shipment, a full refund or re-dispatch will be initiated.</li>
                </ul>
              </div>

              <div className="p-8 border-2 border-[#002D62] rounded-[2rem] text-center">
                <h3 className="text-2xl font-black mb-4 uppercase">Refund Process</h3>
                <p className="max-w-2xl mx-auto mb-6 text-sm">
                  Approved refunds are processed within 5-7 business days to your original payment method 
                  or provided bank account details.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <a href="tel:+918955611943" className="bg-[#002D62] text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                     <Phone size={18}/> Call Support
                   </a>
                   <a href="https://wa.me/918955611943" className="bg-[#25D366] text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                     <MessageCircle size={18}/> WhatsApp Help
                   </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}
      
      {/* Footer Disclaimer */}
      <div className="py-10 text-center border-t border-gray-100 opacity-50">
        <p className="text-xs font-bold uppercase tracking-[0.3em]">Mandlal Trading Company - Official Documentation 2026</p>
      </div>
    </div>
  );
};

export default Privacy;