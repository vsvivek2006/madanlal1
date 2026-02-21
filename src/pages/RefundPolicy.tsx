import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  RefreshCw, AlertTriangle, Check, X, 
  Clock, MessageCircle, Phone, Mail, 
  Home, Shield, FileText, Camera,
  IndianRupee, Calendar
} from "lucide-react";

const RefundPolicy = () => {
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Refund & Return Policy | Mandanlal Trading Company - Official</title>
        <meta 
          name="description" 
          content="Official refund and return policy of Madanlal Trading Company. Learn about our 24-hour reporting window, refund process, and quality assurance for snacks and namkeen products." 
        />
        <meta 
          name="keywords" 
          content="refund policy, return policy, Madanlal refund, snack return policy, namkeen refund, money back guarantee, refund process"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002D62] via-[#003d7a] to-[#D37474] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
            <RefreshCw size={16} />
            <span className="text-sm font-semibold tracking-wider">REFUND & RETURN POLICY</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Refund <span className="text-[#D37474]">Policy</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Clear guidelines on returns, refunds, and quality assurance for all our snack products
          </p>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="white" opacity="0.5"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-16 px-6">
        
        {/* Important Notice Card */}
        <div className="bg-amber-50 border-l-8 border-amber-500 rounded-2xl p-6 mb-10 shadow-md">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-amber-600 shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">Important Information Regarding Food Products</h3>
              <p className="text-amber-700">
                Due to the perishable nature of our snacks (Namkeen, Chips, Kurkure, Bhujia), all sales are final. 
                Returns and refunds are only applicable in specific circumstances as outlined below.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 gap-8">
          
          {/* Section 1: Return Eligibility */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Shield className="h-6 w-6 text-[#002D62]" />
                </div>
                <h2 className="text-2xl font-black text-[#002D62]">1. Return Eligibility Criteria</h2>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6 text-lg">
                Madanlal Trading Company prioritizes food safety and hygiene. Returns are accepted <strong>only</strong> in the following circumstances:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Eligible Scenarios */}
                <div className="bg-green-50 p-5 rounded-xl border border-green-200">
                  <h3 className="font-bold mb-3 flex items-center gap-2 text-green-700">
                    <Check className="h-5 w-5" />
                    Eligible for Return
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span className="text-gray-700"><strong>Wrong Item:</strong> Customer receives incorrect product</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span className="text-gray-700"><strong>Expired Product:</strong> Product past expiry date at delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span className="text-gray-700"><strong>Damaged Packaging:</strong> Package tampered or damaged at delivery</span>
                    </li>
                  </ul>
                </div>

                {/* Not Eligible Scenarios */}
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h3 className="font-bold mb-3 flex items-center gap-2 text-red-700">
                    <X className="h-5 w-5" />
                    Not Eligible for Return
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-1 shrink-0" />
                      <span className="text-gray-700"><strong>Opened Products:</strong> Products that have been opened or consumed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-1 shrink-0" />
                      <span className="text-gray-700"><strong>Change of Mind:</strong> Customer no longer wants the product</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-1 shrink-0" />
                      <span className="text-gray-700"><strong>Improper Storage:</strong> Damage due to improper storage after delivery</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-blue-800 flex items-start gap-2">
                  <FileText className="h-4 w-4 mt-0.5 shrink-0" />
                  <span><strong>Note:</strong> Product images are for illustration purposes. Actual packaging may vary slightly based on batch updates. This does not qualify as a valid return reason.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Reporting Issues */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-orange-50 to-transparent p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-black text-[#002D62]">2. Reporting Issues & Complaint Window</h2>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Camera className="h-5 w-5 text-[#002D62]" />
                    Required Information
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-xl space-y-2">
                    <p className="flex items-start gap-2 text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      Clear photo of the product
                    </p>
                    <p className="flex items-start gap-2 text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      Photo of the packaging label (MRP, expiry date)
                    </p>
                    <p className="flex items-start gap-2 text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      Photo of the delivery invoice/bill
                    </p>
                    <p className="flex items-start gap-2 text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      Video evidence if available
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#002D62]" />
                    Time Window
                  </h3>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                    <p className="text-2xl font-bold text-red-600 mb-2">24 Hours</p>
                    <p className="text-gray-700">
                      All complaints must be reported within <strong>24 hours of delivery</strong>. 
                      Issues reported after this period will not be eligible for refund/replacement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Refund Process */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-green-50 to-transparent p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-xl">
                  <IndianRupee className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-black text-[#002D62]">3. Refund Process & Timeline</h2>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center font-bold text-[#002D62]">1</div>
                  <div>
                    <h3 className="font-bold">Complaint Submission</h3>
                    <p className="text-gray-600">Customer reports issue via WhatsApp or email within 24 hours with required evidence</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center font-bold text-[#002D62]">2</div>
                  <div>
                    <h3 className="font-bold">Review & Verification</h3>
                    <p className="text-gray-600">Our team verifies the complaint within 24-48 hours of submission</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center font-bold text-[#002D62]">3</div>
                  <div>
                    <h3 className="font-bold">Approval & Processing</h3>
                    <p className="text-gray-600">If approved, refund is initiated within 48 hours of verification</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center font-bold text-[#002D62]">4</div>
                  <div>
                    <h3 className="font-bold">Credit to Account</h3>
                    <p className="text-gray-600">Amount credited to original payment method within <strong>5-7 business days</strong></p>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 p-5 rounded-xl">
                  <h4 className="font-bold mb-2">Refund Methods:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1" />
                      <span className="text-gray-700"><strong>UPI/Card Payments:</strong> Refund to same UPI ID/card (3-5 days)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1" />
                      <span className="text-gray-700"><strong>NetBanking:</strong> Refund to source account (5-7 days)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1" />
                      <span className="text-gray-700"><strong>COD Orders:</strong> Bank transfer (account details required) (5-7 days)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Replacement Option */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-purple-50 to-transparent p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <RefreshCw className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-black text-[#002D62]">4. Replacement Option</h2>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Instead of refund, customers may opt for product replacement. Replacement is subject to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-1" />
                  <span className="text-gray-700">Product availability in stock</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-1" />
                  <span className="text-gray-700">Same value product (no additional payment required)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-1" />
                  <span className="text-gray-700">Dispatched within 48 hours of approval</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border-l-8 border-amber-500 rounded-2xl p-6 mb-10 shadow-md">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-amber-600 shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">Important Information Regarding Replacement</h3>
              <p className="text-amber-700">
               Replacements will be delivered within 7-10 working days.
              </p>
            </div>
          </div>
        </div>

          {/* Company Commitment */}
          <div className="bg-gradient-to-br from-[#002D62] to-[#001a3a] text-white p-8 rounded-2xl text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-[#D37474]" />
            <h3 className="text-2xl font-bold mb-3">Our Quality Commitment</h3>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              "Our mission is to deliver fresh, high-quality snacks to every customer. 
              If any issue arises, we are always available to resolve it promptly and fairly."
            </p>
            <div className="mt-6 text-sm text-blue-200">
              — Madanlal Trading Company, Jaipur
            </div>
          </div>

          {/* Contact & Actions */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center">
            <h3 className="text-xl font-bold mb-4">Need to Report an Issue?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a 
                href="https://wa.me/918955611943" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1ebd57] transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp Support
              </a>
              <a 
                href="mailto:info@mandlal.shop"
                className="bg-[#002D62] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#001a3a] transition-all"
              >
                <Mail size={20} />
                Email Support
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Response Time: Within 24 hours | Support Hours: Mon-Sat, 10AM - 7PM
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-[#002D62] hover:text-blue-700 font-semibold transition-colors"
            >
              <Home size={18} />
              Back to Home Page
            </Link>
          </div>

          {/* Footer Note */}
          <div className="text-xs text-gray-400 text-center border-t pt-6">
            <p>Policy Last Updated: February 19, 2026 | Version 2.0</p>
            <p className="mt-1">© Madanlal Trading Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;