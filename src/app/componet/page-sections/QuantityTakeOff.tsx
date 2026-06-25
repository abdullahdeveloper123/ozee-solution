import React, { useState } from 'react';
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  FileSpreadsheet, 
  Layers, 
  CheckCircle2,
  Calculator,
  Compass,
  Cpu
} from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import OZLogoBadge from '../common/OZLogoBadge';

interface QuantityTakeOffProps {
  onNavigate: (route: string) => void;
  onOpenEstimationTool?: () => void;
}

export default function QuantityTakeOff({ onNavigate, onOpenEstimationTool }: QuantityTakeOffProps) {
  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is a construction quantity takeoff?",
      a: "It is the process of measuring and listing materials from construction drawings to determine the exact quantities required for a project. This serves as the foundation for accurate costing, bidding, and procurement."
    },
    {
      q: "Do you prepare BOQs for tender submissions?",
      a: "Yes, we provide comprehensive BOQ preparation services tailored to construction projects, creating structured, trade-wise breakdowns suitable for competitive tendering and straightforward procurement."
    },
    {
      q: "Can you provide takeoffs for MEP systems?",
      a: "Absolutely. Our expert quantity surveyors are highly specialized in structural, architectural, and MEP (Mechanical, Electrical, Plumbing) quantity takeoff services to ensure complete multi-discipline coverage."
    },
    {
      q: "Do you offer outsourcing support?",
      a: "Yes, we offer construction takeoff outsourcing for contractors, subcontractors, and developers who need additional estimating capacity without the overhead of in-house staff."
    },
    {
      q: "Are your takeoffs trade-specific?",
      a: "Yes. Every report we prepare is trade-specific and cataloged according to industry standards, supporting contractor bid requirements and accurate material procurement."
    },
    {
      q: "How do you ensure accuracy in your takeoffs?",
      a: "We combine advanced digital takeoff software (such as Bluebeam and PlanSwift) with rigorous manual verification by senior estimators. Every takeoff undergoes a strict review process before being delivered to the client."
    },
    {
      q: "Can your BOQs support cost control and procurement?",
      a: "Yes, our BOQs are detailed and structured, which helps minimize material waste, tracks actual quantities against design revisions, and acts as a baseline for purchasing."
    },
    {
      q: "Do you provide takeoffs for feasibility and early-stage planning?",
      a: "Yes, we help developers and owners with preliminary or conceptual takeoffs, providing early quantity estimates to support budgeting and feasibility studies."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800" id="quantity-takeoff-page">
      
      {/* 1. Hero Breadcrumb Section */}
      <section 
        className="relative py-24 md:py-32 bg-cover bg-center text-white"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.95)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80')" 
        }}
        id="qto-hero"
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 text-center space-y-4">
          <ScrollReveal variant="fadeUp" duration={0.8}>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-100 tracking-tight leading-tight">
              Quantity Take-Off (BOQs)
            </h1>
          </ScrollReveal>
          
          <ScrollReveal variant="fadeUp" duration={0.8} delay={0.15}>
            <p className="text-xs sm:text-sm font-mono tracking-wider text-yellow-500 uppercase">
              <span className="hover:text-yellow-400 cursor-pointer transition-colors" onClick={() => onNavigate('home')}>Home</span> / Quantity Take-Off (BOQs)
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-20 bg-white" id="qto-intro">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <ScrollReveal variant="fadeRight" className="lg:col-span-7 space-y-6">
              <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">QUANTITY TAKE-OFF (BOQS)</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Quantity Take-Off (BOQs)
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                At OZ Solution, our Quantity Take-Off (BOQs) service provides accurate measurement and listing of construction materials directly from project drawings. Before pricing, procurement, or bidding begins, reliable quantities are essential. We help contractors, developers, and consultants move forward with confidence by delivering clear and structured quantity data.
              </p>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-medium">
                Our quantity takeoff and construction quantity takeoff services form the foundation of accurate budgeting and fair contractor pricing structure.
              </p>

              <div className="pt-4">
                <button 
                  onClick={() => onNavigate('contact-us')}
                  className="group inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-sm py-3.5 px-6 rounded-md shadow-md transition-all active:scale-95 duration-200 cursor-pointer"
                >
                  <span>Contact Us Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </ScrollReveal>

            {/* Right Column Image */}
            <ScrollReveal variant="fadeLeft" delay={0.2} className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Yellow background geometric decoration */}
                <div className="absolute -inset-2 bg-yellow-500 rounded-2xl transform rotate-2 opacity-10"></div>
                
                <img 
                  src="https://ozestimatesolutions.com.au/wp-content/uploads/2024/11/faq-scaled.jpg" 
                  alt="Construction quantity estimator in suit" 
                  className="relative rounded-2xl shadow-xl border border-slate-100 max-w-full h-auto object-cover max-h-[480px]"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. Accurate Measurement Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100" id="qto-accurate">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Text Column */}
            <ScrollReveal variant="fadeRight" className="lg:col-span-6 space-y-5">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                Accurate Measurement from Construction Drawings
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We provide professional <strong className="text-slate-800">construction drawing takeoff services</strong> based on approved plans and specifications. Through careful material quantification from construction plans, we calculate precise volumes, counts, and areas required for project execution.
              </p>
            </ScrollReveal>

            {/* Right List Column */}
            <ScrollReveal variant="fadeLeft" delay={0.15} className="lg:col-span-6">
              <div className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-sm border-l-4 border-l-yellow-500 space-y-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold block">Our services include:</span>
                
                <ul className="space-y-4">
                  {[
                    "material takeoff services for all building components",
                    "Complete construction material quantity takeoff",
                    "Detailed building material takeoff",
                    "Structured construction materials listing services"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-sans text-slate-700 leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

          </div>

          <ScrollReveal variant="fadeUp" delay={0.3} className="text-center mt-12 pt-8 border-t border-slate-200/60">
            <p className="text-xs text-slate-400 font-mono tracking-wider italic">
              Each detailed quantity takeoff is prepared with clarity and technical verification to ensure takeoff validation from drawings before submission.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. BOQ Preparation Section */}
      <section className="py-20 bg-white" id="qto-boq">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Overlapping Images Grid */}
            <ScrollReveal variant="fadeRight" className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-4 items-center">
                
                {/* Image 1 */}
                <div className="col-span-8">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80" 
                    alt="Financial sheets spreadsheet calculator" 
                    className="rounded-2xl shadow-lg border border-slate-100 object-cover w-full h-[320px]"
                  />
                </div>

                {/* Overlapping Image 2 */}
                <div className="col-span-7 -mt-20 ml-auto z-10 border-4 border-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src="https://ozestimatesolutions.com.au/wp-content/uploads/2024/11/crop-man-with-blueprints-helmet-scaled.jpg" 
                    alt="Blueprints construction site plans" 
                    className="object-cover w-full h-[200px]"
                  />
                </div>

                {/* Experience Badge with Rotating Logo and Elements */}
                <div className="absolute left-32 bottom-12 sm:left-74   sm:bottom-14 bg-yellow-500 text-slate-950 rounded-full shadow-2xl flex flex-col items-center justify-center w-28 h-28 z-20 border-4 border-white select-none group" id="qto-experience-badge">
                  {/* Rotating Outer Dashed/Dotted Ring */}
                  <div 
                    className="absolute inset-1.5 border-2 border-dashed border-slate-950/20 rounded-full animate-spin"
                    style={{ animationDuration: '12s', animationTimingFunction: 'linear' }}
                  />
                  
                  {/* Rotating Logo Silhouette */}
                  <div 
                    className="absolute inset-3 flex items-center justify-center opacity-10 animate-spin"
                    style={{ animationDuration: '18s', animationTimingFunction: 'linear', animationDirection: 'reverse' }}
                  >
                    <OZLogoBadge className="w-full h-full text-slate-950" />
                  </div>

                  {/* Static Branding Content on top */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    {/* Rotating OZ Logo icon */}
                    <div
                      className="w-6 h-6 mb-0.5 flex items-center justify-center animate-spin"
                      style={{ animationDuration: '10s', animationTimingFunction: 'linear' }}
                    >
                      <OZLogoBadge className="w-full h-full text-slate-950" />
                    </div>
                    <span className="text-xl font-black font-display tracking-tight leading-none">15+</span>
                    <span className="text-[8px] uppercase font-mono font-extrabold tracking-widest text-center mt-0.5 leading-none">Years Exp</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>

            {/* Right Detailed Content */}
            <ScrollReveal variant="fadeLeft" delay={0.2} className="lg:col-span-6 space-y-6">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                Bill of Quantities (BOQ) Preparation
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We specialise in professional bill of quantities preparation aligned with project standards. Our construction BOQ preparation services provide organised, trade-wise breakdowns suitable for tendering and procurement.
              </p>

              <div className="space-y-4">
                <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-400">
                  As experienced construction BOQ consultants and a trusted construction BOQ preparation company, we deliver:
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    "BOQ services for construction projects require",
                    "construction tender BOQ preparation",
                    "Bill of quantities for tendering",
                    "Structured construction quantity breakdown",
                    "Clear construction quantity documentation"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-yellow-500 shrink-0 mt-1 bg-yellow-500/10 rounded p-0.5" />
                      <span className="text-xs font-semibold text-slate-700 leading-normal">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-slate-500 font-sans leading-relaxed pt-2 border-t border-slate-100">
                Our BOQs support cost control through accurate BOQs and help maintain transparency across project stakeholders.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 5. Trade-Specific Quantity Takeoffs Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100" id="qto-trade-specific">
        <div className="w-full px-4 sm:px-8 lg:px-12 space-y-12">
          
          <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">ACCURATE & DETAILED</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Trade-Specific Quantity Takeoffs
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Column 1 Card */}
            <ScrollReveal variant="fadeRight" className="bg-white border border-slate-200/60 rounded-2xl p-8 shadow-sm border-l-4 border-l-yellow-500 hover:shadow-md transition-shadow">
              <p className="text-sm font-mono uppercase text-slate-400 font-bold tracking-wider mb-4">Multi-Discipline</p>
              <h4 className="text-base font-bold text-slate-800 mb-5 leading-relaxed">
                We provide complete multi-discipline takeoffs, including:
              </h4>
              <ul className="space-y-3">
                {[
                  "architectural quantity takeoff",
                  "structural quantity takeoff",
                  "MEP quantity takeoff services"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-4.5 h-4.5 text-yellow-500 shrink-0 bg-yellow-50 rounded-full p-0.5" />
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Column 2 Card */}
            <ScrollReveal variant="fadeLeft" delay={0.15} className="bg-white border border-slate-200/60 rounded-2xl p-8 shadow-sm border-l-4 border-l-yellow-500 hover:shadow-md transition-shadow">
              <p className="text-sm font-mono uppercase text-slate-400 font-bold tracking-wider mb-4">Project-Type Adaptive</p>
              <h4 className="text-base font-bold text-slate-800 mb-5 leading-relaxed">
                Whether for commercial, residential, or industrial developments, we adapt our process to the project type. Our team handles:
              </h4>
              <ul className="space-y-3">
                {[
                  "commercial construction takeoff",
                  "residential construction takeoff",
                  "industrial construction quantity takeoff"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-4.5 h-4.5 text-yellow-500 shrink-0 bg-yellow-50 rounded-full p-0.5" />
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>

          <ScrollReveal variant="fadeUp" delay={0.2} className="text-center max-w-2xl mx-auto">
            <p className="text-xs text-slate-400 font-mono tracking-wider italic leading-relaxed">
              Each report is structured to support contractor bid support quantities and efficient procurement planning support.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* 6. Dark Banner Section */}
      <section className="py-20 bg-[#1a2631] text-white relative overflow-hidden" id="qto-banner-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-[#1a2631] to-[#1a2631] opacity-60"></div>
        
        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <ScrollReveal variant="fadeUp" className="space-y-4">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-100 tracking-tight leading-tight">
              Supporting Contractors, Developers, and Subcontractors
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Our construction takeoff for contractors and construction takeoff for subcontractors services are designed to improve bidding accuracy. We also provide construction takeoff for developers who require early quantity data for feasibility and budgeting.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.15} className="space-y-4">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              For tender submissions, we prepare construction takeoff for bidding and construction bid quantity takeoff documentation with transparent quantity reporting.
            </p>
            <p className="text-sm sm:text-base font-semibold text-yellow-400 font-sans">
              As a reliable construction takeoff company, we offer full professional quantity surveying services across project stages.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Digital Takeoff and Verification */}
      <section className="py-20 bg-white" id="qto-digital">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <ScrollReveal variant="fadeRight" className="lg:col-span-6 space-y-6">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                Digital Takeoff and Verification
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Using advanced tools, we deliver digital quantity takeoff services and structured construction quantity extraction services to ensure speed and accuracy.
              </p>
            </ScrollReveal>

            {/* Right Workflow Card */}
            <ScrollReveal variant="fadeLeft" delay={0.2} className="lg:col-span-6">
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-sm border-l-4 border-l-yellow-500 space-y-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold block">Our workflow includes:</span>
                
                <ul className="space-y-4">
                  {[
                    "construction quantity verification",
                    "Transparent construction quantity takeoff report preparation",
                    "Pre-construction quantity takeoff validation",
                    "Construction measurement and BOQ services"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-sans text-slate-700 leading-relaxed font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

          </div>

          <ScrollReveal variant="fadeUp" delay={0.3} className="text-center mt-12 pt-8 border-t border-slate-100 max-w-3xl mx-auto">
            <p className="text-xs text-slate-400 font-mono tracking-wider italic leading-relaxed">
              By focusing on accurate construction quantity takeoff, we help minimise material waste through accuracy and strengthen construction cost control takeoff processes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Outsourcing and Cost Control Section */}
      <section 
        className="relative py-24 md:py-32 bg-cover bg-center text-white"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.95)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80')" 
        }}
        id="qto-outsourcing"
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <ScrollReveal variant="fadeUp" className="space-y-4">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-100 tracking-tight leading-tight">
              Outsourcing and Cost Control Support
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              We also provide construction takeoff outsourcing for firms that need additional estimating capacity. Through integrated takeoff and estimating services, we assist in construction takeoff and cost control planning.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2} className="pt-2">
            <p className="text-sm sm:text-base font-semibold text-yellow-400 leading-relaxed">
              Our experienced construction quantity takeoff consultants and construction takeoff experts ensure every estimate supports a fair and competitive bidding process.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Frequently Asked Questions (FAQ) */}
      <section className="py-20 bg-white" id="qto-faq">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left FAQ Accordion List */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal variant="fadeRight" className="space-y-4 mb-8">
                <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">HAVE QUESTIONS?</span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Frequently Asked Questions
                </h3>
              </ScrollReveal>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <ScrollReveal 
                      key={index} 
                      variant="fadeUp" 
                      delay={index * 0.05}
                      className="border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left py-4 px-5 bg-slate-50/50 hover:bg-slate-50 flex items-center justify-between gap-4 font-sans focus:outline-none transition-colors"
                      >
                        <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                          {index + 1}. {faq.q}
                        </span>
                        <div className="text-slate-400 bg-white p-1 rounded border border-slate-200">
                          {isOpen ? <ChevronUp className="w-4 h-4 text-yellow-600" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>
                      
                      {/* Animated height for answer box */}
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-slate-100 bg-white' : 'max-h-0'}`}>
                        <div className="p-5 text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>

            {/* Right Striking Image */}
            <ScrollReveal variant="fadeLeft" delay={0.2} className="lg:col-span-5 flex items-stretch">
              <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2631]/85 via-transparent to-transparent z-10"></div>
                
                <img 
                  src="https://ozestimatesolutions.com.au/wp-content/uploads/2024/11/faq-2-scaled.jpg" 
                  alt="Construction cranes at dusk" 
                  className="w-full h-full object-cover relative"
                />

                <div className="absolute bottom-6 left-6 right-6 z-20 text-white space-y-2">
                  <h4 className="font-display font-bold text-lg text-yellow-400">Guaranteed Precision</h4>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Over 6+ years of expertise delivering construction estimating and cost control takeoffs for high-profile developments.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 10. Serving Across the United States Section */}
      <section className="py-16 bg-[#0c1219] text-white relative" id="qto-serving">
        <div className="w-full px-4 sm:px-8 lg:px-12 text-center space-y-12">
          
          <ScrollReveal variant="fadeUp" className="space-y-4 max-w-2xl mx-auto">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-100 tracking-tight leading-tight">
              Serving Across the United States
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              OZ Solution delivers dependable <strong className="text-yellow-400">quantity surveying services</strong> for commercial, residential, and industrial projects nationwide.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            
            {/* Phone Block */}
            <ScrollReveal variant="fadeRight" className="bg-[#141b23] border border-white/5 rounded-xl p-6 flex items-center gap-5 hover:bg-[#18212b] transition-all">
              <div className="bg-yellow-500 text-slate-950 p-3 rounded-lg shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1 font-sans">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block">Direct Phone</span>
                <span className="text-sm font-bold text-slate-100 block"> +1 (508) 888 1927</span>
              </div>
            </ScrollReveal>

            {/* Location Block */}
            <ScrollReveal variant="fadeLeft" className="bg-[#141b23] border border-white/5 rounded-xl p-6 flex items-center gap-5 hover:bg-[#18212b] transition-all">
              <div className="bg-yellow-500 text-slate-950 p-3 rounded-lg shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 font-sans">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block">Corporate Location</span>
                <span className="text-sm font-bold text-slate-100 block">15750 Fair Hill Way Apple Valley, Minnesota 55124, USA</span>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 11. Sliding Ticker Bar Accent (Infinite Scrolling Marquee) */}
      <ScrollReveal variant="fadeUp" duration={0.8} id="qto-marquee-accent-reveal">
        <section className="bg-yellow-500 py-4 overflow-hidden border-y border-slate-950" id="qto-marquee-accent">
          <div className="whitespace-nowrap flex select-none overflow-hidden text-slate-950 font-display font-black text-xs uppercase tracking-widest gap-8">
            <div className="flex shrink-0 justify-around min-w-full gap-8 animate-[marquee_25s_linear_infinite]">
              <span>★ RENOVATION & REMODELING</span>
              <span>★ COMMERCIAL PROJECTS</span>
              <span>★ INTERIOR & EXTERIOR DESIGN</span>
              <span>★ BUILDING DESIGN</span>
              <span>★ CONSTRUCTION & BIM COST ENGINEERING</span>
            </div>
            <div className="flex shrink-0 justify-around min-w-full gap-8 animate-[marquee_25s_linear_infinite]" aria-hidden="true">
              <span>★ RENOVATION & REMODELING</span>
              <span>★ COMMERCIAL PROJECTS</span>
              <span>★ INTERIOR & EXTERIOR DESIGN</span>
              <span>★ BUILDING DESIGN</span>
              <span>★ CONSTRUCTION & BIM COST ENGINEERING</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
