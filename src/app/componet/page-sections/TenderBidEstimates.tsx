import React, { useState } from 'react';
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  ChevronRight
} from 'lucide-react';
import { useScroll, useTransform, motion } from 'motion/react';
import ScrollReveal from '../common/ScrollReveal';
import OZLogoBadge from '../common/OZLogoBadge';

interface TenderBidEstimatesProps {
  onNavigate: (route: string) => void;
  onOpenEstimationTool?: () => void;
}

export default function TenderBidEstimates({ onNavigate, onOpenEstimationTool }: TenderBidEstimatesProps) {
  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Scroll Progress rotation for the logo badge
  const { scrollYProgress } = useScroll();
  const badgeRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const faqs = [
    {
      q: "Q1. What makes your bid estimates different?",
      a: "We focus on both accuracy and pricing strategy. Our estimates are built to be competitive while maintaining realistic profit margins."
    },
    {
      q: "Q2. Do you work with subcontractors as well?",
      a: "Yes. We estimate specific trade packages for subcontractors, ensuring accurate material buyouts and labor quotes."
    },
    {
      q: "Q3. Can you review our bid before submission?",
      a: "Yes, we offer comprehensive pre-bid audits to review quantities, labor rates, and general conditions to eliminate cost blindspots."
    },
    {
      q: "Q4. Are your bid estimates BOQ-based?",
      a: "Absolutely. We build detailed Bills of Quantities directly from construction drawings and link them to realistic pricing databases."
    },
    {
      q: "Q5. Do you include risk assessment in your bid estimates?",
      a: "Yes. We analyze design gaps, logistical challenges, and material price fluctuations to build robust contingency projections."
    },
    {
      q: "Q6. Can you support proposal and documentation preparation?",
      a: "Yes, we help prepare bid proposals, compile response forms, and organize technical documentation for structured client review."
    },
    {
      q: "Q7. Do you provide sector-specific bid estimating?",
      a: "Yes. We cover residential, commercial, industrial, and government tenders, customizing our approach for each sector's rules."
    },
    {
      q: "Q8. How do your bid estimates help improve success rates?",
      a: "By delivering professional, visually structured, and mathematically sound bids, we build instant credibility with tender reviewers."
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen selection:bg-yellow-500 selection:text-slate-900 overflow-x-hidden">
      
      {/* 1. Hero Breadcrumb Section */}
      <section 
        className="relative py-24 md:py-32 bg-cover bg-center text-white"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.95)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')" 
        }}
        id="qto-hero"
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 text-center space-y-4">
          <ScrollReveal variant="fadeUp" duration={0.8}>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-100 tracking-tight leading-tight">
              Tender & Bid Estimates
            </h1>
          </ScrollReveal>
          
          <ScrollReveal variant="fadeUp" duration={0.8} delay={0.15}>
            <p className="text-xs sm:text-sm font-mono tracking-wider text-yellow-500 uppercase">
              <span className="hover:text-yellow-400 cursor-pointer transition-colors" onClick={() => onNavigate('home')}>Home</span> / Tender & Bid Estimates
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-20 bg-white" id="tender-intro">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
                Tender & Bid Estimates
              </h2>
              <div className="w-20 h-1.5 bg-yellow-500 mt-3 rounded-full" />
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2} className="space-y-4">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                When you're preparing to submit a tender, every number matters. A small mistake can cost you the project or eat into your profit later. At Aternity, our <strong className="text-slate-900 font-semibold">Tender & Bid Estimates service</strong> is built to help contractors submit strong, competitive, and financially sound bids with complete clarity.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                We don't just calculate totals. We build a clear pricing strategy around your project.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.3} className="pt-4">
              <button 
                onClick={() => onNavigate('contact-us')}
                className="group inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-display font-bold text-sm uppercase tracking-wider py-4 px-8 rounded shadow-lg shadow-yellow-500/10 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Contact Us Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </ScrollReveal>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <ScrollReveal variant="scaleUp" className="relative group">
              <div className="absolute -inset-2 bg-yellow-500 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity blur" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
                  alt="Smiling businessman crossed arms with project layout background" 
                  className="w-full h-full object-cover max-h-[480px] filter hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

      {/* 3. Complete Construction Bid Estimate Services Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Description Column */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal variant="fadeRight">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
                  Complete Construction Bid Estimate Services
                </h2>
                <div className="w-16 h-1 bg-yellow-500 mt-3 rounded-full" />
              </ScrollReveal>

              <ScrollReveal variant="fadeRight" delay={0.1}>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We provide end-to-end construction bid estimate services tailored to project drawings, BOQs, and specifications. Each <strong className="text-slate-900 font-semibold">construction bidding cost estimate</strong> is carefully structured to reflect real project scope, site conditions, and execution requirements.
                </p>
              </ScrollReveal>
            </div>

            {/* Right List Column with left yellow accent line */}
            <div className="lg:col-span-6 border-l-4 border-yellow-500 pl-6 lg:pl-10 space-y-5">
              <ScrollReveal variant="fadeLeft">
                <h4 className="text-sm font-mono font-bold uppercase text-slate-400 tracking-wider">
                  Our team handles:
                </h4>
                
                <ul className="space-y-4 mt-4 text-xs sm:text-sm text-slate-600 font-medium">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                    <span>Detailed tender estimate preparation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                    <span>Accurate construction cost estimate for tender</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                    <span>Full construction bid level estimate</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                    <span>Structured construction project bid estimate</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                    <span>Reliable construction pre-bid estimate</span>
                  </li>
                </ul>
              </ScrollReveal>
            </div>

          </div>

          <div className="mt-16 text-center">
            <ScrollReveal variant="fadeUp" className="text-xs sm:text-sm text-slate-500 italic max-w-xl mx-auto">
              Every estimate includes a clear construction bid cost breakdown so you understand exactly where your costs are coming from.
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Competitive Yet Profitable Pricing */}
      <section className="py-20 bg-white" id="tender-pricing">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <ScrollReveal variant="fadeDown" className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight text-center">
            Competitive Yet Profitable Pricing
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Column 1 with left yellow highlight */}
          <ScrollReveal variant="fadeRight" className="bg-white p-8 rounded-xl border border-slate-200 border-l-4 border-l-yellow-500 shadow-sm hover:shadow-md transition-all duration-200">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Winning a project is important. Winning it at the wrong price is risky. We focus on realistic and profitable bid pricing that balances competitiveness with financial stability.
            </p>
          </ScrollReveal>

          {/* Column 2 with left yellow highlight */}
          <ScrollReveal variant="fadeLeft" className="bg-white p-8 rounded-xl border border-slate-200 border-l-4 border-l-yellow-500 shadow-sm hover:shadow-md transition-all duration-200 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Our services include:
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <span>Professional <strong className="text-slate-900 font-semibold">construction bid pricing services</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <span>Strong construction, competitive pricing strategy</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <span>Contractor margin planning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <span>Detailed construction bid price analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <span>Market-aligned pricing strategy</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        <div className="mt-12 text-center">
          <ScrollReveal variant="fadeUp" className="text-xs sm:text-sm text-slate-500 italic max-w-xl mx-auto">
            This approach strengthens your competitive bidding cost strategy while protecting your bottom line.
          </ScrollReveal>
        </div>
      </div>
    </section>

      {/* 5. BOQ-Based and Risk-Aware Bid Preparation */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column with circular badge overlay */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal variant="fadeRight" className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" 
                    alt="Workmen reviewing bid papers" 
                    className="w-full object-cover max-h-[440px] filter brightness-[0.95]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                </div>

                {/* Circular badge with custom scroll-linked rotating frame motion */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-36 sm:h-36 bg-yellow-500 rounded-full flex flex-col items-center justify-center border-4 border-slate-50 shadow-xl text-slate-950 p-2 z-20">
                  <motion.div 
                    className="absolute inset-1 opacity-20"
                    style={{ rotate: badgeRotation }}
                  >
                    <OZLogoBadge className="w-full h-full text-slate-950" />
                  </motion.div>

                  <div className="flex flex-col items-center justify-center text-center z-10">
                    <span className="text-2xl sm:text-3xl font-display font-black leading-none tracking-tight">25+</span>
                    <span className="text-[9px] uppercase font-mono font-extrabold tracking-widest mt-1 text-center leading-tight">Years Exp</span>
                    <span className="text-[7px] text-slate-800 font-sans font-bold leading-none mt-0.5 uppercase tracking-wide">Tender Bidding</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal variant="fadeLeft" delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight leading-tight mt-1 text-slate-900">
                  BOQ-Based and Risk-Aware Bid Preparation
                </h2>
                <div className="w-16 h-1 bg-yellow-500 mt-3 rounded-full" />
              </ScrollReveal>

              <ScrollReveal variant="fadeLeft" delay={0.2} className="space-y-4">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We prepare BOQ based bid preparation aligned with project quantities and scope requirements. Every line item is checked to ensure nothing is missed.
                </p>

                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                  Our bid support includes:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {[
                    "construction bid calculation services",
                    "construction bid financial analysis",
                    "Construction contingency cost estimate",
                    "Construction risk-based estimating",
                    "Risk assessment for tender submissions",
                    "Pre award financial evaluation"
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-2.5 bg-white border border-slate-200/80 hover:border-yellow-500/30 p-3.5 rounded-lg transition-colors shadow-sm"
                    >
                      <div className="bg-yellow-500/10 text-yellow-600 p-1 rounded-md mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3px]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-700">
                        {item === "construction bid calculation services" ? (
                          <strong className="text-slate-900 font-extrabold">{item}</strong>
                        ) : item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-2 italic border-l-2 border-yellow-500/40 pl-4">
                  By identifying risks early, we help reduce pricing errors and unexpected losses after award.
                </p>

                {/* Highlighted Proposal Card */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 border-l-4 border-l-yellow-500 mt-6 shadow-sm space-y-4">
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Proposal & Documentation Support
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A strong estimate must be backed by clear documentation. As experienced <strong className="text-slate-900 font-semibold">construction estimating consultants</strong>, we provide full support throughout the tender stage.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                    {[
                      "construction bid proposal preparation",
                      "construction tender preparation services",
                      "construction bid documentation services",
                      "construction tender support services",
                      "Construction bid management services",
                      "Construction bid planning services"
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-400 font-mono font-bold uppercase pt-3 border-t border-slate-100">
                    Our goal is to ensure your submission is organised, accurate, and ready for evaluation.
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Sector-Specific Bid Estimating */}
      <section className="py-20 bg-white" id="tender-sector-specific">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <ScrollReveal variant="fadeDown" className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight text-center">
            Sector-Specific Bid Estimating
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Column 1 with left yellow highlight */}
          <ScrollReveal variant="fadeRight" className="bg-white p-8 rounded-xl border border-slate-200 border-l-4 border-l-yellow-500 shadow-sm hover:shadow-md transition-all duration-200 space-y-4">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Different project types require different pricing structures. We provide:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <span>commercial construction bid estimate</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <span>residential construction bid estimate</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <span>industrial construction bid estimate</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <span>construction estimate for government bids</span>
              </li>
            </ul>
          </ScrollReveal>

          {/* Column 2 with left yellow highlight */}
          <ScrollReveal variant="fadeLeft" className="bg-white p-8 rounded-xl border border-slate-200 border-l-4 border-l-yellow-500 shadow-sm hover:shadow-md transition-all duration-200 flex items-center">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              As a trusted <strong className="text-slate-900 font-semibold">construction bid estimate company</strong>, we tailor each estimate to the project's scale, complexity, and procurement method.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

      {/* 7. Why Contractors Choose Our Bid Estimating */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" 
            alt="Skilled workmen structure setup" 
            className="w-full h-full object-cover filter brightness-[0.2] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-white space-y-8">
          <ScrollReveal variant="fadeDown" className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight leading-tight">
              Why Contractors Choose Our Bid Estimating
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1} className="space-y-5 bg-slate-950/60 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-white/5 shadow-2xl">
            <ul className="space-y-4 text-xs sm:text-sm md:text-base text-slate-200">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Transparent cost structure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Accurate scope coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Strong focus on risk control</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Contingency planning in construction bids</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Construction bid profitability analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Improved bid success rate through strategic pricing</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 mt-6">
              <p className="text-xs sm:text-sm text-yellow-400 font-mono font-bold tracking-wider uppercase leading-relaxed">
                Our team of <strong className="text-white">construction bid estimate experts</strong> ensures your bid is not just competitive, but financially sound and defensible.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="py-24 bg-white" id="tender-faq">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (FAQ accordions) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fadeRight">
              <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-none uppercase">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mt-4 rounded-full" />
            </ScrollReveal>

            {/* Accordion List */}
            <ScrollReveal variant="fadeRight" delay={0.1} className="space-y-3 pt-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className={`border rounded-lg overflow-hidden transition-all duration-200 bg-white ${
                      isOpen ? 'border-yellow-500 shadow-md ring-1 ring-yellow-500/10' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left py-4 px-5 flex items-center justify-between gap-4 font-sans font-bold text-xs sm:text-sm text-slate-800 transition-colors"
                    >
                      <span className={isOpen ? 'text-yellow-600' : 'text-slate-800'}>
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-yellow-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[250px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-5 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans bg-slate-50">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>

          {/* Right Column (Crane image) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ScrollReveal variant="scaleUp" className="relative group">
              <div className="absolute -inset-2 bg-yellow-500 rounded-2xl opacity-10 group-hover:opacity-15 transition-opacity blur" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" 
                  alt="Towering crane rising into the sky" 
                  className="w-full object-cover max-h-[520px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>

      {/* 9. Serving Clients Across the USA Section */}
      <section className="py-20 bg-slate-950 text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <ScrollReveal variant="fadeDown" className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
              Serving Clients Across the USA
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1} className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              We provide professional <strong className="text-white font-bold">construction pricing and bidding services</strong> nationwide.
            </p>
          </ScrollReveal>

          {/* Dynamic Action Widgets */}
          <ScrollReveal variant="fadeUp" delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 max-w-3xl mx-auto">
            {/* Phone contact widget */}
            <a 
              href="tel:+15077781624"
              className="group relative flex flex-col items-center justify-center p-6 bg-slate-900 hover:bg-slate-900/90 border border-white/5 hover:border-yellow-500/30 rounded-xl transition-all duration-200 text-center overflow-hidden"
            >
              {/* Subtle top-right circle overlay */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors duration-300" />
              
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Phone Support</span>
              <span className="text-base sm:text-lg font-display font-bold text-white mt-1 group-hover:text-yellow-400 transition-colors">
                +1 (507) 778 1624
              </span>
            </a>

            {/* Location widget */}
            <div className="group relative flex flex-col items-center justify-center p-6 bg-slate-900 hover:bg-slate-900/90 border border-white/5 hover:border-yellow-500/30 rounded-xl transition-all duration-200 text-center overflow-hidden">
              {/* Subtle top-right circle overlay */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors duration-300" />
              
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">HQ Location</span>
              <span className="text-xs sm:text-sm font-sans font-medium text-slate-200 mt-1">
                15750 Fair Hill Way Apple Valley,<br />Minnesota 55124, USA
              </span>
            </div>
          </ScrollReveal>

          {/* Embedded Takeoff trigger button */}
          {onOpenEstimationTool && (
            <ScrollReveal variant="scaleUp" delay={0.3} className="pt-4">
              <button 
                onClick={onOpenEstimationTool}
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-display font-extrabold text-sm uppercase tracking-widest py-4 px-8 rounded shadow-lg shadow-yellow-500/15 transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>Calculate My Tender Bid Estimate Now</span>
              </button>
            </ScrollReveal>
          )}

        </div>
      </section>

      {/* 10. Infinite Scrolling Marquee ("last apr jo yellow div is par same like jis tarah home page par carsoul add keya hooya ha") */}
      <section className="relative w-full overflow-hidden bg-yellow-500 py-5 font-display font-black text-xs text-slate-950 uppercase tracking-widest border-y border-yellow-600 select-none">
        <div className="flex w-max animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          <div className="flex gap-12 px-6">
            <span>☀ Renovation & Remodeling</span>
            <span>✦ Commercial Projects</span>
            <span>☀ Interior & Exterior Design</span>
            <span>✦ Building Design</span>
            <span>☀ Construction</span>
            <span>✦ Estimating & Take-off</span>
            <span>☀ Electrical & Low-Volt</span>
            <span>✦ HVAC Ductwork</span>
            <span>☀ Mechanical & Plumbing</span>
          </div>
          {/* Duplicate list to guarantee perfect infinite seamless scrolling */}
          <div className="flex gap-12 px-6" aria-hidden="true">
            <span>☀ Renovation & Remodeling</span>
            <span>✦ Commercial Projects</span>
            <span>☀ Interior & Exterior Design</span>
            <span>✦ Building Design</span>
            <span>☀ Construction</span>
            <span>✦ Estimating & Take-off</span>
            <span>☀ Electrical & Low-Volt</span>
            <span>✦ HVAC Ductwork</span>
            <span>☀ Mechanical & Plumbing</span>
          </div>
        </div>
      </section>

    </div>
  );
}
