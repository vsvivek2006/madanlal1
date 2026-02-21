import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  Truck, Package, Clock, MapPin, 
  IndianRupee, MessageCircle, Check, X,
  AlertTriangle, RefreshCw, Shield,
  Phone, Mail, Home, Globe
} from "lucide-react";

const ShippingReturn = () => {
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#002D62]">
      <Helmet>
        <title>Shipping & Returns Policy | Madanlal Trading Company - Jaipur</title>
        <meta 
          name="description" 
          content="Official Shipping and Returns Policy for Madanlal Trading Company. Learn about our delivery timelines, shipping charges, and refund process." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-[#002D62] text-white py-20 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
            <Package size={16} className="text-[#D37474]" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-100">Official Logistics Policy</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            Shipping & <span className="text-[#D37474]">Returns</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            Everything you need to know about how we deliver our crunchy snacks 
            and how our refund process works.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        
        {/* Delivery Timelines - Visual Diagram/Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Clock, label: "Jaipur City", value: "Same/Next Day", sub: "Express Delivery" },
            { icon: Truck, label: "Rajasthan", value: "2-3 Days", sub: "Standard Delivery" },
            { icon: Globe, label: "Rest of India", value: "5-7 Days", sub: "National Shipping" },
            { icon: RefreshCw, label: "Refunds", value: "7 Days", sub: "Bank Processing" }
          ].map((stat, index) => (
            <div key={index} className="bg-[#F8F5F2] p-8 rounded-3xl text-center border border-gray-100 shadow-sm group hover:bg-[#002D62] transition-all duration-500">
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-[#D37474] group-hover:text-white transition-colors" />
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-blue-200">{stat.label}</div>
              <div className="text-xl font-black mt-1 group-hover:text-white">{stat.value}</div>
              <div className="text-[10px] font-medium text-gray-500 group-hover:text-blue-300 mt-1 uppercase tracking-tighter">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Shipping Policy Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-[#002D62] p-4 rounded-2xl shadow-lg">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight">Shipping Guidelines</h2>
              <div className="h-1 w-20 bg-[#D37474] mt-1"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-blue-50/50">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Package className="text-[#D37474]" size={20} /> Order Processing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Madanlal Trading Company ensures that every packet of Bhujia and Chips is freshly packed before dispatch. 
                  Orders are processed and dispatched within <strong>24 to 48 hours</strong> of confirmation. 
                  Please note that we do not process orders on Sundays or Public Holidays.
                </p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-blue-50/50">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <IndianRupee className="text-[#D37474]" size={20} /> Shipping Charges
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Shipping costs are calculated based on the total weight of the order and the delivery destination. 
                  For residents in <strong>Jaipur</strong>, we offer <strong>FREE Shipping</strong> on all orders above ₹1,000. 
                  Bulk orders for events or resellers may qualify for special subsidized rates.
                </p>
              </div>
            </div>

            <div className="bg-[#002D62] p-10 rounded-[3rem] text-white relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 italic">
                    <MapPin className="text-[#D37474]" /> Standard Timelines
                  </h3>
                  <div className="space-y-6">
                    {[
                      { title: "Within Jaipur", time: "Delivered within 24 hours" },
                      { title: "Rajasthan State", time: "Delivered in 2-3 business days" },
                      { title: "Tier 1 & Tier 2 Cities", time: "Delivered in 4-6 business days" },
                      { title: "Other Regions", time: "Delivered in 7 business days" }
                    ].map((item, i) => (
                      <div key={i} className="border-b border-white/10 pb-4">
                        <div className="font-bold text-[#D37474] text-xs uppercase tracking-widest">{item.title}</div>
                        <div className="text-lg font-medium">{item.time}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <AlertTriangle className="text-yellow-400 shrink-0" size={20} />
                    <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest">
                      Live tracking link will be sent via WhatsApp upon dispatch.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Returns & Refund Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-[#D37474] p-4 rounded-2xl shadow-lg">
              <RefreshCw className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight">Refund & Replacement</h2>
              <div className="h-1 w-20 bg-[#002D62] mt-1"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Eligible */}
            <div className="bg-white p-10 rounded-[2.5rem] border-2 border-green-100 shadow-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-green-700 uppercase">
                <Check className="p-1 bg-green-100 rounded-full" /> Refund Eligible
              </h3>
              <ul className="space-y-5">
                {[
                  "Product damaged during transit (Requires unboxing video).",
                  "Expired products received at the time of delivery.",
                  "Incorrect items shipped compared to the order form.",
                  "Lost shipments confirmed by the courier partner."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                    <span className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Non-Eligible */}
            <div className="bg-white p-10 rounded-[2.5rem] border-2 border-red-100 shadow-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-red-700 uppercase">
                <X className="p-1 bg-red-100 rounded-full" /> Non-Returnable
              </h3>
              <ul className="space-y-5">
                {[
                  "Opened or consumed snack packets.",
                  "Change of mind after the order has been delivered.",
                  "Issues reported after 48 hours of successful delivery.",
                  "Products damaged due to improper home storage."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                    <span className="h-1.5 w-1.5 bg-red-500 rounded-full mt-2 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-[#F8F5F2] p-8 rounded-3xl border border-gray-100 flex items-center gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm text-green-600 font-black text-2xl">01</div>
              <div>
                <h4 className="font-bold text-[#002D62]">Refund Processing</h4>
                <p className="text-xs text-gray-500">Approved refunds are credited within 5-7 working days to the original payment source.</p>
              </div>
            </div>
            <div className="bg-[#F8F5F2] p-8 rounded-3xl border border-gray-100 flex items-center gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600 font-black text-2xl">02</div>
              <div>
                <h4 className="font-bold text-[#002D62]">Replacement Dispatch</h4>
                <p className="text-xs text-gray-500">In case of wrong items, a replacement is dispatched within 24 hours of verification.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#002D62] text-white p-12 rounded-[3.5rem] text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-4 uppercase tracking-widest">Need Immediate Help?</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
            Our support team is available via WhatsApp and Phone to resolve any delivery 
            or product related concerns instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="https://wa.me/918955611943" 
              className="bg-[#25D366] hover:bg-[#1ebd57] px-10 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl"
            >
              <MessageCircle size={24} fill="white" /> WhatsApp Support
            </a>
            <a 
              href="tel:+918955611943"
              className="bg-white text-[#002D62] hover:bg-gray-100 px-10 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl"
            >
              <Phone size={24} /> Call: +91 89556 11943
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-[10px] font-bold text-blue-300 uppercase tracking-[0.3em]">
            <span>Mon-Sat: 9:30 AM - 6:30 PM</span>
            <span className="hidden sm:inline">•</span>
            <span>Hygienic Packaging</span>
            <span className="hidden sm:inline">•</span>
            <span>Quality Guaranteed</span>
          </div>
        </div>

        {/* Navigation Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="group inline-flex items-center gap-2 text-[#002D62] font-black text-sm uppercase tracking-widest hover:text-[#D37474] transition-colors"
          >
            <Home size={18} />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturn;