import React, { useState } from 'react';
import { 
  Shield, Phone, Mail, MapPin, Check, Sparkles, Send, MessageSquareCode
} from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

export default function PrivacyPolicy() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    smsOptIn: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        smsOptIn: false
      });
    }, 4000);
  };

  return (
    <div className="bg-white text-slate-800" id="privacy-policy-view">
      
      {/* 1. Hero Banner with Construction Scaffolding Blur */}
      <section 
        className="relative h-[250px] sm:h-[350px] bg-slate-900 flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80')"
        }}
        id="privacy-hero-banner"
      >
        <div className="text-center space-y-4 px-4 z-10">
          <ScrollReveal variant="fadeUp" duration={0.8}>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 font-sans mt-2">
              <span className="hover:text-yellow-400 cursor-pointer transition-colors">Home</span>
              <span>/</span>
              <span className="text-yellow-500 font-medium">Privacy Policy</span>
            </div>
          </ScrollReveal>
        </div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      </section>

      {/* 2. Intro Statement Block (Dark Slate/Diagonal Grid look) */}
      <section className="bg-[#111] py-16 px-4 border-b border-slate-800 relative overflow-hidden" id="privacy-intro-section">
        {/* Abstract lines bg */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <ScrollReveal variant="fadeUp" duration={0.8}>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed">
              Antenity respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed font-semibold mt-4 text-yellow-500">
              By using our website or services, you agree to the terms of this Privacy Policy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Numbered Grid Details (01 to 11) */}
      <section className="bg-white py-20 px-4 sm:px-8 lg:px-12" id="privacy-grid-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {/* 01. Information We Collect */}
            <ScrollReveal variant="fadeUp" duration={0.6} className="bg-white border-b md:border border-slate-100 md:border-slate-200/60 p-6 rounded-xl flex flex-col justify-between h-full space-y-4 hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-3">
                  <h3 className="font-display font-extrabold text-[#1a2631] text-base leading-tight">
                    Information We Collect
                  </h3>
                  <span className="font-mono text-slate-400 font-bold text-sm tracking-wider">01.</span>
                </div>
                <div className="text-xs text-slate-500 leading-relaxed space-y-4 font-sans mt-3">
                  <p>We may collect the following categories of information:</p>
                  <div>
                    <h4 className="font-bold text-[#1a2631] mb-1">A. Personal Information</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-500 pl-1">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Business information</li>
                      <li>Billing information</li>
                      <li>Any information you voluntarily submit through forms, chats, or contact requests</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a2631] mb-1">B. Automatically Collected Information</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-500 pl-1">
                      <li>IP address</li>
                      <li>Browser type</li>
                      <li>Device information</li>
                      <li>Pages visited</li>
                      <li>Cookies and tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 02. How We Use Your Information */}
            <ScrollReveal variant="fadeUp" duration={0.6} delay={0.05} className="bg-white border-b md:border border-slate-100 md:border-slate-200/60 p-6 rounded-xl flex flex-col justify-between h-full space-y-4 hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-3">
                  <h3 className="font-display font-extrabold text-[#1a2631] text-base leading-tight">
                    How We Use Your Information
                  </h3>
                  <span className="font-mono text-slate-400 font-bold text-sm tracking-wider">02.</span>
                </div>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3 font-sans mt-3">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    <li>Provide and manage our services</li>
                    <li>Respond to inquiries and customer support requests</li>
                    <li>Send administrative updates</li>
                    <li>Deliver marketing communications (if you opt-in)</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* 03. SMS Communications */}
            <ScrollReveal variant="fadeUp" duration={0.6} delay={0.1} className="bg-white border-b md:border border-slate-100 md:border-slate-200/60 p-6 rounded-xl flex flex-col justify-between h-full space-y-4 hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-3">
                  <h3 className="font-display font-extrabold text-[#1a2631] text-base leading-tight">
                    SMS Communications & A2P/10DLC Compliance
                  </h3>
                  <span className="font-mono text-slate-400 font-bold text-sm tracking-wider">03.</span>
                </div>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3 font-sans mt-3">
                  <p>If you opt in to receive SMS communications from Antenity, the following applies:</p>
                  <h4 className="font-bold text-[#1a2631]">SMS Consent</h4>
                  <p>By providing your mobile number and opting in, you consent to receive SMS messages from Antenity related to:</p>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    <li>Service updates</li>
                    <li>Account notifications</li>
                    <li>Marketing or promotional messages (if selected)</li>
                  </ul>
                  <p className="text-[11px] italic mt-2">
                    Message frequency may vary. Standard message and data rates may apply.
                  </p>
                  <p className="mt-2 font-medium text-slate-700">
                    You may opt out at any time by replying <strong className="text-slate-900">STOP</strong>. For assistance, reply <strong className="text-slate-900">HELP</strong> or contact us at info@antenity.com
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 04. Data Sharing & Mobile Information */}
            <ScrollReveal variant="fadeUp" duration={0.6} delay={0.15} className="bg-white border-b md:border border-slate-100 md:border-slate-200/60 p-6 rounded-xl flex flex-col justify-between h-full space-y-4 hover:shadow-md transition-shadow col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1">
              <div>
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-3">
                  <h3 className="font-display font-extrabold text-[#1a2631] text-base leading-tight">
                    Data Sharing & Mobile Information Protection
                  </h3>
                  <span className="font-mono text-slate-400 font-bold text-sm tracking-wider">04.</span>
                </div>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3 font-sans mt-3">
                  <p>We value your privacy and enforce strict data protection standards.</p>
                  <h4 className="font-bold text-[#1a2631] uppercase text-[10px] tracking-wide text-red-600">No Third-Party Marketing Sharing</h4>
                  <p className="font-semibold text-slate-700">
                    Mobile phone numbers and SMS opt-in data will NOT be shared, sold, rented, or disclosed to third parties or affiliates for marketing or promotional purposes.
                  </p>
                  <p>This includes all SMS consent and opt-in information.</p>
                  <h4 className="font-bold text-[#1a2631] text-[11px]">Limited Data Sharing for Service Delivery</h4>
                  <p>We may share personal information, including mobile numbers, only with trusted third-party service providers strictly for the purpose of:</p>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-400 pl-1">
                    <li>Delivering SMS messages</li>
                    <li>Processing payments</li>
                    <li>Hosting our website</li>
                    <li>Providing technical support</li>
                    <li>Operating essential business services</li>
                  </ul>
                  <p>These service providers are contractually obligated to protect your data, use it solely for the services they provide to Antenity, and not use it for their own marketing.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* 05. Cookies & Tracking */}
            <ScrollReveal variant="fadeUp" duration={0.6} className="bg-white border-b md:border border-slate-100 md:border-slate-200/60 p-6 rounded-xl flex flex-col justify-between h-full space-y-4 hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-3">
                  <h3 className="font-display font-extrabold text-[#1a2631] text-base leading-tight">
                    Cookies & Tracking Technologies
                  </h3>
                  <span className="font-mono text-slate-400 font-bold text-sm tracking-wider">05.</span>
                </div>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3 font-sans mt-3">
                  <p>We may use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    <li>Enhance user experience</li>
                    <li>Analyze website traffic</li>
                    <li>Improve marketing performance</li>
                  </ul>
                  <p className="text-[11px] text-slate-400 mt-2">
                    You may disable cookies through your browser settings.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 06. Data Security */}
            <ScrollReveal variant="fadeUp" duration={0.6} delay={0.05} className="bg-white border-b md:border border-slate-100 md:border-slate-200/60 p-6 rounded-xl flex flex-col justify-between h-full space-y-4 hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-3">
                  <h3 className="font-display font-extrabold text-[#1a2631] text-base leading-tight">
                    Data Security
                  </h3>
                  <span className="font-mono text-slate-400 font-bold text-sm tracking-wider">06.</span>
                </div>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3 font-sans mt-3">
                  <p>
                    We implement commercially reasonable administrative, technical, and physical safeguards to protect your personal information against unauthorized access, disclosure, or misuse.
                  </p>
                  <p className="text-[11px] text-slate-400 italic">
                    However, no online transmission is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 07. Data Retention */}
            <ScrollReveal variant="fadeUp" duration={0.6} delay={0.1} className="bg-white border-b md:border border-slate-100 md:border-slate-200/60 p-6 rounded-xl flex flex-col justify-between h-full space-y-4 hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-3">
                  <h3 className="font-display font-extrabold text-[#1a2631] text-base leading-tight">
                    Data Retention
                  </h3>
                  <span className="font-mono text-slate-400 font-bold text-sm tracking-wider">07.</span>
                </div>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3 font-sans mt-3">
                  <p>We retain personal information only for as long as necessary to:</p>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    <li>Fulfill the purposes outlined in this policy</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes</li>
                    <li>Enforce agreements</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* 08. Your Rights */}
            <ScrollReveal variant="fadeUp" duration={0.6} delay={0.15} className="bg-white border-b md:border border-slate-100 md:border-slate-200/60 p-6 rounded-xl flex flex-col justify-between h-full space-y-4 hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-3">
                  <h3 className="font-display font-extrabold text-[#1a2631] text-base leading-tight">
                    Your Rights
                  </h3>
                  <span className="font-mono text-slate-400 font-bold text-sm tracking-wider">08.</span>
                </div>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3 font-sans mt-3">
                  <p>Depending on your jurisdiction, you may have the right to:</p>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Withdraw consent</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                  <p className="pt-2 font-medium text-slate-700">
                    To exercise your rights, contact us at:{' '}
                    <a href="mailto:info@ozsolution.com" className="text-yellow-600 hover:underline">info@ozsolution.com</a>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 09. Children's Privacy */}
            <ScrollReveal variant="fadeUp" duration={0.6} className="bg-white border-b md:border border-slate-100 md:border-slate-200/60 p-6 rounded-xl flex flex-col justify-between h-full space-y-4 hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-3">
                  <h3 className="font-display font-extrabold text-[#1a2631] text-base leading-tight">
                    Children's Privacy
                  </h3>
                  <span className="font-mono text-slate-400 font-bold text-sm tracking-wider">09.</span>
                </div>
                <div className="text-xs text-slate-500 leading-relaxed font-sans mt-3">
                  <p>
                    Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 10. Updates to This Policy */}
            <ScrollReveal variant="fadeUp" duration={0.6} delay={0.05} className="bg-white border-b md:border border-slate-100 md:border-slate-200/60 p-6 rounded-xl flex flex-col justify-between h-full space-y-4 hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-3">
                  <h3 className="font-display font-extrabold text-[#1a2631] text-base leading-tight">
                    Updates to This Policy
                  </h3>
                  <span className="font-mono text-slate-400 font-bold text-sm tracking-wider">10.</span>
                </div>
                <div className="text-xs text-slate-500 leading-relaxed font-sans mt-3 space-y-2">
                  <p>
                    We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.
                  </p>
                  <p>
                    Continued use of the website after changes constitutes acceptance of the updated policy.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 11. Contact Information */}
            <ScrollReveal variant="fadeUp" duration={0.6} delay={0.1} className="bg-white border-b md:border border-slate-100 md:border-slate-200/60 p-6 rounded-xl flex flex-col justify-between h-full space-y-4 hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-3">
                  <h3 className="font-display font-extrabold text-[#1a2631] text-base leading-tight">
                    Contact Information
                  </h3>
                  <span className="font-mono text-slate-400 font-bold text-sm tracking-wider">11.</span>
                </div>
                <div className="text-xs text-slate-500 leading-relaxed font-sans mt-3 space-y-2">
                  <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
                  <div className="space-y-1 font-semibold text-slate-700">
                    <p className="text-slate-900">OZ Solution</p>
                    <p>Website: www.ozsolution.com</p>
                    <p>Email: info@ozsolution.com</p>
                    <p>Phone: +1 (507) 778 1624</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. Get in touch with us / Contact Form section */}
      <section className="bg-slate-50 py-20 px-4 sm:px-8 lg:px-12 border-t border-slate-200/60" id="privacy-contact-form-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - Narratives */}
            <ScrollReveal variant="fadeRight" className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-yellow-600 font-mono text-xs uppercase tracking-widest font-extrabold">
                  <span className="w-2 h-2 bg-yellow-500 block rounded-sm shrink-0" />
                  <span>Contact Us</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1a2631] tracking-tight leading-tight">
                  Your customers deserve real conversations
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  With OZ Solution, you get a trained, dependable support team that puts people first and keeps satisfaction high.
                </p>
              </div>

              {/* Dynamic Information Cards resembling pic */}
              <div className="space-y-4 pt-4">
                {/* Phone */}
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm">
                  <div className="bg-yellow-500 text-slate-950 p-2.5 rounded-lg shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-slate-400 font-bold font-mono">Phone Number</h4>
                    <a href="tel:+15077781624" className="text-sm font-semibold text-slate-800 hover:text-yellow-600 font-mono transition-colors">
                      +1 (507) 778 1624
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm">
                  <div className="bg-yellow-500 text-slate-950 p-2.5 rounded-lg shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-slate-400 font-bold font-mono">Email Address</h4>
                    <a href="mailto:info@ozsolution.com" className="text-sm font-semibold text-slate-800 hover:text-yellow-600 transition-colors">
                      info@ozsolution.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm">
                  <div className="bg-yellow-500 text-slate-950 p-2.5 rounded-lg shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-slate-400 font-bold font-mono">Our Location</h4>
                    <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                      15750 Fair Hill Way Apple Valley, Minnesota 55124, USA
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Submission Form Card */}
            <ScrollReveal variant="fadeLeft" delay={0.2} className="lg:col-span-7">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg relative overflow-hidden">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-fadeIn">
                    <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-black text-xl text-slate-900">Message Sent Successfully!</h3>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed max-w-sm mx-auto">
                      Thank you, <strong className="text-slate-800">{formData.firstName}</strong>. Your inquiry has been logged securely under compliance procedures. A support executive will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-display font-extrabold text-[#1a2631] text-xl">Get in touch with us</h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Need help or have a project? Get in touch — we're always ready to support you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">First Name</label>
                        <input 
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="First Name"
                          className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Last Name</label>
                        <input 
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Last Name"
                          className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Phone number</label>
                        <input 
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Phone number"
                          className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Email address</label>
                        <input 
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Email address"
                          className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Message</label>
                      <textarea 
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Type your message here..."
                        className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                      />
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <input 
                        type="checkbox"
                        id="smsOptIn"
                        checked={formData.smsOptIn}
                        onChange={(e) => setFormData({ ...formData, smsOptIn: e.target.checked })}
                        className="mt-1 h-4 w-4 text-yellow-500 focus:ring-yellow-400 border-slate-300 rounded cursor-pointer"
                      />
                      <label htmlFor="smsOptIn" className="text-[11px] text-slate-500 select-none cursor-pointer leading-tight">
                        Sign up to receive OZ Solution SMS alerts & exclusive offers
                      </label>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-950 py-3 rounded-lg text-xs font-extrabold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 5. Animated Marquee Banner matching construction focus */}
      <section className="bg-[#facc15] py-4 overflow-hidden border-y-2 border-slate-950" id="marquee-remodeling-bar">
        <div className="whitespace-nowrap flex select-none overflow-hidden text-slate-950 font-display font-black text-xs uppercase tracking-widest gap-8">
          <div className="flex shrink-0 justify-around min-w-full gap-8 animate-[marquee_25s_linear_infinite]">
            <span>★ RENOVATION & REMODELING</span>
            <span>★ COMMERCIAL PROJECTS</span>
            <span>★ INTERIOR & EXTERIOR DESIGN</span>
            <span>★ BUILDING DESIGN</span>
            <span>★ CONSTRUCTION</span>
          </div>
          <div className="flex shrink-0 justify-around min-w-full gap-8 animate-[marquee_25s_linear_infinite]" aria-hidden="true">
            <span>★ RENOVATION & REMODELING</span>
            <span>★ COMMERCIAL PROJECTS</span>
            <span>★ INTERIOR & EXTERIOR DESIGN</span>
            <span>★ BUILDING DESIGN</span>
            <span>★ CONSTRUCTION</span>
          </div>
        </div>
      </section>

    </div>
  );
}
