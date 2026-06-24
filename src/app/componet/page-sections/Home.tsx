import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, ChevronRight, CheckCircle2, ArrowRight, ShieldCheck, 
  Users, Building2, HardHat, FileText, Settings, Sparkles, 
  ChevronDown, Phone, Mail, MapPin, Send, HelpCircle, Star, Quote,
  Layers, Hammer, Compass, DollarSign, Activity, Clock, Shield, Award
} from 'lucide-react';
import { PageRoute } from '@/types';
import ScrollReveal from '../common/ScrollReveal';

interface HomeProps {
  onNavigate: (route: PageRoute) => void;
  onOpenEstimationTool: () => void;
}

export default function Home({ onNavigate, onOpenEstimationTool }: HomeProps) {
  // Ref for horizontal reviews scroll container
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Auto scroll horizontal reviews carousel
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // If we are close to the end, scroll back to 0, otherwise scroll by 340px
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollTo({ left: scrollLeft + 340, behavior: 'smooth' });
        }
      }
    }, 4000); // auto-move every 4 seconds

    return () => clearInterval(timer);
  }, []);

  // Testimonial index
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  // Accordion active index
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Interactive mini calculator states for structural takeoff
  const [calcType, setCalcType] = useState('residential');
  const [calcSqFt, setCalcSqFt] = useState(2500);
  const [calcComplexity, setCalcComplexity] = useState('medium');
  const [estResult, setEstResult] = useState<number | null>(null);

  // Form states
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    receiveSms: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Auto calculation on slider / input change
  useEffect(() => {
    let basePricePerSqFt = 0.18; // base estimation fee cents/sqft
    if (calcType === 'commercial') basePricePerSqFt = 0.25;
    if (calcType === 'industrial') basePricePerSqFt = 0.32;
    if (calcType === 'infrastructure') basePricePerSqFt = 0.45;

    let multiplier = 1.0;
    if (calcComplexity === 'low') multiplier = 0.8;
    if (calcComplexity === 'high') multiplier = 1.4;

    const rawCost = calcSqFt * basePricePerSqFt * multiplier;
    setEstResult(Math.round(rawCost));
  }, [calcType, calcSqFt, calcComplexity]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        receiveSms: false
      });
    }, 4000);
  };

  const testimonials = [
    {
      quote: "Their feasibility study gave us the confidence to move forward with the $45M high-rise mixed-use development in Chicago. OZ Solution's takeoff accuracy was down to a 1.2% variance.",
      name: "Marcus Vance",
      role: "VP of Preconstruction",
      company: "Vance Development Group",
      rating: 5
    },
    {
      quote: "As MEP contractors, precision is everything. OZ Solution delivered flawless mechanical & electrical cost takeoffs under an incredibly aggressive deadline. Outstanding service!",
      name: "Sarah Lin",
      role: "Principal Engineer",
      company: "Lin Mechanical Systems",
      rating: 5
    },
    {
      quote: "The 5D BIM model integrated seamlessly into our Revit workflows. It allowed us to monitor cost deviations live during the structural excavation phase. Will absolutely hire them again.",
      name: "David Sterling",
      role: "Construction Manager",
      company: "Sterling Builders & Co",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "Q1: Do you provide nationwide construction estimation services?",
      a: "Yes. In the US, we assist developers, contractors, and A/E companies across all 50 states with hyper-localized labor and material index pricing based on regional postal codes."
    },
    {
      q: "Q2: Are you able to work together with our present design or BIM team?",
      a: "Absolutely. We seamlessly collaborate using industry-standard platforms (Autodesk Revit, Trimble, Bluebeam Revu). We plug into your native design systems to feed precise takeoff metadata directly into the preconstruction planning phase."
    },
    {
      q: "Q3: How do you ensure cost accuracy?",
      a: "We maintain a robust domestic database of updated materials and union/non-union labor rates. Our senior estimators perform multi-stage verification procedures (Double Quantity takeoffs) matching IBC and localized code compliance schemas."
    },
    {
      q: "Q4: Do you offer lifecycle costing and viability?",
      a: "Yes. From conceptual phases (Class 5 budgets) to full-scale operations, we build granular CapEx and OpEx cash-flow projection charts tailored to client holding horizons."
    },
    {
      q: "Q5: Do you provide estimates for projects at different design stages?",
      a: "Yes. We operate across all AIA design thresholds: from raw Conceptual drawings (SD), Design Development sets (DD), through 100% Construction Documents (CD) detailed bid takeoffs."
    },
    {
      q: "Q6: What types of construction projects do you estimate?",
      a: "We cover residential (single & multi-family), high-rise commercial office towers, warehouse logistics hubs, heavy industrial chemical plants, and civil infrastructure projects."
    }
  ];

  const services = [
    {
      id: "qty",
      title: "Quantity Take-Off & BOQs",
      short: "We organize accurate and meticulous Quantity Take-Off Services using advanced blueprint auditing.",
      desc: "Every material element of the physical structures—from rebar tonnage to drywall yardages—is itemized in customizable spreadsheets aligned precisely to CSI standard divisions.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=650&q=80",
      tag: "Precise Takeoff"
    },
    {
      id: "conceptual",
      title: "Detailed & Conceptual Cost Estimation",
      short: "From initial napkin sketches to complete development schematics, we map clear financial parameters.",
      desc: "We analyze historical unit indicators and local index rates to deliver reliable early-phase budgets (Class 5 to Class 1 estimates) to help developers validate project viability prior to design commitment.",
      image: "/assets/Detailed & Conceptual Cost Estimation.png",
      tag: "Budgets & Auditing"
    },
    {
      id: "mep",
      title: "MEP & HVAC Cost Estimation",
      short: "Dedicated calculations for complex mechanical, electrical, plumbing, and fire safety systems.",
      desc: "Our specialized MEP division reviews heavy industrial layouts, conduits, electrical switchgear, ductwork, and specialized piping systems using updated market indexes.",
      image: "/assets/MEP & HVAC Cost Estimation.png",
      tag: "System Audits"
    },
    {
      id: "bim3d",
      title: "BIM 3D Cost Modeling",
      short: "Automated, live quantity metrics mapped visually into the 3D BIM design environments.",
      desc: "We integrate comprehensive pricing data directly with native Revit models, enabling instant structural feedback when layout choices are modified.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=650&q=80",
      tag: "Revit Integration"
    },
    {
      id: "tenderbid",
      title: "Tender & Bid Estimates",
      short: "We build competitive, and financially sound bids with complete clarity for contractors.",
      desc: "Comprehensive bid support including detailed tender preparation, cost breakdowns, margin planning, risk assessment, and full proposal documentation support.",
      image: "/assets/Tender & Bid Estimates.jpeg",
      tag: "Strategic Bidding"
    },
    {
      id: "maint",
      title: "Cleaning & Maintenance Cost Estimates",
      short: "Granular forecasts projecting ongoing operations, scheduled replacement, and facility management overheads.",
      desc: "We project precise life-cycle costs for physical envelopes, helping property managers prepare exact annual maintenance reserves.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=650&q=80",
      tag: "OpEx Planning"
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800" id="home-page-container">
      
      {/* 1. Hero Section - Pic 1 Styled Design */}
      <section className="relative bg-[#0f172a] text-white overflow-hidden pt-24 pb-24 md:py-32" id="hero-section">
        {/* Background Image Overlay with low opacity for grid look */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-slate-950 mix-blend-multiply" />
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80" 
            alt="Construction background rebar" 
            className="w-full h-full object-cover object-center filter saturate-50 brightness-75 scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Blueprint-style grid accents */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <ScrollReveal variant="fadeRight" duration={0.8} className="lg:col-span-7 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-yellow-500 text-xs sm:text-sm font-medium tracking-wide">
                <Star className="w-4 h-4 shrink-0 fill-yellow-500 text-yellow-500" />
                <span>Trusted by 500+ Contractors</span>
              </div>
              
              {/* Massive Landing Title */}
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-none">
                Precision Estimating <br />
                <span className="text-yellow-500 block">Construction</span>
                <span className="text-yellow-500 block">Excellence</span>
              </h1>
              
              {/* Sub description */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl font-sans font-normal">
                Professional construction estimating services that deliver accurate bids, maximize profits, and win more projects nationwide.
              </p>

              {/* Get Free Quote CTA Button */}
              <div className="pt-2">
                <button 
                  onClick={onOpenEstimationTool}
                  className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 active:scale-95 text-slate-950 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-yellow-500/10 transition-all cursor-pointer text-base"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </ScrollReveal>

            {/* Right Card Grid Column */}
            <ScrollReveal variant="fadeLeft" duration={0.8} delay={0.2} className="lg:col-span-5 space-y-4">
              
              {/* Why Choose Us Card */}
              <div className="backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                <h3 className="text-lg sm:text-xl font-bold text-white text-center font-display tracking-tight">Why Choose Us?</h3>
                <p className="text-slate-400 text-xs sm:text-sm text-center mt-1">Industry-leading performance</p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {/* Metric Column A */}
                  <div className="text-center">
                    <div className="bg-amber-500 text-slate-950 p-3 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-amber-500/10">
                      <Calculator className="w-6 h-6" />
                    </div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">1000+</div>
                    <div className="text-xs text-slate-400 mt-1 font-sans">Satisfies Clients</div>
                  </div>
                  
                  {/* Metric Column B */}
                  <div className="text-center">
                    <div className="bg-blue-600 text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-600/10">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">2 - 3 Days</div>
                    <div className="text-xs text-slate-400 mt-1 font-sans">Turnaround</div>
                  </div>
                </div>
              </div>

              {/* Side-by-Side Smaller Cards */}
              <div className="grid grid-cols-2 gap-4">
                {/* Accuracy Card */}
                <div className="backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-2xl p-5 shadow-2xl text-center">
                  <div className="bg-amber-500 text-slate-950 p-2.5 rounded-xl w-11 h-11 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-amber-500/10">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="font-display font-extrabold text-2xl text-white tracking-tight">99%</div>
                  <div className="text-xs text-slate-400 mt-1 font-sans">Accuracy Rate</div>
                </div>

                {/* Years Experience Card */}
                <div className="backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-2xl p-5 shadow-2xl text-center">
                  <div className="bg-blue-600 text-white p-2.5 rounded-xl w-11 h-11 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-600/10">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="font-display font-extrabold text-2xl text-white tracking-tight">15+</div>
                  <div className="text-xs text-slate-400 mt-1 font-sans">Years</div>
                </div>
              </div>

              {/* Responsive Testimonial Card */}
              <div className="backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-1 justify-start">
                  {[1, 2, 3, 4, 5].map((starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-200 text-xs sm:text-sm italic leading-relaxed mt-3 font-sans font-normal">
                  &ldquo;Their estimates are incredibly detailed and accurate. We&apos;ve won 40% more bids since partnering with them.&rdquo;
                </p>
                <p className="text-slate-400 text-[10px] sm:text-xs mt-3.5 font-mono">
                  Michael Rodriguez - Rodriguez Construction
                </p>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 2. Floating High-Profile Design Cards - Pic 1 Style */}
      <section className="relative z-20 -mt-16 sm:-mt-20 md:-mt-24 pb-12" id="highlights-section">
        <ScrollReveal variant="fadeUp" duration={0.8} className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* Card 1: CostBuild Planning with integrated image */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xl flex flex-col sm:flex-row gap-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 lg:h-[310px] group">
              <div className="flex flex-col justify-between flex-1 space-y-3 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/60 rounded-lg px-2.5 py-1 text-slate-600 text-[11px] font-semibold tracking-wide font-sans mb-2">
                    Upload Plans & Get Estimate
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl tracking-tight leading-snug">
                    CostBuild: Planning the future of construction
                  </h3>
                </div>
                
                <button 
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2.5 text-slate-900 hover:text-amber-600 font-extrabold transition-colors group cursor-pointer text-xs mt-auto self-start"
                >
                  <span>Explore Services</span>
                  <span className="bg-yellow-500 text-slate-950 rounded-full p-1.5 group-hover:scale-110 transition-transform flex items-center justify-center shadow-md">
                    <svg className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="w-full sm:w-[160px] md:w-[180px] lg:w-[150px] shrink-0 h-44 sm:h-full relative rounded-xl overflow-hidden shadow-inner diagonal-gloss-container">
                <div className="gloss-tl" />
                <div className="gloss-br" />
                <img 
                  src="https://ozestimatesolutions.com.au/wp-content/uploads/2024/11/confident-architect-reading-architecture-plan-building-standing-work-place-near-table-scaled-e1782304384555.jpg" 
                  alt="Construction sunset scaffold" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Card 2: Full Crane sunset image with diagonal gloss hover */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[220px] lg:h-[310px] group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 diagonal-gloss-container">
              <div className="gloss-tl" />
              <div className="gloss-br" />
              <img 
                src="https://ozestimatesolutions.com.au/wp-content/uploads/2024/11/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept-scaled.jpg" 
                alt="Construction crane sunset" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Subtle top light bar indicator matching Card 1 */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-60 z-10" />
            </div>

            {/* Card 3: Deep Dark "Happy Clients" card with individual avatar glosses */}
            <div className="bg-[#0b0c0e] rounded-2xl p-6 shadow-xl border border-slate-900 text-white flex flex-col justify-between min-h-[220px] lg:h-[310px] relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              {/* Subtle design watermark of concentric circles */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 opacity-10 text-white pointer-events-none group-hover:scale-110 transition-transform duration-700 z-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="50" cy="50" r="40" />
                  <circle cx="50" cy="50" r="30" />
                  <circle cx="50" cy="50" r="20" />
                </svg>
              </div>

              {/* Top Row: Custom Venn-diagram geometric icon + Overlapping customer avatars */}
              <div className="flex justify-between items-start relative z-10">
                {/* Yellow geometric icon */}
                <div className="bg-yellow-500 text-slate-950 p-2.5 rounded-xl w-11 h-11 flex items-center justify-center shrink-0 shadow-lg shadow-yellow-500/20">
                  <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="4.5" />
                    <circle cx="8" cy="15" r="4.5" />
                    <circle cx="16" cy="15" r="4.5" />
                  </svg>
                </div>

                {/* Overlapping customer avatars with individual gloss effect */}
                <div className="flex -space-x-3 overflow-hidden">
                  {[
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80'
                  ].map((src, i) => (
                    <div key={i} className="relative h-9 w-9 rounded-full overflow-hidden ring-2 ring-[#0b0c0e] diagonal-gloss-container shrink-0 group/avatar">
                      <div className="gloss-tl" />
                      <div className="gloss-br" />
                      <img 
                        className="absolute inset-0 w-full h-full object-cover group-hover/avatar:scale-110 transition-transform duration-300" 
                        src={src} 
                        alt="Client" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom text: Title + High number metric */}
              <div className="mt-6 relative z-10">
                <p className="text-slate-400 text-xs font-semibold tracking-wide">Happy Clients</p>
                <h4 className="text-3xl sm:text-4xl font-black text-white font-display mt-1 tracking-tight">15K+</h4>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 3. "Why OZ Solution is Your Partner" Section */}
      <section className="py-20 bg-white" id="why-us-section">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <ScrollReveal variant="fadeRight" className="lg:col-span-5 relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden group diagonal-gloss-container shadow-md">
                  <div className="gloss-tl" />
                  <div className="gloss-br" />
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80" 
                    alt="Construction engineer" 
                    className="object-cover h-52 w-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden group diagonal-gloss-container shadow-md">
                  <div className="gloss-tl" />
                  <div className="gloss-br" />
                  <img 
                    src="https://ozestimatesolutions.com.au/wp-content/uploads/2024/11/building-construction-worker-site-with-architect-scaled.jpg" 
                    alt="Scaffolding layout" 
                    className="object-cover h-64 w-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="relative rounded-xl overflow-hidden group diagonal-gloss-container shadow-md">
                  <div className="gloss-tl" />
                  <div className="gloss-br" />
                  <img 
                    src="https://ozestimatesolutions.com.au/wp-content/uploads/2024/11/man-making-measurements-building-scaled.jpg" 
                    alt="Blueprint design blueprints" 
                    className="object-cover h-64 w-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-[#24323f]/90 text-white p-5 rounded-xl flex flex-col justify-center h-52 shadow-md">
                  <span className="font-mono text-yellow-400 font-bold text-4xl">100%</span>
                  <span className="text-xs uppercase tracking-widest text-slate-300 font-bold mt-2">USA Code Aligned</span>
                  <p className="text-[10px] text-slate-400 mt-2">Certified across all divisions in high-dense municipal zones.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Content Column */}
            <ScrollReveal variant="fadeLeft" delay={0.2} className="lg:col-span-7 space-y-6">
              <div className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">ABOUT US</div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Why OZ Solution is Your Trusted Construction Cost Partner
              </h2>
              
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                As a leading Construction Estimating Company, OZ Solution provides trade-specific estimating backed by real-time data and industry expertise. Our team delivers Detailed Cost Estimates with BIM-integrated workflows and accurate quantity take-offs.
              </p>

              <div className="space-y-5 pt-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2e3f4f] text-yellow-400 p-2.5 rounded-lg mt-1 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-slate-900 text-base">Cost-Risk Analysis Models</h4>
                    <p className="text-xs text-slate-500 mt-1 font-sans">
                      We focus on strong Project Cost Control using market-based material and labor pricing. Our approach reduces uncertainty through proactive Cost Risk Assessment and cost forecasting models.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#2e3f4f] text-yellow-400 p-2.5 rounded-lg mt-1 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-slate-900 text-base">Regulatory & USA Standards Expertise</h4>
                    <p className="text-xs text-slate-500 mt-1 font-sans">
                      With a deep understanding of USA standards (IBC, ASCE, NFPA, NEC), we ensure every estimate is practical, compliant, and execution-ready.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => onNavigate('about-us')}
                  className="inline-flex items-center gap-2 text-yellow-600 font-bold text-sm tracking-wide hover:text-yellow-700 transition-colors font-sans cursor-pointer"
                >
                  <span>Learn more about our preconstruction history</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. Comprehensive Services Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200" id="services-section">
        <ScrollReveal variant="fadeUp" duration={0.8} className="w-full px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">OUR SERVICES</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Comprehensive Construction Estimation & BIM Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
              Our professional engineering unit works directly from blueprints to deliver clean databases containing structured metrics for structural, HVAC, architectural, and civil takeoffs.
            </p>
          </div>

          {/* Grid of services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div 
                key={svc.id} 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                id={`service-card-${svc.id}`}
              >
                {/* Image panel */}
                <div className="relative h-48 w-full bg-slate-200 overflow-hidden group diagonal-gloss-container">
                  <div className="gloss-tl" />
                  <div className="gloss-br" />
                  <div className="absolute top-3 left-3 bg-slate-950/80 text-yellow-400 text-[10px] font-mono px-2.5 py-1 rounded-full uppercase font-bold tracking-widest z-10">
                    {svc.tag}
                  </div>
                  <img 
                    src={svc.image} 
                    alt={svc.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info block */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-slate-900 text-lg group-hover:text-yellow-600 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      {svc.short}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center">
                    <button 
                      onClick={() => onNavigate('contact-us')}
                      className="text-xs font-mono font-bold text-yellow-600 hover:text-yellow-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Quote Estimator</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={() => {
                        if (svc.id === 'qty') onNavigate('quantity-takeoff');
                        else if (svc.id === 'conceptual') onNavigate('detailed-estimation');
                        else if (svc.id === 'mep') onNavigate('mep-hvac-estimation');
                        else if (svc.id === 'bim3d') onNavigate('bim-3d-modeling');
                        else if (svc.id === 'tenderbid') onNavigate('tender-bid-estimates');
                        else onNavigate('services');
                      }}
                      className="text-xs font-sans text-slate-400 hover:text-slate-600 font-medium cursor-pointer"
                    >
                      Technical specs
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sub banner from Pic 1 */}
          <div className="bg-[#1e293b] text-white rounded-xl p-8 mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-l-8 border-yellow-500 shadow-lg">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Free Consultation Offer</span>
              <p className="text-sm sm:text-base font-medium text-slate-100">
                Let's build smarter budgets together. Reduce estimating risk and win more bids.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('contact-us')}
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-md shadow-md transition-colors whitespace-nowrap cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>

        </ScrollReveal>
      </section>

      {/* 5. Sectors Supported Across the USA */}
      <section className="py-20 bg-[#141b25] text-white overflow-hidden" id="sectors-section">
        <ScrollReveal variant="fadeUp" duration={0.8} className="w-full px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest font-bold">CLIENT BASE</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Supporting Contractors, Developers & Engineering Firms Across the USA
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'General Contractors',
                desc: 'Accurate estimates and BOQs for strong construction bid support and better procurement planning.'
              },
              {
                title: 'MEP Contractors',
                desc: 'Trade-specific estimating for HVAC, electrical, plumbing, and fire safety systems with precise takeoffs.'
              },
              {
                title: 'Real Estate Developers',
                desc: 'Feasibility cost studies and ROI cost modeling analysis for smarter investment decisions.'
              },
              {
                title: 'A/E Firms (Architects & Engineers)',
                desc: 'Design-stage cost planning with 5D BIM integration and engineering cost support.'
              },
              {
                title: 'Construction Management Firms',
                desc: 'Improved budgeting through cost tracking, forecasting, and design-build cost support.'
              },
              {
                title: 'Facility Managers',
                desc: 'Lifecycle cost analysis and OpEx forecasting for long-term facility management cost planning.'
              }
            ].map((sector, idx) => (
              <div 
                key={sector.title}
                className="bg-[#1e2530] border border-slate-700/60 p-6 rounded-xl relative hover:border-yellow-500/50 transition-colors"
              >
                {/* Decorative background grid visual representing engineering layout */}
                <div className="absolute right-3 top-3 text-slate-700/40 font-mono text-3xl select-none font-bold">
                  0{idx+1}
                </div>
                <h3 className="font-display font-semibold text-slate-100 text-lg mb-3">
                  {sector.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <span className="text-slate-400 text-xs font-sans">
              Let's make something great work together.{' '}
              <button 
                onClick={() => onNavigate('contact-us')}
                className="text-yellow-400 hover:text-yellow-300 font-bold underline transition-colors cursor-pointer"
              >
                Get Free Quote
              </button>
            </span>
          </div>

        </ScrollReveal>
      </section>

      {/* 6. Project Types segment */}
      <section className="py-20 bg-white" id="project-types-section">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Content Column */}
            <ScrollReveal variant="fadeRight" className="lg:col-span-6 space-y-6">
              <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">OUR PORTFOLIO</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Project Types
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                We deliver accurate estimating for high-rise, industrial, residential, mixed-use, renovation, and fit-out projects.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-semibold">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/60">
                  <span className="text-yellow-600 font-mono block text-xl">01</span>
                  <span className="text-slate-800">High-Rise Commercial</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/60">
                  <span className="text-yellow-600 font-mono block text-xl">02</span>
                  <span className="text-slate-800">Heavy Industrial</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/60">
                  <span className="text-yellow-600 font-mono block text-xl">03</span>
                  <span className="text-slate-800">Premium Residential</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/60">
                  <span className="text-yellow-600 font-mono block text-xl">04</span>
                  <span className="text-slate-800">Fit-out & Renovation</span>
                </div>
              </div>

              <div className="p-5 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                <p className="text-xs text-slate-700 italic font-sans">
                  "Our expertise includes high-rise project estimating, industrial construction cost planning, and residential renovation cost estimates, ensuring every project is aligned with real construction market pricing analysis."
                </p>
              </div>

              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                From concept to cost clarity: <span className="text-[#2e3f4f] font-bold">Where Precision Meets Construction Confidence.</span>
              </p>
            </ScrollReveal>

            {/* Graphic Column */}
            <ScrollReveal variant="fadeLeft" delay={0.2} className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden group shadow-xl diagonal-gloss-container">
                <div className="gloss-tl" />
                <div className="gloss-br" />
                <img 
                  src="/assets/Project Types.jpeg" 
                  alt="USA Construction workers with blueprints" 
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8 text-white">
                  <div className="space-y-2">
                    <span className="bg-[#2e3f4f] font-mono text-yellow-400 text-[10px] uppercase font-bold py-1 px-3 rounded-full">Active Site Audit</span>
                    <h3 className="font-display font-bold text-xl">Professional USA Field Verification</h3>
                    <p className="text-xs text-slate-300">Evaluating concrete pouring volumes and dimensional tolerances in New York City.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 7. Request a Free Construction Estimate Today (The Form / Expertise section) */}
      <section className="py-20 bg-slate-50 border-t border-b border-white" id="contact-section">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Info Side Column */}
            <ScrollReveal variant="fadeRight" className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">YOUR REQUEST. OUR EXPERTISE.</span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                  Request a Free Construction Estimate Today
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                  Have an upcoming project but need clear numbers fast? Submitting your preliminary blueprints takes less than 2 minutes. OZ Solution's engineering team reviews all designs within 24 hours.
                </p>
              </div>

              {/* Big metric statistics board matching pic 1 design */}
              <div className="bg-yellow-500 text-slate-950 p-8 rounded-xl shadow-lg space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-display font-black text-5xl leading-none">80+</span>
                  <span className="font-mono text-xs font-bold leading-tight uppercase tracking-wider">Dedicated Professional Estimators</span>
                </div>
                <p className="text-xs font-sans text-slate-900 mb-4 opacity-90 leading-relaxed">
                  Experienced estimators, materials engineers, and BIM coordinators with years of preconstruction service.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono font-bold uppercase tracking-wider pt-2 border-t border-slate-950/20">
                  <div>✓ Visualizations</div>
                  <div>✓ Custom Cost Modeling</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-sans text-slate-500">
                <Users className="w-5 h-5 text-yellow-500" />
                <span>⭐ Outstanding 4.9/5 satisfaction score based on 4,200 audits.</span>
              </div>
            </ScrollReveal>

            {/* Interactive Request Form Column */}
            <ScrollReveal variant="fadeLeft" delay={0.2} className="lg:col-span-7 bg-white border border-slate-250 p-8 rounded-2xl shadow-xl">
              <h3 className="font-display font-bold text-slate-900 text-xl mb-6">
                Get an Estimate
              </h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 font-sans mb-1.5">First Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={contactForm.firstName}
                      onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                      placeholder="e.g. John"
                      className="w-full bg-slate-50 border border-slate-300 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-yellow-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 font-sans mb-1.5">Last Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={contactForm.lastName}
                      onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                      placeholder="e.g. Miller"
                      className="w-full bg-slate-50 border border-slate-300 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-yellow-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 font-sans mb-1.5">Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="e.g. +1 (507) 778-1624"
                      className="w-full bg-slate-50 border border-slate-300 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-yellow-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 font-sans mb-1.5">Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="e.g. info@ozsolution.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-yellow-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 font-sans mb-1.5">Message / Project Description *</label>
                  <textarea 
                    rows={4} 
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Provide details about structural dimensions, targeted location, layout and required deliverables (BIM, CSI BOQs, MEP takeoffs)"
                    className="w-full bg-slate-50 border border-slate-300 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-yellow-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <input 
                    type="checkbox" 
                    id="receive-sms-checkbox"
                    checked={contactForm.receiveSms}
                    onChange={(e) => setContactForm({ ...contactForm, receiveSms: e.target.checked })}
                    className="mt-1.5 h-4 w-4 text-yellow-500 accent-yellow-500 rounded border-slate-300 focus:ring-yellow-400"
                  />
                  <label htmlFor="receive-sms-checkbox" className="text-[11px] text-slate-500 leading-relaxed font-sans cursor-pointer select-none">
                    Sign up to receive OZ Solution SMS alerts & exclusive project metrics. Message and data rates may apply. Reply STOP to cancel at any time. View our <button type="button" onClick={() => onNavigate('privacy-policy')} className="underline text-yellow-600 font-semibold hover:text-yellow-700 cursor-pointer">Privacy Policy</button>.
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold py-4 rounded-md transition-all active:scale-98 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Request</span>
                </button>

                {formSubmitted && (
                  <div className="p-4 bg-emerald-50 border border-emerald-250 text-emerald-800 text-xs rounded-lg animate-fadeIn text-center">
                    ✓ Your inquiry has been submitted successfully! One of our senior civil estimators will contact you shortly.
                  </div>
                )}
              </form>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 8. Pricing Structure Section */}
      <section className="py-20 bg-[#141b25] text-white" id="pricing-section">
        <ScrollReveal variant="fadeUp" duration={0.8} className="w-full px-4 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest font-bold">OUR PRICING STRUCTURE</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Flexible Estimating Solutions Tailored to Project Size
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* conceptual Estimate */}
            <div className="bg-[#1e2530] border border-slate-700/60 rounded-xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-[#2a3442] text-yellow-400 font-mono text-[10px] uppercase font-bold py-1 px-3 rounded-full inline-block">
                  Feasibility Tier
                </div>
                <h3 className="font-display font-bold text-xl text-slate-100">Conceptual Estimate</h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Ideal for early budgeting phase, site purchase valuations, and raw schematic conceptual cost reviews during initial venture rounds.
                </p>
                <div className="border-t border-slate-700/50 pt-4 space-y-2">
                  <p className="text-xs font-mono font-medium text-slate-300 uppercase">What's Included:</p>
                  <ul className="text-xs text-slate-400 space-y-2 font-sans">
                    <li className="flex items-center gap-2">✓ Early-stage feasibility analysis</li>
                    <li className="flex items-center gap-2">✓ Rough square-footage cost allocations</li>
                    <li className="flex items-center gap-2">✓ CSI 16 Division itemized categories draft</li>
                  </ul>
                </div>
              </div>
              <button 
                onClick={onOpenEstimationTool}
                className="w-full py-3 border border-slate-700 hover:border-yellow-500 hover:bg-slate-800 text-slate-200 text-xs font-bold uppercase rounded transition-colors mt-6 cursor-pointer"
              >
                Estimate Conceptual Fit
              </button>
            </div>

            {/* Detailed Bid Estimate */}
            <div className="bg-[#1e2530] border-2 border-yellow-500 rounded-xl p-8 space-y-6 flex flex-col justify-between relative shadow-xl transform lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-500 text-slate-950 text-[10px] uppercase font-mono font-black py-1 px-4 rounded-full">
                Most Popular
              </div>
              <div className="space-y-4">
                <div className="bg-yellow-500/20 text-yellow-400 font-mono text-[10px] uppercase font-bold py-1 px-3 rounded-full inline-block">
                  Bid Premium Tier
                </div>
                <h3 className="font-display font-bold text-xl text-slate-100">Detailed Bid Estimate</h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Best for prime contractors filing certified municipal bids, heavy commercial bidding, and sub-contractor validation steps.
                </p>
                <div className="border-t border-slate-700/50 pt-4 space-y-2">
                  <p className="text-xs font-mono font-medium text-slate-350 uppercase">What's Included:</p>
                  <ul className="text-xs text-slate-400 space-y-2 font-sans">
                    <li className="flex items-center gap-2">✓ Full material quantity take-off</li>
                    <li className="flex items-center gap-2">✓ ZIP code localized labor indexing</li>
                    <li className="flex items-center gap-2">✓ Double verification review procedure</li>
                  </ul>
                </div>
              </div>
              <button 
                onClick={onOpenEstimationTool}
                className="w-full py-3.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 text-xs font-extrabold uppercase rounded transition-colors mt-6 cursor-pointer animate-pulse"
              >
                Request Bid Cost Review
              </button>
            </div>

            {/* BIM 5D Integrated Estimate */}
            <div className="bg-[#1e2530] border border-slate-700/60 rounded-xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-[#2a3442] text-cyan-400 font-mono text-[10px] uppercase font-bold py-1 px-3 rounded-full inline-block">
                  Enterprise Model Tier
                </div>
                <h3 className="font-display font-bold text-xl text-slate-100">BIM 5D Integrated Estimate</h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Engineered for sophisticated developments utilizing Autodesk Revit, and complex cross-collaborative MEP structural designs.
                </p>
                <div className="border-t border-slate-700/50 pt-4 space-y-2">
                  <p className="text-xs font-mono font-medium text-slate-300 uppercase">What's Included:</p>
                  <ul className="text-xs text-slate-400 space-y-2 font-sans">
                    <li className="flex items-center gap-2">✓ Dynamic 3D model-aligned quantities</li>
                    <li className="flex items-center gap-2">✓ Revit / CAD integration outputs</li>
                    <li className="flex items-center gap-2">✓ Continuous layout redesign pricing updates</li>
                  </ul>
                </div>
              </div>
              <button 
                onClick={onOpenEstimationTool}
                className="w-full py-3 border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 text-slate-200 text-xs font-bold uppercase rounded transition-colors mt-6 cursor-pointer"
              >
                Integrate BIM Takeoff
              </button>
            </div>

          </div>

          {/* Pricing assurance footer tags from Pic 1 */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-12 mt-12 border-t border-slate-700/40 text-xs text-slate-400 font-sans">
            <span className="flex items-center gap-1">🛡️ No hidden charges</span>
            <span className="flex items-center gap-1">🛡️ Transparent scope-based pricing</span>
            <span className="flex items-center gap-1">🛡️ Flexible engagement options</span>
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={() => onNavigate('contact-us')}
              className="inline-flex items-center gap-2 bg-slate-850 hover:bg-slate-800 text-yellow-400 font-bold py-2.5 px-6 rounded-md text-xs font-mono border border-slate-700 cursor-pointer"
            >
              Contact Us for custom pricing models
            </button>
          </div>

        </ScrollReveal>
      </section>

      {/* 9. Cost Planning Across Diverse Projects metrics */}
      <section className="py-20 bg-white" id="diverse-planning-section">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal variant="fadeRight" className="lg:col-span-6 space-y-6">
              <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">OUR PROJECT EXPERIENCE</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Cost Planning Across Diverse Project Types
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                We maintain active preconstruction operations throughout urban metropolitan cores and rural state regions, ensuring localized structural compliance index rates are consistently aligned.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'High-Rise Developments & Commercial Hubs',
                  'Industrial Facilities & Plant Logistics',
                  'Commercial Office Buildings & Tenant Improvements',
                  'Mixed-Use Townhouses & Residential Renovations'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-sans text-xs font-semibold text-slate-805 text-slate-800">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500 font-sans leading-relaxed pt-2">
                Every estimate reflects scope accuracy, schedule awareness, and current market-based micro-index pricing constraints.
              </p>
            </ScrollReveal>

            {/* Right Column */}
            <ScrollReveal variant="fadeLeft" delay={0.2} className="lg:col-span-6">
              <div className="bg-[#1e2530] border border-slate-700/60 p-8 rounded-2xl text-white shadow-lg space-y-6">
                <h3 className="font-display font-bold text-slate-100 text-lg">Need immediate precon guidance?</h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Our estimators are ready to review your PDF blueprint files and project specifications.
                </p>
                <div className="p-4 bg-[#141b25] rounded-xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">USA Technical Desk</span>
                    <a href="tel:+15077781624" className="text-sm font-mono text-yellow-400 font-bold block">+1 (507) 778 1624</a>
                  </div>
                  <button 
                    onClick={() => onNavigate('contact-us')}
                    className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Speak with Coordinator
                  </button>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 10. Call to Action - Optimize your budget */}
      <section className="relative py-24 bg-[#233240] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" 
            alt="Skyscraper scaffolding" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <ScrollReveal variant="fadeUp" className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Ready to Optimize Your Construction Budget?
          </h2>
          <p className="text-xs sm:text-sm text-slate-350 max-w-2xl mx-auto leading-relaxed font-sans">
            Upload your preliminary diagrams for a free takeoff overview with high accuracy. Get detailed BOQs and regional cost index matching within 24–48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => onNavigate('contact-us')}
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-md shadow-lg transition-colors cursor-pointer"
            >
              Request a Proposal
            </button>
            <button 
              onClick={() => onNavigate('contact-us')}
              className="bg-[#141d26] hover:bg-[#1f2a36] border border-slate-700 text-white font-semibold text-xs uppercase tracking-wider py-4 px-8 rounded-md transition-colors cursor-pointer"
            >
              Talk to Our Cost Experts
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* 11. Frequently Asked Questions Accordion */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200" id="faq-section">
        <ScrollReveal variant="fadeUp" duration={0.8} className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Header Info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">FAQS</span>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                Can't find the answers you're looking for? Contact our preconstruction helpdesk immediately at +1 (507) 778-1624.
              </p>
              <div className="hidden lg:block pt-6">
                <div className="relative rounded-xl overflow-hidden group diagonal-gloss-container shadow-md">
                  <div className="gloss-tl" />
                  <div className="gloss-br" />
                  <img 
                    src="/assets/FAQS.jpg" 
                    alt="Industrial layout" 
                    className="object-cover h-64 w-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Right Accordion Panel */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-5 pt-0 border-t border-slate-100 text-xs font-sans text-slate-500 leading-relaxed bg-slate-50/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 12. Modern Stats & Redesigned Client Testimonials Section */}
      <section className="py-20 bg-white border-t border-slate-100" id="testimonials-section">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          
          {/* A. OUR STATS YOU CAN TRUST */}
          <div className="text-center mb-20">
            <ScrollReveal variant="fadeUp" duration={0.8}>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900 tracking-tight mb-4">
                OUR STATS YOU CAN TRUST
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-3xl mx-auto leading-relaxed font-sans">
                Throughout our 6+ years journey, as a leading construction cost estimator, we at OZ Solution have achieved several milestones. Our numbers speak for themselves, making us the only partner you can trust.
              </p>
            </ScrollReveal>

            {/* Stats row with vertical separators */}
            <ScrollReveal variant="fadeUp" duration={0.8} delay={0.15}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-0 w-full mt-12 px-2">
                {/* Stat 1 */}
                <div className="text-center border-l-2 border-slate-200/80 px-4 py-2 flex flex-col justify-center min-h-[90px]">
                  <span className="text-2xl sm:text-3.5xl font-display font-black text-yellow-500 block mb-1">12 %</span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-tight">Cut Material Cost</span>
                </div>
                {/* Stat 2 */}
                <div className="text-center border-l-2 border-slate-200/80 px-4 py-2 flex flex-col justify-center min-h-[90px]">
                  <span className="text-2xl sm:text-3.5xl font-display font-black text-yellow-500 block mb-1">$ 500 M</span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-tight">Projects Estimated</span>
                </div>
                {/* Stat 3 */}
                <div className="text-center border-l-2 border-slate-200/80 px-4 py-2 flex flex-col justify-center min-h-[90px]">
                  <span className="text-2xl sm:text-3.5xl font-display font-black text-yellow-500 block mb-1">+ 18 %</span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-tight">Average Bid ROI</span>
                </div>
                {/* Stat 4 */}
                <div className="text-center border-l-2 border-slate-200/80 px-4 py-2 flex flex-col justify-center min-h-[90px]">
                  <span className="text-2xl sm:text-3.5xl font-display font-black text-yellow-500 block mb-1">5,000 +</span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-tight">Bids Submitted</span>
                </div>
                {/* Stat 5 */}
                <div className="text-center border-l-2 border-slate-200/80 border-r-2 border-slate-200/80 px-4 py-2 flex flex-col justify-center min-h-[90px]">
                  <span className="text-2xl sm:text-3.5xl font-display font-black text-yellow-500 block mb-1">100 %</span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-tight">Satisfaction</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* B. CLIENT TESTIMONIALS */}
          <div className="text-center mb-14 pt-8 border-t border-slate-100">
            <ScrollReveal variant="fadeUp" duration={0.8}>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-950 tracking-tight mb-2">
                Client Testimonials
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-10 leading-relaxed font-sans">
                See what our clients say about our estimating services
              </p>
            </ScrollReveal>

            {/* 3 Brand Badges */}
            <ScrollReveal variant="fadeUp" duration={0.8} delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4">
                {/* Trustpilot Badge */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col items-center justify-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-1.5">
                    {/* Star icon */}
                    <svg className="w-6 h-6 text-[#00b67a] fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span className="font-display font-black text-xl text-slate-900 tracking-tight">Trustpilot</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" />
                    ))}
                  </div>
                  <span className="text-xl font-display font-extrabold text-slate-900">4.9/5</span>
                  <span className="text-xs text-slate-400 font-sans">Based on 100+ reviews</span>
                </div>

                {/* Google Reviews Badge */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col items-center justify-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2">
                    {/* Google Icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="font-display font-black text-xl text-slate-900 tracking-tight">Google Reviews</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xl font-display font-extrabold text-slate-900">5/5</span>
                  <span className="text-xs text-slate-400 font-sans">Based on 90 reviews</span>
                </div>

                {/* Procore Network Badge */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col items-center justify-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#FF6500] rounded flex items-center justify-center text-white font-black text-[10px] select-none">
                      P
                    </div>
                    <span className="font-display font-black text-xl text-slate-900 tracking-tight">Procore Network</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xl font-display font-extrabold text-slate-900">5/5</span>
                  <span className="text-xs text-slate-400 font-sans">Verified Partner</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* C. HORIZONTAL FEEDBACK CAROUSEL DIV (Pic 3) */}
          <ScrollReveal variant="fadeUp" duration={0.8} delay={0.2}>
            <div className="bg-[#f8fafc] border border-slate-200/80 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row gap-8 items-stretch relative overflow-hidden shadow-sm w-full">
              
              {/* Left Column: Excellent Rating Badge */}
              <div className="flex flex-col items-center lg:items-start justify-center border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-6 lg:pb-0 lg:pr-8 text-center lg:text-left shrink-0 min-w-[200px]">
                <span className="font-display font-black text-2xl tracking-tight text-slate-900">EXCELLENT</span>
                <div className="flex gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-xs text-slate-500 font-sans mb-4">
                  Based on <span className="text-slate-800 font-bold">159 reviews</span>
                </p>
                {/* Google Colored Logo */}
                <div className="flex items-center gap-0.5 font-display font-extrabold text-xl tracking-tight select-none">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
              </div>

              {/* Right Column: Automatically scrolling review track */}
              <div className="relative flex-1 min-w-0 flex items-center" id="testimonial-carousel-container">

                {/* Main Scrollable Track */}
                <div 
                  ref={scrollContainerRef}
                  className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-none py-4 w-full snap-x snap-mandatory"
                  id="testimonial-scroll-track"
                >
                  {[
                    {
                      initials: 'L',
                      name: 'Lisa L.',
                      time: '3 days ago',
                      rating: 5,
                      avatarBg: 'bg-indigo-600',
                      text: 'Detailed residential estimate. CSI divisions clearly marked. Finishes and mechanical takeoff types were especially accurate and helpful.',
                    },
                    {
                      initials: 'D',
                      name: 'David K.',
                      time: '2 years ago',
                      rating: 5,
                      avatarBg: 'bg-orange-500',
                      text: 'The estimate for our custom home project was precise and practical. Framing and MEP quantities matched closely with expectations.',
                    },
                    {
                      initials: 'E',
                      name: 'Emily J.',
                      time: '6 months ago',
                      rating: 5,
                      avatarBg: 'bg-slate-600',
                      text: 'OZ Solution helped with a renovation estimate. Interior finishes and mechanical systems were clearly broken down and easy to understand.',
                    },
                    {
                      initials: 'M',
                      name: 'Michael R.',
                      time: '6 months ago',
                      rating: 5,
                      avatarBg: 'bg-amber-600',
                      text: 'OZ Solution provided an outstanding estimate with accurate pricing. Very responsive customer support and excellent turnaround time.',
                    },
                    {
                      initials: 'S',
                      name: 'Sarah L.',
                      time: '1 month ago',
                      rating: 5,
                      avatarBg: 'bg-emerald-600',
                      text: "Outstanding MEP quantity takeoffs delivered under a very tight schedule. Their precision is exactly what we needed to win our commercial bid."
                    }
                  ].map((rev, index) => (
                    <div 
                      key={index}
                      className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm min-w-[280px] sm:min-w-[310px] max-w-[310px] shrink-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between snap-start"
                      id={`testimonial-card-${index}`}
                    >
                      <div>
                        {/* Header of review card */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-9 h-9 ${rev.avatarBg} text-white font-display font-bold flex items-center justify-center rounded-full text-xs shadow-inner`}>
                              {rev.initials}
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm">{rev.name}</h4>
                              <p className="text-[10px] text-slate-400 font-sans">{rev.time}</p>
                            </div>
                          </div>
                          
                          {/* Mini Google Logo */}
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                        </div>

                        {/* Rating row with verified check */}
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <div className="flex gap-0.5">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                          {/* Verified Check icon */}
                          <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>

                        {/* Review text */}
                        <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-4">
                          "{rev.text}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </ScrollReveal>

          {/* Bottom call to action banner */}
          <div className="text-center pt-12 border-t border-slate-100 mt-16 font-sans text-xs text-slate-500">
            👋 Build smarter. Estimate accurately.{' '}
            <button 
              onClick={onOpenEstimationTool}
              className="text-yellow-600 hover:text-yellow-700 font-bold underline transition-colors cursor-pointer"
            >
              Start your project with OZ Solution today.
            </button>
          </div>

        </div>
      </section>

      {/* 13. Latest Insights / Blog highlight cards */}
      <section className="py-20 bg-slate-50 border-t border-slate-200" id="insights-section">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-baseline mb-12 gap-4">
            <div className="space-y-3">
              <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">LATEST INSIGHTS</span>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight leading-tight">
                Preconstruction Cost Guides & BIM Industry Updates
              </h2>
            </div>
            <button 
              onClick={() => onNavigate('blog')}
              className="text-xs font-mono font-bold text-yellow-600 hover:text-yellow-700 shrink-0 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>View all structural insights</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Adapting Estimating Protocols to USA Volatile Structural Steels in 2026',
                date: 'June 20, 2026',
                img: '/assets/blog1.jpg',
                desc: 'How current tariffs and localized regional logistics constraints impact Class 1 preconstruction budgets.'
              },
              {
                title: 'BIM 5D: Visualizing Real-time Concrete Cost Variations Across Revit Platforms',
                date: 'June 12, 2026',
                img: '/assets/blog2.jpg',
                desc: 'A comprehensive integration review detailing design coordination adjustments inside mechanical layouts.'
              },
              {
                title: 'CSI Division Masterclass: Restructuring Quantity takeoffs for Fast Bid Submittals',
                date: 'May 28, 2026',
                img: '/assets/blog3.jpg',
                desc: 'Advanced blueprint auditing tactics to optimize sheet volumes prior to certification reviews.'
              }
            ].map((insight, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 duration-300 group"
              >
                <div className="h-44 w-full bg-slate-100 overflow-hidden relative diagonal-gloss-container">
                  <div className="gloss-tl" />
                  <div className="gloss-br" />
                  <img 
                    src={insight.img} 
                    alt={insight.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <span className="text-[10px] font-mono text-slate-450 text-slate-500 block uppercase font-bold">
                    {insight.date} | Cost Analysis
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-sm hover:text-yellow-600 transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-sans">
                    {insight.desc}
                  </p>
                  <button 
                    onClick={() => onNavigate('blog')}
                    className="text-xs font-semibold text-yellow-600 hover:text-yellow-700 inline-flex items-center gap-1 pt-2 cursor-pointer"
                  >
                    Read article <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 14. Yellow Strip marquee footer accent */}
      <ScrollReveal variant="fadeUp" duration={0.8} id="home-marquee-accent-reveal">
        <section className="bg-yellow-500 py-4 overflow-hidden border-y border-slate-950" id="home-marquee-accent">
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
