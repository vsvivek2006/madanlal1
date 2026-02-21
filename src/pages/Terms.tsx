import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  Phone, MessageCircle, Clock, Shield, 
  AlertTriangle, Check, X, ShoppingBag, 
  Truck, Scale, Gavel, Globe, Home,
  FileText, Package, IndianRupee, MapPin,
  RefreshCw, Users, Mail, Calendar, Info,
  Lock, CheckCircle2, ShieldCheck, Zap
} from "lucide-react";

const Terms = () => {
  // Automatically scroll to the top of the page on route entry
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const lastUpdated = "February 20, 2026";

  return (
    <div className="min-h-screen bg-[#FCFCFC] font-sans text-[#002D62] selection:bg-[#D37474] selection:text-white">
      <Helmet>
        <title>Terms & Conditions | Madanlal Trading Company - Official Guidelines</title>
        <meta 
          name="description" 
          content="Comprehensive Terms and Conditions for Madanlal Trading Company. Detailed guidelines on product quality, shipping logistics, payments, and legal jurisdiction for our Jaipur-based snack business." 
        />
        <meta 
          name="keywords" 
          content="Madanlal Trading terms, snacks wholesale conditions, namkeen export terms, FSSAI compliance, Jaipur food business legal, e-commerce terms India" 
        />
      </Helmet>

      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative py-28 bg-[#002D62] text-white overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#D37474] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-400 rounded-full blur-[150px] opacity-10"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-2 rounded-full mb-8 border border-white/20 shadow-2xl">
            <ShieldCheck size={18} className="text-[#D37474]" />
            <span className="text-xs md:text-sm font-black tracking-[0.3em] uppercase text-blue-50">Legal Framework 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
            Terms of <br />
            <span className="text-[#D37474] italic">Service</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light mb-10">
            Welcome to Madanlal Trading Company. These terms outline the rules and regulations for the use 
            of madanlal.shop and the purchase of our premium traditional snacks.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-2xl border border-white/10">
              <CheckCircle2 size={16} className="text-[#D37474]" />
              <span className="text-xs font-bold uppercase tracking-widest">FSSAI Standards</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-2xl border border-white/10">
              <CheckCircle2 size={16} className="text-[#D37474]" />
              <span className="text-xs font-bold uppercase tracking-widest">GST Registered</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-2xl border border-white/10">
              <CheckCircle2 size={16} className="text-[#D37474]" />
              <span className="text-xs font-bold uppercase tracking-widest">Global Export</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: MANDATORY AGREEMENT --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-20 -mt-12">
        <div className="bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,45,98,0.1)] border-l-[12px] border-[#D37474] p-10 md:p-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="bg-[#F8F5F2] p-8 rounded-[2.5rem] lg:w-1/3">
              <AlertTriangle className="h-16 w-16 text-[#D37474] mb-6" />
              <h3 className="text-2xl font-black text-[#002D62] uppercase mb-4 leading-tight">Critical Notice</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-wider">
                Please read these terms in their entirety. By clicking "Order," "Buy Now," or accessing any part 
                of this site, you accept a binding contract with Madanlal Trading Company.
              </p>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <h2 className="text-3xl font-black text-[#002D62] uppercase">1. General Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Madanlal Trading Company (the "Company") specializes in the manufacturing, wholesale, and 
                retail distribution of ethnic Indian snacks. Our website, madanlal.shop, provides a 
                platform for users to browse products and initiate purchases via direct communication 
                channels like WhatsApp.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#002D62] font-black">A</span>
                  <span className="text-sm font-bold text-gray-500 uppercase">Effective Date: {lastUpdated}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#002D62] font-black">B</span>
                  <span className="text-sm font-bold text-gray-500 uppercase">Registered In: Jaipur, Rajasthan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PRODUCT & MANUFACTURING --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D37474] font-black tracking-[0.4em] uppercase text-xs">Section Two</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-2">Quality & Product Integrity</h2>
          <div className="w-24 h-2 bg-[#002D62] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-6 p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
              <div className="bg-[#002D62] p-4 rounded-2xl text-white group-hover:scale-110 transition-transform h-fit">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">FSSAI Compliance</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  All products under the Madanlal brand are manufactured in accordance with the Food Safety 
                  and Standards Act of India. We maintain 100% vegetarian production lines with zero 
                  cross-contamination with non-veg products.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
              <div className="bg-[#D37474] p-4 rounded-2xl text-white group-hover:scale-110 transition-transform h-fit">
                <Package size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Packaging Standards</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Snacks are nitrogen-flushed or vacuum-sealed to maintain crispness. We reserve the right to 
                  change packaging colors, materials, or designs without prior notice, provided the 
                  net weight and quality remain unchanged.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#002D62] p-12 rounded-[3.5rem] text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 italic text-[#D37474]">Product Accuracy Disclaimer</h3>
            <p className="text-blue-100 leading-relaxed text-sm mb-6">
              Madanlal Trading Company makes every effort to display product colors and textures accurately. 
              However, due to the nature of fried snacks and natural spices, slight batch-to-batch variations 
              in taste, color, or shape are normal and do not constitute a defect.
            </p>
            <div className="space-y-3">
               <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                 <CheckCircle2 size={16} className="text-green-400" /> Natural Ingredients
               </div>
               <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                 <CheckCircle2 size={16} className="text-green-400" /> No Artificial Preservatives
               </div>
               <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                 <CheckCircle2 size={16} className="text-green-400" /> Freshly Packed on Dispatch
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: ORDERING & PRICING --- */}
      <section className="bg-[#F8F5F2] py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl font-black uppercase leading-none">Commerce & <br /> <span className="text-[#D37474]">Payments</span></h2>
            <p className="text-gray-500">How we handle your financial transactions and order confirmations.</p>
            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-[#002D62] mb-2 uppercase tracking-widest text-xs">Payment Methods</h4>
              <p className="text-sm text-gray-500 mb-4">We accept UPI, Bank Transfers, and Cash on Delivery (selected areas).</p>
              <div className="flex gap-2">
                <div className="w-8 h-5 bg-gray-200 rounded"></div>
                <div className="w-8 h-5 bg-gray-200 rounded"></div>
                <div className="w-8 h-5 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border-b-4 border-[#002D62]">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-[#002D62] mb-6">
                <IndianRupee size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">3.1 Pricing Policy</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                All prices are in Indian Rupees (INR). Madanlal Trading Company reserves the right to adjust 
                prices without notice due to fluctuations in raw material costs (oil, pulses, spices). 
                Orders once confirmed on WhatsApp will honor the agreed price for that specific transaction.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border-b-4 border-[#D37474]">
              <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center text-[#D37474] mb-6">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">3.2 WhatsApp Commerce</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our "Order on WhatsApp" feature requires you to share personal details. By using this service, 
                you agree that a contract is formed only once our representative acknowledges the order and 
                shares the final invoice. Auto-generated messages are not binding.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 4: SHIPPING & LOGISTICS --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 order-2 md:order-1">
             <div className="relative">
                <div className="absolute -inset-4 bg-[#D37474]/10 rounded-[3rem] blur-2xl"></div>
                <div className="relative bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl">
                  <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-[#002D62] flex items-center gap-3">
                    <Truck size={32} className="text-[#D37474]"/> Logistics Terms
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="font-black text-[#D37474]">01</div>
                      <p className="text-sm text-gray-600"><strong>Address Responsibility:</strong> Customers are responsible for providing pinpoint accurate addresses. Re-delivery due to wrong address will incur additional charges.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="font-black text-[#D37474]">02</div>
                      <p className="text-sm text-gray-600"><strong>Transit Risk:</strong> While we insure all bulk shipments, retail packets are shipped via standard couriers. Any package that is visibly tampered with should be refused at delivery.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="font-black text-[#D37474]">03</div>
                      <p className="text-sm text-gray-600"><strong>Timeline:</strong> Estimated delivery is 3-7 days. Madanlal Trading is not liable for delays caused by logistics strikes, weather conditions, or local holidays.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
          <div className="flex-1 space-y-8 order-1 md:order-2">
            <h2 className="text-5xl font-black text-[#002D62] uppercase leading-none">
              Safe & Secure <br /> <span className="text-[#D37474]">Dispatch</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed italic">
              "We take the responsibility of your cravings seriously. From our factory in VKI Area to 
              your doorstep, every step is tracked and monitored."
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-[#F3F1ED] rounded-2xl">
                 <Globe className="mb-2 text-[#002D62]" />
                 <h5 className="font-bold text-xs uppercase">Pan India</h5>
                 <p className="text-[10px] text-gray-500">Serving 28 States</p>
               </div>
               <div className="p-6 bg-[#F3F1ED] rounded-2xl">
                 <Zap className="mb-2 text-[#D37474]" />
                 <h5 className="font-bold text-xs uppercase">Express</h5>
                 <p className="text-[10px] text-gray-500">24h Dispatch</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: PROHIBITED USES --- */}
      <section className="bg-red-50/50 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-[3.5rem] border-2 border-red-100 shadow-xl">
           <div className="flex items-center gap-4 mb-8">
              <X size={40} className="text-red-500 p-2 bg-red-50 rounded-full" />
              <h2 className="text-3xl font-black uppercase text-[#002D62]">Prohibited Use Cases</h2>
           </div>
           <p className="text-gray-600 mb-8 leading-relaxed">
             The content on madanlal.shop including images, logos, and product descriptions is the 
             intellectual property of Madanlal Trading Company. Users are strictly prohibited from:
           </p>
           <ul className="grid md:grid-cols-2 gap-6">
             {[
               "Reselling products as your own without authorization.",
               "Modifying the website content for external marketing.",
               "Engaging in fraudulent payment activities.",
               "Using our brand name to mislead other consumers.",
               "Accessing our server data without authorization.",
               "Copying our traditional recipes or spice blends."
             ].map((text, i) => (
               <li key={i} className="flex gap-3 text-sm text-gray-500 items-start">
                 <CheckCircle2 size={16} className="text-red-400 shrink-0 mt-0.5" />
                 {text}
               </li>
             ))}
           </ul>
        </div>
      </section>

      {/* --- SECTION 6: LEGAL JURISDICTION --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Gavel size={64} className="mx-auto text-[#002D62] mb-6 opacity-20" />
          <h2 className="text-4xl font-black uppercase mb-4">6. Jurisdiction & Law</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            These terms are governed by the laws of the Republic of India. Any litigation or legal proceedings 
            shall take place under the exclusive jurisdiction of the Courts in <strong>Jaipur, Rajasthan</strong>.
          </p>
        </div>

        <div className="bg-[#F3F1ED] p-10 rounded-[3rem] grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
             <h4 className="font-bold text-[#002D62] flex items-center gap-2 uppercase tracking-widest text-sm">
                <Shield size={18}/> Liability Limit
             </h4>
             <p className="text-xs text-gray-500 leading-relaxed">
                Madanlal Trading Company’s liability for any claim shall not exceed the amount paid for the 
                specific product causing the claim. We are not liable for incidental or consequential damages.
             </p>
          </div>
          <div className="space-y-4">
             <h4 className="font-bold text-[#002D62] flex items-center gap-2 uppercase tracking-widest text-sm">
                <Info size={18}/> Force Majeure
             </h4>
             <p className="text-xs text-gray-500 leading-relaxed">
                We are not responsible for any breach of these terms caused by circumstances beyond our control, 
                including but not limited to pandemics, lockdowns, or state-wide logistics disruptions.
             </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FINAL ACKNOWLEDGEMENT --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#002D62] to-[#001a3a] rounded-[4rem] p-16 text-center text-white shadow-[0_40px_100px_rgba(0,45,98,0.3)]">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Ready to <span className="text-[#D37474]">Crunch?</span></h2>
          <p className="text-blue-100 mb-12 max-w-2xl mx-auto text-lg">
            By proceeding to checkout or contacting us via WhatsApp, you signify your absolute 
            agreement to these Terms and Conditions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link 
              to="/shop" 
              className="w-full sm:w-auto bg-[#D37474] text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-[#002D62] transition-all shadow-xl shadow-red-900/20 active:scale-95"
            >
              BROWSE SNACKS
            </Link>
            <a 
              href="https://wa.me/918955611943"
              className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} fill="white" /> CHAT WITH TEAM
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
             <div className="text-[10px] font-bold uppercase tracking-[0.3em]">Fresh Batch</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.3em]">Hygienic Factory</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.3em]">Madanlal Co.</div>
             <div className="text-[10px] font-bold uppercase tracking-[0.3em]">Jaipur Made</div>
          </div>
        </div>
      </section>

      {/* --- CORPORATE FOOTER STAMP --- */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">
          <div className="flex gap-4">
             <p>Madanlal Trading Company</p>
             <p className="hidden md:block">•</p>
             <p>GSTIN: 08APOPR8044J1Z6</p>
          </div>
          <div className="mt-4 md:mt-0">
             <p>© 2026 madanlal.shop | Jaipur, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Terms;