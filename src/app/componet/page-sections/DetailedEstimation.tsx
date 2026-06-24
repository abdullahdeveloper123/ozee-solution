import React, { useState } from 'react';
import { 
  CheckCircle2, Calculator, ArrowRight, HelpCircle, 
  ChevronDown, Phone, MapPin, Award, ShieldCheck, 
  Layers, ChevronLeft, ChevronRight 
} from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import OZLogoBadge from '../common/OZLogoBadge';

interface DetailedEstimationProps {
  onNavigate: (route: string) => void;
  onOpenEstimationTool: () => void;
}

export default function DetailedEstimation({ onNavigate, onOpenEstimationTool }: DetailedEstimationProps) {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is a conceptual cost estimate?",
      a: "A conceptual cost estimate is an early-stage projection prepared before detailed design or architectural drawings are complete. It helps developers, investors, and contractors determine project feasibility, evaluate investment options, and set initial budget directions."
    },
    {
      q: "How accurate is a preliminary construction estimate?",
      a: "Depending on the level of project definition available, preliminary estimates typically range from +/- 15% to 20% accuracy. They are designed as a reliable starting point for schematic budget alignment, financial planning, and funding approvals."
    },
    {
      q: "Do you provide feasibility study cost support?",
      a: "Yes, we work closely with developers and construction consultants during the feasibility and investment planning stages to establish baseline numbers, identify cost drivers, and conduct risk assessments before significant design funds are committed."
    },
    {
      q: "Can you assist during schematic design budget alignment?",
      a: "Absolutely. As the design evolves from initial sketches into schematic drawings, we continuously refine and validate our cost models to ensure budgets remain aligned and prevent unexpected, costly shifts later in pre-construction."
    },
    {
      q: "What information is needed for a conceptual estimate?",
      a: "We only require basic project parameters to begin: location, sector (commercial, residential, mixed-use, etc.), estimated square footage, high-level finish guidelines, and any rough program sketches or notes you may have."
    },
    {
      q: "Do you use historical construction databases?",
      a: "Yes, our data-driven estimating approach combines localized historical construction cost databases, RSMeans cost indexes, and real-world historical project data to ensure accurate cost-per-square-foot and parametric models."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans" id="detailed-estimation-page">
      
      {/* 1. Hero Breadcrumb Section */}
      <section 
        className="relative py-24 md:py-32 bg-cover bg-center text-white"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.95)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')" 
        }}
        id="qto-hero"
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 text-center space-y-4">
          <ScrollReveal variant="fadeUp" duration={0.8}>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-100 tracking-tight leading-tight">
              Conceptual & Preliminary Cost Estimates
            </h1>
          </ScrollReveal>
          
          <ScrollReveal variant="fadeUp" duration={0.8} delay={0.15}>
            <p className="text-xs sm:text-sm font-mono tracking-wider text-yellow-500 uppercase">
              <span className="hover:text-yellow-400 cursor-pointer transition-colors" onClick={() => onNavigate('home')}>Home</span> / Conceptual & Preliminary Cost Estimates
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Hero Section (Conceptual & Preliminary Cost Estimates introduction) */}
      <section className="py-16 sm:py-24 bg-white overflow-hidden" id="conceptual-intro-section">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Overlapping Image with Rotating Experience Badge */}
            <div className="lg:col-span-5 relative" id="intro-images-container">
              <ScrollReveal variant="fadeIn" duration={0.8}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] sm:aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
                    alt="Senior estimator analyzing metrics" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/10" />
                </div>
              </ScrollReveal>

              {/* Overlapping small visual accent */}
              <div className="absolute -left-4 -bottom-4 bg-slate-900 p-3 rounded-2xl shadow-lg border border-slate-800 hidden sm:block max-w-[180px] z-10">
                <div className="flex items-center gap-2 text-yellow-500 font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4 text-yellow-500 shrink-0" />
                  <span>Verified accuracy</span>
                </div>
                <p className="text-[10px] text-slate-300 font-sans leading-tight">
                  BIM cost projections based on real-world US historical market indexes.
                </p>
              </div>

              {/* Experience Badge with Rotating Logo and Elements (Requested in prompt) */}
              <div 
                className="absolute -right-3 -bottom-3 sm:-right-6 sm:-bottom-6 bg-yellow-500 text-slate-950 rounded-full shadow-2xl flex flex-col items-center justify-center w-32 h-32 z-20 border-4 border-white select-none overflow-hidden group cursor-pointer"
                id="qto-experience-badge-rotate"
                onClick={onOpenEstimationTool}
              >
                {/* Rotating Outer Dashed/Dotted Ring */}
                <div 
                  className="absolute inset-2 border-2 border-dashed border-slate-950/20 rounded-full" 
                  style={{ animation: 'spin 12s linear infinite' }} 
                />
                
                {/* Rotating Logo Silhouette (OZ Building logo shape rotating clockwise) */}
                <div 
                  className="absolute inset-4 flex items-center justify-center opacity-10"
                  style={{ animation: 'spin 18s linear infinite' }}
                >
                  <OZLogoBadge className="w-full h-full text-slate-950" />
                </div>

                {/* Static Branding Content on top */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  {/* Brand icon (the OZ building logo rotating inside) */}
                  <div className="w-6 h-6 mb-0.5 flex items-center justify-center animate-[spin_12s_linear_infinite]">
                    <OZLogoBadge className="w-full h-full text-slate-950" />
                  </div>
                  <span className="text-2xl font-black font-display tracking-tight leading-none">25+</span>
                  <span className="text-[9px] uppercase font-mono font-extrabold tracking-widest text-center mt-1 leading-none">Years Exp</span>
                </div>
              </div>
            </div>

            {/* Right Side: Title, Description and CTAs */}
            <div className="lg:col-span-7 space-y-6" id="intro-text-container">
              <ScrollReveal variant="fadeUp" duration={0.8}>
                <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold block mb-1">
                  PRECONSTRUCTION FEASIBILITY SPECIALISTS
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                  Conceptual & Preliminary <br />Cost Estimates
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" duration={0.8} delay={0.1}>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  At OZ Solution, we understand that the most important financial decisions are often made before detailed drawings are complete. Our Conceptual & Preliminary Cost Estimates service helps clients establish realistic budgets at the earliest stages of a project.
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed mt-4">
                  Whether you are evaluating feasibility, seeking funding approval, or exploring development options, we provide reliable <strong className="text-slate-900 font-semibold">conceptual cost estimate construction</strong> and preliminary cost estimate construction support tailored to your project goals.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" duration={0.8} delay={0.2} className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={onOpenEstimationTool}
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-102 flex items-center gap-2 group cursor-pointer border border-yellow-400"
                  id="contact-us-now-btn"
                >
                  <span>Contact Us Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Section 2: Early-Stage Cost Clarity Before Design Development */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200/60" id="early-stage-clarity">
        <div className="w-full px-4 sm:px-8 lg:px-12 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-display font-black text-2xl sm:text-3.5xl text-slate-950 tracking-tight leading-tight">
              Early-Stage Cost Clarity Before Design Development
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-2xl mx-auto leading-relaxed">
              In the early phase of a project, information is limited. That is why our <strong className="text-slate-800 font-semibold">early-stage construction cost estimate</strong> process focuses on structured analysis rather than guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Left Pillar Column */}
            <ScrollReveal variant="fadeUp" duration={0.7} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80 border-l-4 border-l-yellow-500 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight">We provide:</h3>
                <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Pre-construction cost estimate services</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Feasibility stage cost estimate support</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Rough order of magnitude (ROM) estimate for construction</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Complete ROM estimate construction documentation</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Right Pillar Column */}
            <ScrollReveal variant="fadeUp" duration={0.7} delay={0.1} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80 border-l-4 border-l-yellow-500 flex flex-col justify-between">
              <div className="space-y-4 text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                <p>
                  These estimates give developers, architects, and contractors a dependable starting point for financial planning. Our <strong className="text-slate-950 font-semibold">construction cost estimate before design</strong> service allows teams to evaluate viability before investing in detailed drawings.
                </p>
                <p className="mt-4">
                  Through conceptual construction budgeting and preliminary construction budgeting, we help establish a rough budget framework for approval and early-stage funding decisions.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 4. Section 3: Data-Driven Estimating Approach */}
      <section className="py-16 sm:py-20 bg-white" id="data-driven-approach">
        <div className="w-full px-4 sm:px-8 lg:px-12 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold block">PRECISION ALGORITHMS</span>
            <h2 className="font-display font-black text-2xl sm:text-3.5xl text-slate-950 tracking-tight leading-tight">
              Data-Driven Estimating Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Pillar Column */}
            <ScrollReveal variant="fadeUp" duration={0.7} className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 border-l-4 border-l-yellow-500">
              <div className="space-y-4">
                <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Our process is built on real data and structured methodology. We apply:
                </p>
                <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Parametric cost estimating construction techniques</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Unit cost estimating construction</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Cost per square foot estimate for construction</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Cost per unit area construction estimate</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Historical cost-based estimating</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Right Pillar Column */}
            <ScrollReveal variant="fadeUp" duration={0.7} delay={0.1} className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 border-l-4 border-l-yellow-500 flex items-center">
              <div className="space-y-4 text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                <p>
                  By combining historical construction cost data analysis with a parametric cost modeling approach, we produce reliable projections even when project details are still evolving.
                </p>
                <p className="mt-4">
                  This method supports <strong className="text-slate-950 font-semibold">conceptual cost analysis</strong>, early cost modeling, construction, and schematic design budget alignment.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 5. Section 4: Supporting Feasibility and Investment Planning with Overlay Rotating Badge */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white overflow-hidden relative" id="feasibility-planning">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:30px_30px] z-0" />
        
        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Overlap Image with Experience Badge overlay */}
            <div className="lg:col-span-5 relative order-last lg:order-first" id="feasibility-image-wrap">
              <ScrollReveal variant="fadeIn" duration={0.8}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 aspect-[4/3] sm:aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" 
                    alt="Architects designing schematics" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />
                </div>
              </ScrollReveal>

              {/* Glowing decorative indicator */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-yellow-500 rounded-tl-xl pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-yellow-500 rounded-br-xl pointer-events-none" />

              {/* The second rotating badge overlapping the image (Just like in picture 1 mockup!) */}
              {/* <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-slate-950 rounded-full shadow-2xl flex flex-col items-center justify-center w-28 h-28 z-20 border-4 border-slate-900 select-none overflow-hidden group cursor-pointer hover:scale-105 transition-transform"
                onClick={onOpenEstimationTool}
              > */}
                {/* Rotating Dashed outer ring */}
                {/* <div 
                  className="absolute inset-1.5 border border-dashed border-slate-950/30 rounded-full animate-[spin_10s_linear_infinite]" 
                /> */}
                
             
                {/* <div className="absolute inset-3 opacity-10 animate-[spin_15s_linear_infinite] flex items-center justify-center">
                  <OZLogoBadge className="w-full h-full text-slate-950" />
                </div> */}

            
                {/* <div className="relative z-10 text-center flex flex-col items-center justify-center">
                
                  <div className="w-5 h-5 mb-0.5 flex items-center justify-center animate-[spin_12s_linear_infinite]">
                    <OZLogoBadge className="w-full h-full text-slate-950" />
                  </div>
                  <span className="text-xl font-black font-display tracking-tighter leading-none">25+</span>
                  <span className="text-[7.5px] uppercase font-mono font-extrabold tracking-widest leading-none mt-0.5">Years Exp</span>
                  <span className="text-[7px] text-slate-800 font-sans font-bold leading-none mt-0.5 block">ESTIMATION</span>
                </div> */}
              {/* </div> */}
            </div>

            {/* Right Column: Title and specifications */}
            <div className="lg:col-span-7 space-y-6" id="feasibility-text-wrap">
              <ScrollReveal variant="fadeUp" duration={0.8}>
                <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest font-bold block mb-1">
                  SECURE INVESTMENT CONFIDENCE
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                  Supporting Feasibility and <br className="hidden sm:inline" />Investment Planning
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" duration={0.8} delay={0.1}>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                  Before moving forward with a project, stakeholders need financial confidence. We provide:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Feasibility budget estimate construction",
                    "Construction project initial budget development",
                    "Initial construction cost assessment",
                    "Construction investment planning estimate"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-sans">
                      <span className="text-yellow-500 font-mono font-bold select-none">✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed mt-4">
                  Our service helps clients evaluate return potential and identify risks early. Through <strong className="text-white font-semibold">conceptual cost risk identification</strong> and early-stage cost risk assessment, we highlight cost drivers that may impact overall feasibility.
                </p>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed mt-3">
                  As experienced <strong className="text-white font-semibold">conceptual estimating consultants</strong> and conceptual construction cost consultants, we support developers and investors in making informed decisions.
                </p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Section 5: Schematic and Planning Stage Estimates */}
      <section className="py-16 sm:py-20 bg-white" id="schematic-planning-estimates">
        <div className="w-full px-4 sm:px-8 lg:px-12 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-display font-black text-2xl sm:text-3.5xl text-slate-950 tracking-tight leading-tight">
              Schematic and Planning Stage Estimates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <ScrollReveal variant="fadeUp" duration={0.7} className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 border-l-4 border-l-yellow-500">
              <div className="space-y-4">
                <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                  As the design evolves, budgets must remain aligned. We provide:
                </p>
                <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Schematic design cost estimate</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Schematic cost estimate for construction</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Preliminary construction cost planning</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Construction planning stage cost estimate</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Right Column */}
            <ScrollReveal variant="fadeUp" duration={0.7} delay={0.1} className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 border-l-4 border-l-yellow-500 flex flex-col justify-center">
              <div className="space-y-4 text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                <p>
                  Our team ensures preliminary project cost validation during early design development. This helps maintain financial control and prevents major budget shifts later in the process.
                </p>
                <p className="mt-4">
                  We also support pre-bid conceptual cost estimate preparation and <strong className="text-slate-950 font-semibold">preliminary estimates for contractors</strong> who need early numbers for planning and negotiation.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 7. Section 6: Clear Reporting and Decision Support (Dark Section) */}
      <section className="py-16 sm:py-24 bg-[#1a2631] text-white relative overflow-hidden" id="clear-reporting">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] opacity-60 z-0" />
        
        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest font-bold block">DECISION-READY INTELLIGENCE</span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
              Clear Reporting and Decision Support
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Every estimate we prepare includes structured documentation and transparent assumptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-4">
            {/* Left Box */}
            <ScrollReveal variant="fadeUp" duration={0.8} className="bg-[#24323f]/60 p-6 sm:p-8 rounded-2xl border border-white/5 space-y-4">
              <h3 className="font-display font-bold text-lg text-yellow-500">We provide:</h3>
              <ul className="space-y-4 font-sans text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold mt-0.5">✔</span>
                  <span>Detailed <strong className="text-white font-semibold">conceptual cost estimate report</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold mt-0.5">✔</span>
                  <span>High-level construction cost estimate breakdowns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold mt-0.5">✔</span>
                  <span>Construction budget framework services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold mt-0.5">✔</span>
                  <span>Early project cost forecasting analysis</span>
                </li>
              </ul>
              <p className="text-slate-400 text-xs font-sans leading-relaxed pt-2">
                As a trusted <strong className="text-slate-200 font-semibold">conceptual estimating company</strong> and preliminary cost consultants, we focus on clarity, realism, and decision-ready financial data.
              </p>
            </ScrollReveal>

            {/* Right Box */}
            <ScrollReveal variant="fadeUp" duration={0.8} delay={0.15} className="bg-[#24323f]/60 p-6 sm:p-8 rounded-2xl border border-white/5 space-y-4">
              <h3 className="font-display font-bold text-lg text-yellow-500">Our service supports:</h3>
              <ul className="space-y-4 font-sans text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold mt-0.5">✔</span>
                  <span>Conceptual estimate for developers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold mt-0.5">✔</span>
                  <span>Conceptual estimate for architects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold mt-0.5">✔</span>
                  <span>Early decision support cost estimate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold mt-0.5">✔</span>
                  <span>Preliminary construction financial planning</span>
                </li>
              </ul>
              <p className="text-slate-400 text-xs font-sans leading-relaxed pt-2">
                We help project teams move forward with confidence, backed by reliable early-stage cost intelligence.
              </p>
            </ScrollReveal>
          </div>

          {/* Action Call block */}
          <ScrollReveal variant="fadeIn" duration={1} className="bg-[#2a3a49] p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto mt-8">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-display font-semibold text-white text-base">Ready to evaluate your project's early numbers?</h4>
              <p className="text-xs text-slate-300">Submit parameters to our pricing takeoff wizard tool in seconds.</p>
            </div>
            <button 
              onClick={onOpenEstimationTool}
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-sans font-bold text-xs py-3 px-6 rounded-xl shadow-md transition-all shrink-0 hover:scale-102 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Launch Estimator Wizard</span>
              <Calculator className="w-4 h-4" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Section 7: Frequently Asked Questions (FAQs) */}
      <section className="py-16 sm:py-24 bg-white" id="faq-section">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: FAQ Accordion */}
            <div className="lg:col-span-7 space-y-6" id="faq-accordion-container">
              <ScrollReveal variant="fadeUp" duration={0.8}>
                <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold block mb-1">
                  COMMON QUESTIONS
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3.5xl text-slate-900 tracking-tight leading-tight">
                  Frequently Asked Questions
                </h2>
              </ScrollReveal>

              <div className="space-y-4 pt-4" id="faq-accordions">
                {faqs.map((faq, index) => (
                  <ScrollReveal 
                    key={index} 
                    variant="fadeUp" 
                    duration={0.5} 
                    delay={index * 0.05}
                    id={`faq-block-${index}`}
                  >
                    <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all bg-slate-50/50 hover:border-yellow-500/50">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-5 text-left font-sans font-bold text-xs sm:text-sm text-slate-900 focus:outline-none transition-colors hover:text-yellow-600 cursor-pointer"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-yellow-500 font-mono text-sm leading-none">0{index + 1}.</span>
                          <span>{faq.q}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${openFaq === index ? 'rotate-180 text-yellow-500' : ''}`} />
                      </button>
                      
                      <div 
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          openFaq === index ? 'max-h-60 border-t border-slate-200/60' : 'max-h-0'
                        }`}
                      >
                        <p className="p-5 text-xs sm:text-sm text-slate-500 font-sans leading-relaxed bg-white">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right Column: Tall portrait construction sunset image (Request mockup) */}
            <div className="lg:col-span-5 relative h-full self-stretch min-h-[380px] lg:min-h-0" id="faq-image-container">
              <ScrollReveal variant="fadeIn" duration={0.9} className="h-full">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px] border border-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" 
                    alt="Crane building skyward at sunset" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Section 8: Serving Projects Across the United States */}
      <section className="py-16 bg-[#1a2631] text-white" id="us-coverage">
        <div className="w-full px-4 sm:px-8 lg:px-12 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              Serving Projects Across the United States
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              We provide professional cost estimates for developers, contractors, and architects nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Phone Card */}
            <ScrollReveal variant="fadeUp" duration={0.7} className="bg-[#24323f]/80 p-6 rounded-2xl border border-white/5 flex items-center gap-4 transition-transform hover:-translate-y-0.5 hover:border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/20 shrink-0 text-yellow-500">
                <Phone className="w-5 h-5 animate-bounce" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block">Immediate Quotations</span>
                <a href="tel:+15077781624" className="text-sm sm:text-base font-sans font-bold hover:text-yellow-400 transition-colors">
                  +1 (507) 778 1624
                </a>
              </div>
            </ScrollReveal>

            {/* Address Card */}
            <ScrollReveal variant="fadeUp" duration={0.7} delay={0.1} className="bg-[#24323f]/80 p-6 rounded-2xl border border-white/5 flex items-center gap-4 transition-transform hover:-translate-y-0.5 hover:border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/20 shrink-0 text-yellow-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block">National Office</span>
                <span className="text-xs sm:text-sm font-sans font-semibold text-slate-200">
                  15750 Fair Hill Way Apple Valley, MN 55124, USA
                </span>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 10. Section 9: Bottom Yellow Infinite Ticker Marquee Carousel */}
      <ScrollReveal variant="fadeUp" duration={0.8} id="detailed-marquee-accent-reveal">
        <section className="bg-yellow-500 py-4 overflow-hidden border-y border-slate-950" id="detailed-marquee-accent">
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
