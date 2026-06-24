import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, MessageSquareCode, 
  Building, Clock, ExternalLink, ShieldCheck, CheckSquare 
} from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

export default function ContactUs() {
  const [activeBranch, setActiveBranch] = useState<'minnesota' | 'illinois' | 'texas'>('minnesota');
  const [feedback, setFeedback] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'takeoff',
    note: ''
  });
  const [sent, setSent] = useState(false);

  // Address details based on Branch Toggle
  const branchDetails = {
    minnesota: {
      address: '15750 Fair Hill Way Apple Valley, Minnesota 55124, USA',
      phone: '+1 (507) 778 1624',
      email: 'info@ozsolution.com',
      hours: 'Mon - Fri: 9:00 AM - 5:00 PM',
      coordinates: '44.7319° N, 93.2177° W'
    },
    illinois: {
      address: '401 North Michigan Ave Chicago, Illinois 60611, USA',
      phone: '+1 (312) 558 9021',
      email: 'chicago@ozsolution.com',
      hours: 'Mon - Fri: 8:30 AM - 5:30 PM',
      coordinates: '41.8897° N, 87.6231° W'
    },
    texas: {
      address: '1000 Louisiana St Houston, Texas 77002, USA',
      phone: '+1 (713) 442 8110',
      email: 'houston@ozsolution.com',
      hours: 'Mon - Fri: 9:00 AM - 5:00 PM',
      coordinates: '29.7589° N, 95.3698° W'
    }
  };

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFeedback({
        name: '',
        phone: '',
        email: '',
        subject: 'takeoff',
        note: ''
      });
    }, 4000);
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 py-12 md:py-20" id="contact-us-view">
      <div className="w-full px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Banner Block */}
        <ScrollReveal variant="fadeUp" duration={0.8} className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">GET IN TOUCH</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Connect with Our Senior Estimating Team
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
            Whether you need a quick sheet quantity takeoff or seek structural 5D BIM Revit orchestration, we are fully staffed to handle your projects.
          </p>
        </ScrollReveal>

        {/* Column Splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Information & Regional Branches Sidebar (5 cols) */}
          <ScrollReveal variant="fadeRight" className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-6 shadow-md border border-slate-850">
              <h2 className="font-display font-bold text-lg text-yellow-400">Preconstruction HQ Desk</h2>
              
              <div className="space-y-4">
                <a 
                  href="tel:+15077781624" 
                  className="flex items-center gap-4 text-xs sm:text-sm text-slate-300 hover:text-yellow-400 transition-colors font-mono"
                >
                  <Phone className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span>+1 (507) 778 1624</span>
                </a>
                <a 
                  href="mailto:info@ozsolution.com" 
                  className="flex items-center gap-4 text-xs sm:text-sm text-slate-300 hover:text-yellow-400 transition-colors font-mono"
                >
                  <Mail className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span>info@ozsolution.com</span>
                </a>
                <div className="flex items-start gap-4 text-xs sm:text-sm text-slate-300">
                  <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span>15750 Fair Hill Way Apple Valley, MN 55124</span>
                </div>
              </div>
            </div>

            {/* Branch Selector Map Mockup from Pic 1 / Pic 3 details */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
              <div>
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest font-bold">REGIONAL COVERAGE</span>
                <h3 className="font-display font-bold text-slate-950 text-base mt-1">OZ Solution Branch Locations</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold leading-tight">
                {[
                  { key: 'minnesota', label: 'Minnesota (HQ)' },
                  { key: 'illinois', label: 'Chicago (IL)' },
                  { key: 'texas', label: 'Houston (TX)' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveBranch(item.key as any)}
                    className={`py-2 px-1 rounded-lg border transition-all text-xs truncate cursor-pointer ${
                      activeBranch === item.key 
                        ? 'border-yellow-500 bg-yellow-500/10 text-yellow-600 font-bold' 
                        : 'border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Simulated Map visual showing latitude/longitude structure */}
              <div className="bg-slate-900 rounded-xl h-44 relative overflow-hidden flex items-center justify-center text-center p-4">
                {/* Blueprint lines on background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-50" />
                <div className="absolute top-2 right-2 font-mono text-[9px] text-cyan-500">{branchDetails[activeBranch].coordinates}</div>
                
                <div className="relative z-10 space-y-2">
                  <span className="inline-flex h-3 w-3 rounded-full bg-yellow-400 animate-ping absolute -top-1 -right-1" />
                  <MapPin className="w-8 h-8 text-yellow-500 mx-auto" />
                  <p className="text-[10px] font-mono text-slate-300 max-w-xs uppercase tracking-wider">{branchDetails[activeBranch].address}</p>
                </div>
              </div>

              {/* Selected Branch Specifications */}
              <div className="space-y-2 text-xs font-sans">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-400">Direct Telephone:</span>
                  <span className="font-mono text-slate-800 font-bold">{branchDetails[activeBranch].phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-400">Contact Email:</span>
                  <span className="font-mono text-slate-800 font-bold">{branchDetails[activeBranch].email}</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-slate-400">Operating Hours:</span>
                  <span className="text-slate-800 font-semibold">{branchDetails[activeBranch].hours}</span>
                </div>
              </div>
            </div>

          </ScrollReveal>

          {/* Contact Feedback Form (7 cols) */}
          <ScrollReveal variant="fadeLeft" delay={0.2} className="lg:col-span-7 bg-white border border-slate-220 border-slate-200 p-8 rounded-2xl shadow-sm">
            <h2 className="font-display font-extrabold text-[#2e3f4f] text-xl mb-4 flex items-center gap-2">
              <MessageSquareCode className="w-5 h-5 text-yellow-500" />
              <span>Submit General Inquiries</span>
            </h2>
            <p className="text-xs text-slate-500 font-sans leading-relaxed mb-6">
              Have general concerns, media inquiries, or custom pricing questions? Fill in our feedback portal underneath.
            </p>

            <form onSubmit={handleForm} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 font-sans mb-1.5">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={feedback.name}
                  onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                  placeholder="e.g. Robert Vance"
                  className="w-full bg-slate-50 border border-slate-300 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-yellow-500 focus:bg-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 font-sans mb-1.5">Telephone Connection *</label>
                  <input
                    type="tel"
                    required
                    value={feedback.phone}
                    onChange={(e) => setFeedback({ ...feedback, phone: e.target.value })}
                    placeholder="e.g. +1 (312) 558-9021"
                    className="w-full bg-slate-50 border border-slate-300 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-yellow-500 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 font-sans mb-1.5">Corporate Email Address *</label>
                  <input
                    type="email"
                    required
                    value={feedback.email}
                    onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
                    placeholder="e.g. robert@vancedevelopment.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-yellow-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 font-sans mb-1.5">Primary Subject Matter *</label>
                <select
                  value={feedback.subject}
                  onChange={(e) => setFeedback({ ...feedback, subject: e.target.value })}
                  className="w-full bg-[#f8fafc] border border-slate-300 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-yellow-500 focus:bg-white transition-colors font-sans"
                >
                  <option value="takeoff">Quantity Takeoff Request</option>
                  <option value="bim">5D BIM Revit Coordination</option>
                  <option value="pricing">General Pricing Packages</option>
                  <option value="custom">Custom Partner Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 font-sans mb-1.5">Notes *</label>
                <textarea
                  rows={4}
                  required
                  value={feedback.note}
                  onChange={(e) => setFeedback({ ...feedback, note: e.target.value })}
                  placeholder="Detail specify your preconstruction inquiry points..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-yellow-500 focus:bg-white transition-colors resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-2">
                <CheckSquare className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                <p className="text-[10px] text-slate-500 leading-relaxed font-sans mt-0.5">
                  I agree that OZ Solution representatives can contact me regarding my request via regional telephone services or email.
                </p>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#2e3f4f] hover:bg-[#24323f] text-yellow-400 font-bold py-4 rounded-md transition-all active:scale-98 shadow-md cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Feedback Inquiry</span>
              </button>

              {sent && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg animate-fadeIn text-center font-sans">
                  ✓ Feedback submitted successfully! We will coordinate a callback within 4 hours.
                </div>
              )}
            </form>
          </ScrollReveal>

        </div>

      </div>
    </div>
  );
}
