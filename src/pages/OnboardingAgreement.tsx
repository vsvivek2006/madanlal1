import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  ClipboardCheck, 
  Truck, 
  ShieldCheck, 
  Handshake, 
  FileText, 
  CheckCircle2, 
  MessageCircle, 
  Home,
  Info
} from "lucide-react";

const OnboardingAgreement: React.FC = () => {
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const lastUpdated = "February 20, 2026";

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-[#002D62] selection:bg-[#D37474] selection:text-white">
      <Helmet>
        <title>Onboarding Agreement | Madanlal Trading Company</title>
        <meta 
          name="description" 
          content="Official partnership onboarding agreement for Madanlal Trading Company. Guidelines for retail and wholesale distribution partners." 
        />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="bg-[#002D62] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">
            Partner Onboarding <span className="text-[#D37474]">Agreement</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl font-light">
            Welcome to the Madanlal family. This document outlines our standard process for a smooth business partnership.
          </p>
          <p className="text-xs text-blue-300 mt-6 font-bold uppercase tracking-widest">
            Effective Date: {lastUpdated}
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-4xl mx-auto py-16 px-6">
        
        {/* Intro Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
          <div className="flex gap-4 items-start">
            <div className="bg-blue-50 p-3 rounded-lg">
              <Info className="text-[#002D62]" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 uppercase">Purpose of Agreement</h3>
              <p className="text-gray-600 leading-relaxed">
                This agreement defines the operational workflow between <strong>Madanlal Trading Company</strong> and our valued distribution partners. It ensures high quality standards, reliable delivery schedules, and transparent financial dealings.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <ClipboardCheck className="text-[#D37474]" /> 
            1. Registration & Documentation
          </h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-4">
            <p className="text-gray-600">To maintain legal and food safety compliance, all partners must provide:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 size={18} className="text-green-500" /> Official Business Name
              </li>
              <li className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 size={18} className="text-green-500" /> GST Registration (if applicable)
              </li>
              <li className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 size={18} className="text-green-500" /> Verified Delivery Address
              </li>
              <li className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 size={18} className="text-green-500" /> Primary Contact Number
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <ShieldCheck className="text-[#D37474]" /> 
            2. Quality & Fulfillment
          </h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-4">
            <p className="text-gray-600">
              Madanlal Trading Company commits to providing only fresh batches of snacks. All items are 100% vegetarian and processed in an FSSAI-approved environment.
            </p>
            <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#002D62]">
              <p className="text-sm font-semibold italic text-[#002D62]">
                "Every packet is inspected for airtight sealing and quality before dispatch."
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Truck className="text-[#D37474]" /> 
            3. Logistics & Delivery Timeline
          </h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-4">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-blue-50 rounded-xl">
                <p className="text-[10px] font-bold text-gray-400 uppercase">Jaipur</p>
                <p className="text-lg font-black">24 Hours</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <p className="text-[10px] font-bold text-gray-400 uppercase">Rajasthan</p>
                <p className="text-lg font-black">2-3 Days</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <p className="text-[10px] font-bold text-gray-400 uppercase">Other States</p>
                <p className="text-lg font-black">5-7 Days</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              *Dispatch timings are calculated after order confirmation and payment verification.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Handshake className="text-[#D37474]" /> 
            4. Payment & Commercial Terms
          </h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="text-[#002D62] shrink-0" size={20} />
              <p className="text-gray-600 text-sm">First-time orders require 100% advance payment via UPI or Bank Transfer.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-[#002D62] shrink-0" size={20} />
              <p className="text-gray-600 text-sm">Bulk discounts are automatically applied to orders exceeding ₹20,000.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-[#002D62] shrink-0" size={20} />
              <p className="text-gray-600 text-sm">Credit period (limit-based) may be granted to established partners after 6 months of active engagement.</p>
            </div>
          </div>
        </div>

        {/* Final Acceptance */}
        <div className="bg-[#002D62] rounded-[2.5rem] p-12 text-center text-white shadow-xl">
          <FileText className="mx-auto mb-6 text-[#D37474]" size={48} />
          <h2 className="text-3xl font-bold mb-4 uppercase">Agreement & Acceptance</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            By initiating an order through our digital platform or WhatsApp, you acknowledge that you have read, understood, and agreed to the terms outlined in this Onboarding Agreement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop" 
              className="bg-[#D37474] text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-[#002D62] transition-all"
            >
              BROWSE PRODUCTS
            </Link>
            <a 
              href="https://wa.me/918955611943" 
              className="bg-[#25D366] text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1ebd57] transition-all"
            >
              <MessageCircle size={20} /> CHAT WITH TEAM
            </a>
          </div>
        </div>

        {/* Back Home */}
        <div className="mt-12 text-center">
          <Link to="/" className="text-gray-400 hover:text-[#002D62] flex items-center justify-center gap-2 font-semibold">
            <Home size={18} /> Back to Homepage
          </Link>
        </div>

      </main>

      {/* Footer Stamp */}
      <footer className="py-8 bg-white border-t border-gray-100 text-center">
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em]">
          Madanlal Trading Company - Corporate Document 2026
        </p>
      </footer>
    </div>
  );
};

export default OnboardingAgreement;