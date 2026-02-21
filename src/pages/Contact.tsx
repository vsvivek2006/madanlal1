import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Star, ShoppingBag, Truck, BadgeCheck } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessType: '',
    orderType: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `📦 *Madanlal Trading Company - Business Inquiry*

*Name:* ${formData.fullName}
*Mobile:* ${formData.phone}
*Business Type:* ${formData.businessType}
*Inquiry For:* ${formData.orderType}
*Subject:* ${formData.subject}
*Message:* ${formData.message}

Hello Madanlal Team! I am interested in your products (Chips/Namkeen). Please share your wholesale price list and catalog.`;

    const whatsappUrl = `https://wa.me/918955611943?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const inquiryTypes = ['Wholesale / Retail Bulk Order', 'Distributorship Inquiry', 'Export Inquiry', 'Direct Consumer Purchase'];
  const businessTypes = ['Shopkeeper', 'Wholesaler', 'Event Planner', 'Individual'];

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call / WhatsApp',
      content: '+91 89556 11943',
      link: 'tel:+918955611943'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Support',
      content: 'info@mandlal.shop',
      link: 'mailto:info@mandlal.shop'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Manufacturing Unit',
      content: 'PLOT NO 189-B, BAALNATH NAGAR-8, SISIYAWAS, VKI AREA, Jaipur, Rajasthan',
      link: '#'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Working Hours',
      content: '9:30 AM - 6:30 PM (Mon-Sat)',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us | Madanlal Trading Company - Best Chips & Namkeen in Jaipur</title>
        <meta name="description" content="Contact Madanlal Trading Company for bulk orders of Chips, Namkeen and snacks. Best wholesale rates in Jaipur, Rajasthan." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-[#002D62] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            Get in <span className="text-[#D37474]">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Humaare swadisht snacks aur bulk orders ke liye aaj hi sampark karein. Jaipur's most trusted trading partner.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-12 bg-[#F8F5F2] border-b">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm text-[#002D62]"><Truck size={24}/></div>
            <span className="font-bold text-[#002D62]">Fast Delivery Across India</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm text-[#002D62]"><ShoppingBag size={24}/></div>
            <span className="font-bold text-[#002D62]">Wholesale Rates Available</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm text-[#002D62]"><BadgeCheck size={24}/></div>
            <span className="font-bold text-[#002D62]">100% Purity Guaranteed</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-[#002D62] mb-4">Madanlal TRADING COMPANY</h2>
              <div className="w-20 h-1 bg-[#D37474] mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Humaari chips aur namkeen ki quality aur distributorship ke baare mein adhik jaankari ke liye niche diye gaye maadhyamon se sampark karein.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#D37474] mb-4">{info.icon}</div>
                  <h3 className="font-bold text-[#002D62] mb-2">{info.title}</h3>
                  <a href={info.link} className="text-sm text-gray-500 hover:text-[#D37474] transition-colors break-words">
                    {info.content}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-8 bg-[#002D62] rounded-3xl text-white">
              <h3 className="text-xl font-bold mb-4">Follow Us on Social Media</h3>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-[#D37474] transition-all"><Instagram size={24}/></a>
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-[#D37474] transition-all"><Facebook size={24}/></a>
                <a href="https://wa.me/918955611943" className="p-3 bg-white/10 rounded-full hover:bg-[#25D366] transition-all"><MessageCircle size={24}/></a>
              </div>
            </div>
          </div>

          {/* Business Inquiry Form */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-50">
            <h3 className="text-2xl font-black text-[#002D62] mb-8 uppercase text-center">Inquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" name="fullName" placeholder="Apka Naam *" required onChange={handleChange} className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-[#002D62] outline-none" />
                <input type="tel" name="phone" placeholder="Mobile Number *" required onChange={handleChange} className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-[#002D62] outline-none" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <select name="businessType" onChange={handleChange} className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-[#002D62] outline-none">
                  <option value="">Select Business Type</option>
                  {businessTypes.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
                <select name="orderType" onChange={handleChange} className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-[#002D62] outline-none">
                  <option value="">Interested In</option>
                  {inquiryTypes.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>

              <input type="text" name="subject" placeholder="Subject (e.g. Bulk Order chips)" onChange={handleChange} className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-[#002D62] outline-none" />
              
              <textarea name="message" placeholder="Aapki Enquiry Detail mein likhein..." required rows={4} onChange={handleChange} className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-[#002D62] outline-none resize-none"></textarea>

              <button type="submit" className="w-full bg-[#002D62] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#D37474] transition-all shadow-xl group">
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                SUBMIT ON WHATSAPP
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] w-full bg-gray-100 flex items-center justify-center text-gray-400">
        <MapPin size={48} className="mr-2" /> <span>Google Map Integration (Jaipur, VKI Area)</span>
      </section>
    </div>
  );
};

export default Contact;