import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Check, 
  Compass, 
  Target, 
  Users, 
  Bookmark, 
  Award, 
  Building,
  Diamond,
  Briefcase,
  HelpCircle,
  Clock,
  ThumbsUp,
  MapPin,
  Phone,
  Mail,
  Zap,
  CheckCircle2
} from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

interface AboutUsProps {
  onNavigate: (route: string) => void;
}

export default function AboutUs({ onNavigate }: AboutUsProps) {
  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans" id="about-us-page">
      
      {/* 1. Header Banner */}
      <section 
        className="relative h-[280px] sm:h-[350px] flex items-center justify-center bg-cover bg-center text-white"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(20, 27, 37, 0.85), rgba(20, 27, 37, 0.9)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80')` 
        }}
        id="about-hero-banner"
      >
        <ScrollReveal variant="fadeUp" duration={0.8} className="text-center space-y-4 px-4 z-10">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            About us
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-slate-300">
            <span className="hover:text-yellow-500 cursor-pointer transition-colors" onClick={() => onNavigate('home')}>Home</span>
            <span>/</span>
            <span className="text-yellow-500 font-medium">About Us</span>
          </div>
        </ScrollReveal>
        {/* Subtle grid accent overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      </section>

      {/* 2. About Us - OZ Solution (Core Content) */}
      <section className="py-20 bg-white" id="about-intro-section">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Visual Composition matching Pic 2 */}
            <ScrollReveal variant="fadeRight" className="lg:col-span-6 relative">
              <div className="relative grid grid-cols-12 gap-4">
                
                {/* Main Curve Architecture Image */}
                <div className="col-span-8 rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                    alt="Modern luxury spiral stairs and arches" 
                    className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Overlapping Render Mock Image */}
                <div className="absolute right-0 bottom-12 w-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80" 
                    alt="BIM 3D modeling house render with hard hat" 
                    className="w-full h-[220px] sm:h-[260px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
          {/* Gold Seal sticker badge overlay */}
                <div className="absolute -bottom-4 left-1/3 transform -translate-x-1/2 z-20">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 animate-pulse">
                    <div className="absolute inset-1.5 border-2 border-dashed border-slate-900/30 rounded-full" />
                    <div className="text-center px-2">
                      <span className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-950 font-bold leading-none mb-1">
                        Experience
                      </span>
                      <span className="block text-xl sm:text-2xl font-black text-slate-950 leading-none">
                        25+ Yrs
                      </span>
                      <span className="block font-mono text-[8px] sm:text-[9px] uppercase text-slate-900 font-semibold mt-1">
                        ★ PRECON HUB ★
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>

            {/* Right Column: Narrative content and values */}
            <ScrollReveal variant="fadeLeft" delay={0.2} className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-yellow-500" />
                  <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">ESTABLISHED LEADERSHIP</span>
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                  About Us – OZ Solution
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                  OZ Solution is a professional construction estimating company that uses BIM to provide precise cost estimates throughout the United States. We enable construction managers, architects, engineers, developers, and contractors to make smart financial choices with confidence. Our goal is simple: <span className="text-slate-900 font-semibold italic">to provide you with accurate construction cost estimates that help you stay within your budget, reduce your risk, and win more bids.</span>
                </p>
              </div>

              {/* Sub-cards matching yellow grid elements in Pic 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-yellow-500/5 hover:bg-yellow-500/10 border border-yellow-500/10 rounded-xl space-y-3 transition-colors">
                  <div className="bg-yellow-500 text-slate-950 p-2.5 rounded-lg w-fit shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Commitment to Accuracy</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    Every estimate reflects disciplined quantity takeoffs and verified pricing data.
                  </p>
                </div>

                <div className="p-5 bg-yellow-500/5 hover:bg-yellow-500/10 border border-yellow-500/10 rounded-xl space-y-3 transition-colors">
                  <div className="bg-yellow-500 text-slate-950 p-2.5 rounded-lg w-fit shadow-md">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Innovation at Every Stage</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    From conceptual budgeting to BIM 5D modeling, we use smart systems to improve clarity.
                  </p>
                </div>
              </div>

              {/* Yellow Square Bullet Points list */}
              <ul className="space-y-3 pt-2">
                {[
                  "We respect deadlines and deliver structured cost reports.",
                  "We support informed decisions with transparent financial breakdowns.",
                  "Every project receives trade-specific attention and real market analysis."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-none flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 font-sans font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Contact Button */}
              <div className="pt-4">
                <button 
                  onClick={() => onNavigate('contact-us')}
                  className="inline-flex items-center justify-between bg-slate-950 hover:bg-slate-900 text-yellow-500 font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all gap-8 group cursor-pointer"
                >
                  <span>Contact Now</span>
                  <div className="bg-yellow-500 text-slate-950 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>

            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Who We Are (Dark Chevron Patterned Section) */}
      <section 
        className="py-20 bg-[#141b25] text-white relative overflow-hidden" 
        style={{
          backgroundImage: `linear-gradient(rgba(20, 27, 37, 0.98), rgba(20, 27, 37, 0.98)), url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h80v80H0z' fill='none'/%3E%3Cpath d='M0 40 L40 0 L80 40 L40 80 Z' stroke='rgba(255,255,255,0.015)' stroke-width='1' fill='none'/%3E%3C/svg%3E")`
        }}
        id="who-we-are-section"
      >
        <ScrollReveal variant="fadeUp" duration={0.8} className="w-full px-4 sm:px-8 lg:px-12 relative z-10 space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-0.5 bg-yellow-500" />
              <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest font-bold">FOUNDATIONAL EXPERTISE</span>
              <span className="w-6 h-0.5 bg-yellow-500" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Who We Are
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-350 leading-relaxed max-w-2xl mx-auto font-sans">
              <p>
                We are a group of construction professionals, BIM experts, and experienced estimators who understand the real challenges of the US building industry. Honesty, accuracy, and real-world expertise are the foundations of our work. To ensure every estimate matches real-world construction conditions, we combine our knowledge of the profession with modern BIM-integrated workflows.
              </p>
              <p>
                We don\'t just add up numbers at OZ Solution. We make things clear. We pay close attention to every project we work on, plan costs carefully, and are well-versed in local codes, standards, and market pricing.
              </p>
            </div>
          </div>

          {/* Three Column Mission / Vision / Value Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Card 1: Our Mission */}
            <div className="bg-[#1b2533] border border-white/5 p-8 rounded-2xl space-y-6 relative hover:border-yellow-500/20 hover:bg-[#202c3d] transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-yellow-500/60 uppercase tracking-widest">01 / PURPOSE</span>
                  <Compass className="w-8 h-8 text-yellow-500/20 group-hover:text-yellow-500/50 transition-colors" />
                </div>
                <h3 className="font-display font-extrabold text-slate-100 text-xl tracking-tight">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-light">
                  Our mission is to deliver precise, user-centric cost estimation solutions by combining advanced analytics, up-to-date market data, and intuitive tools that simplify budgeting and planning for every user. We commit to clarity, reliability, and continuous innovation to help our customers save time, reduce risk, and achieve their financial goals.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="text-[10px] font-mono text-yellow-500">ACCURACY DELIVERED</span>
              </div>
            </div>

            {/* Card 2: Our Vision */}
            <div className="bg-[#1b2533] border border-white/5 p-8 rounded-2xl space-y-6 relative hover:border-yellow-500/20 hover:bg-[#202c3d] transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-yellow-500/60 uppercase tracking-widest">02 / OUTLOOK</span>
                  <Target className="w-8 h-8 text-yellow-500/20 group-hover:text-yellow-500/50 transition-colors" />
                </div>
                <h3 className="font-display font-extrabold text-slate-100 text-xl tracking-tight">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-light">
                  To be the most trusted global platform for accurate, transparent, and data-driven cost estimation, empowering individuals and organizations to make informed financial decisions with confidence.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="text-[10px] font-mono text-yellow-500">GLOBAL STANDARDS</span>
              </div>
            </div>

            {/* Card 3: Our Value */}
            <div className="bg-[#1b2533] border border-white/5 p-8 rounded-2xl space-y-6 relative hover:border-yellow-500/20 hover:bg-[#202c3d] transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-yellow-500/60 uppercase tracking-widest">03 / ETHICS</span>
                  <Users className="w-8 h-8 text-yellow-500/20 group-hover:text-yellow-500/50 transition-colors" />
                </div>
                <h3 className="font-display font-extrabold text-slate-100 text-xl tracking-tight">Our Value</h3>
                
                <ul className="grid grid-cols-1 gap-2.5">
                  {[
                    "Accuracy First",
                    "Contractor-Driven Accuracy",
                    "Grounded in Real Site Conditions",
                    "Cost Transparency",
                    "Data-Driven Estimation",
                    "Practical, Execution-Ready Estimates",
                    "Accountability in Every Estimate",
                    "Long-Term Contractor Partnerships"
                  ].map((valueText, valueIdx) => (
                    <li key={valueIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-sans font-light">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0" />
                      <span>{valueText}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="text-[10px] font-mono text-yellow-500">INTEGRITY & TRUST</span>
              </div>
            </div>

          </div>

          {/* Let\'s make something great together link */}
          <div className="text-center pt-4">
            <p className="text-xs sm:text-sm text-slate-300 font-sans">
              Let\'s make something great work together.{" "}
              <span 
                className="text-yellow-500 hover:text-yellow-400 font-semibold underline underline-offset-4 cursor-pointer transition-colors"
                onClick={() => onNavigate('contact-us')}
              >
                Get Free Quote
              </span>
            </p>
          </div>

        </ScrollReveal>
      </section>

      {/* 4. Driven by data, experience, and accountability Section (Bento Grid Elements) */}
      <section className="py-20 bg-white" id="driven-by-data-section">
        <ScrollReveal variant="fadeUp" duration={0.8} className="w-full px-4 sm:px-8 lg:px-12 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">
              • OUR FEATURES
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-950 max-w-4xl mx-auto tracking-tight leading-tight">
              Driven by data, experience, and accountability, we deliver structured cost solutions that support sustainable project growth.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* Left Card: Builder Promo with overlapping image elements */}
            <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200/60 p-8 flex flex-col justify-between overflow-hidden relative group">
              <div className="space-y-4 relative z-10">
                <span className="text-[10px] font-mono uppercase bg-slate-900 text-yellow-400 px-2.5 py-1 rounded-full font-bold">
                  PRECON ARCHITECTURE
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-900 leading-tight">
                  Your Budget.<br />Our Expertise.<br />Request a Free Construction Estimate Today
                </h3>
              </div>

              {/* Overlapping Smiling construction worker */}
              <div className="relative mt-8 h-64 sm:h-72 rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80" 
                  alt="Construction estimator with safety helmet and blueprints" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
                  <span className="text-xs sm:text-sm font-semibold">Ready to get started?</span>
                  <span 
                    className="flex items-center gap-1.5 text-xs text-yellow-400 font-mono font-bold hover:underline cursor-pointer"
                    onClick={() => onNavigate('contact-us')}
                  >
                    Get Quote <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Subtle architectural background pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
            </div>

            {/* Right Card: Massive Bento Highlight (Yellow Container) */}
            <div className="lg:col-span-6 bg-yellow-500 rounded-2xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
              
              <div className="space-y-6 relative z-10 pt-4">
                <span className="text-[10px] font-mono uppercase bg-slate-950 text-yellow-400 px-3 py-1 rounded-full font-bold">
                  OUR CAPABILITY
                </span>
                
                <div className="space-y-2">
                  <div className="text-6xl sm:text-7xl font-black text-slate-950 tracking-tighter">
                    250+
                  </div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-950 tracking-tight">
                    Dedicated Professionals
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-900/80 leading-relaxed font-sans font-medium">
                  Experienced estimators, engineers, and BIM specialists working with absolute precision across all commercial, residential, and industrial divisions.
                </p>
              </div>

              {/* Bottom tabs inside bento container */}
              <div className="flex flex-wrap gap-2.5 mt-8 relative z-10">
                <span className="bg-slate-950 text-white font-mono text-[10px] font-bold px-3.5 py-1.5 rounded-md uppercase tracking-wider">
                  Visualization
                </span>
                <span className="bg-slate-950 text-white font-mono text-[10px] font-bold px-3.5 py-1.5 rounded-md uppercase tracking-wider">
                  Cost Modeling
                </span>
              </div>
            </div>

          </div>

          {/* Caption with logo or seal */}
          <div className="flex justify-center items-center gap-2 pt-4">
            <span className="text-base">👷</span>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              From vision to structure – <span className="text-yellow-600 font-semibold italic">Innovate With Confidence</span>
            </p>
          </div>

        </ScrollReveal>
      </section>

      {/* 5. What We Do Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200/60" id="what-we-do-detailed">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Scope details */}
            <ScrollReveal variant="fadeRight" className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-yellow-500" />
                  <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">SERVICES SCOPE</span>
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
                  What We Do
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                  We offer a wide variety of BIM-based technical services and cost estimation for building, such as:
                </p>
              </div>

              {/* Styled Orange Square List */}
              <ul className="grid grid-cols-1 gap-3.5">
                {[
                  "Detailed and conceptual cost estimation",
                  "Quantity take-offs and BOQs",
                  "MEP and HVAC cost estimation",
                  "BIM 3D cost modeling",
                  "Construction documentation support",
                  "Value engineering and cost optimization",
                  "Bid preparation and feasibility studies"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-amber-500 rounded-none flex-shrink-0 transform rotate-45" />
                    <span className="text-xs sm:text-sm text-slate-800 font-sans font-semibold">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200/85">
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans italic">
                  Our BIM 3D cost modeling brings together physical dimensions and detailed databases into a tight system. This helps project teams see budgets clearly, spot financial hazards early, and prevent costly mistakes or redoing work.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Column: High Quality Engineers Picture */}
            <ScrollReveal variant="fadeLeft" delay={0.2} className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&w=800&q=80" 
                  alt="Male and female professional engineers with helmets and safety vests" 
                  className="w-full h-[380px] sm:h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-yellow-500/5 mix-blend-multiply" />
                {/* Visual Accent */}
                <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-display font-bold text-sm">Site-Ready Precon Systems</h4>
                      <p className="text-slate-300 text-[10px] font-mono">BIM INTEGRATED ESTIMATES</p>
                    </div>
                    <span className="text-yellow-500 font-bold text-xs bg-white/10 px-3 py-1 rounded-full">
                      USA-Wide
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 6. Ready to Plan Your Project (Dark Call to Action) */}
      <section 
        className="py-20 bg-[#141b25] text-white relative overflow-hidden text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 27, 37, 0.96), rgba(20, 27, 37, 0.96)), url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h80v80H0z' fill='none'/%3E%3Cpath d='M0 40 L40 0 L80 40 L40 80 Z' stroke='rgba(255,255,255,0.015)' stroke-width='1' fill='none'/%3E%3C/svg%3E")`
        }}
        id="about-cta-footer"
      >
        <ScrollReveal variant="fadeUp" duration={0.8} className="w-full px-4 sm:px-8 lg:px-12 relative z-10 space-y-6 max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Ready to Plan Your Project With Confidence?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-light max-w-xl mx-auto">
            Contact us now to discuss your project and receive a precise, data-driven cost estimate from our experts.
          </p>

          <div className="pt-6 flex flex-col items-center gap-4">
            <button 
              onClick={() => onNavigate('contact-us')}
              className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-all gap-2 cursor-pointer"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <span 
              onClick={() => onNavigate('contact-us')}
              className="text-xs text-yellow-500 hover:text-yellow-400 font-mono font-bold underline underline-offset-4 cursor-pointer transition-colors"
            >
              Get a Free Quote
            </span>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
