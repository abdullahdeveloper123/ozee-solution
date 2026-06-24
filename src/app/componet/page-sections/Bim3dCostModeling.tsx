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
  Layers, 
  CheckCircle2,
  Settings,
  Flame,
  Wind,
  Gauge,
  Box,
  Database,
  BarChart3
} from 'lucide-react';
import { useScroll, useTransform, motion } from 'motion/react';
import ScrollReveal from '../common/ScrollReveal';
import OZLogoBadge from '../common/OZLogoBadge';

interface Bim3dCostModelingProps {
  onNavigate: (route: string) => void;
  onOpenEstimationTool?: () => void;
}

export default function Bim3dCostModeling({ onNavigate, onOpenEstimationTool }: Bim3dCostModelingProps) {
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
      q: "Q1. What is BIM 3D Cost Modeling?",
      a: "BIM 3D Cost Modeling integrates detailed cost databases directly with three-dimensional building information models. This allows for automated quantity extractions and visual mapping of cost structures directly to physical design elements."
    },
    {
      q: "Q2. How does BIM 3D Cost Modeling improve project accuracy?",
      a: "By extracting measurements and materials straight from the coordinate-rich 3D CAD/Revit model, it eliminates human estimation error, guarantees precise volumetric calculations, and dynamically updates estimates if design parameters change."
    },
    {
      q: "Q3. What is the difference between standard take-offs and BIM cost modeling?",
      a: "Standard take-offs are manual or 2D-screen-scaled, which can miss complex overlaps and spatial depths. BIM 3D cost modeling links every cost code to a smart digital object, providing an interactive, visual, and highly audit-friendly price map."
    },
    {
      q: "Q4. Can this support collaborative design modifications?",
      a: "Yes. Architects, structural engineers, and estimating teams can instantly see the financial impact of relocating walls, altering structural frames, or changing materials in real-time."
    },
    {
      q: "Q5. Do you handle model reconciliation and audit reviews?",
      a: "Absolutely. We run detailed audits of the provided model files to ensure accuracy, identify discrepancies in level-of-detail (LOD), and align physical coordinates with standard cost databases."
    },
    {
      q: "Q6. What model file formats do you support?",
      a: "We work with standard industry file formats, including Revit (.rvt), Navisworks (.nwd/.nwc), AutoCAD files, IFC (Industry Foundation Classes), and other major 3D design models."
    },
    {
      q: "Q7. Does BIM 3D Cost Modeling prevent cost overruns?",
      a: "Yes. It lets you identify spatial clashes (e.g., ductwork colliding with structural beams) prior to construction, avoiding extremely expensive field re-routes and emergency change orders."
    },
    {
      q: "Q8. Why choose Antenity for BIM cost modeling services?",
      a: "Antenity pairs state-of-the-art building information modeling software with top-tier construction estimators. We deliver beautiful, synchronized cost models that empower you to visualize every single dollar spent."
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen selection:bg-yellow-500 selection:text-slate-900 overflow-x-hidden">
      
      {/* 1. Hero Breadcrumb Section */}
      <section 
        className="relative py-24 md:py-32 bg-cover bg-center text-white"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.95)), url('https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80')" 
        }}
        id="qto-hero"
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 text-center space-y-4">
          <ScrollReveal variant="fadeUp" duration={0.8}>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-100 tracking-tight leading-tight">
              BIM 3D Cost Modeling
            </h1>
          </ScrollReveal>
          
          <ScrollReveal variant="fadeUp" duration={0.8} delay={0.15}>
            <p className="text-xs sm:text-sm font-mono tracking-wider text-yellow-500 uppercase">
              <span className="hover:text-yellow-400 cursor-pointer transition-colors" onClick={() => onNavigate('home')}>Home</span> / BIM 3D Cost Modeling
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-20 bg-white" id="bim-intro">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
                BIM 3D Cost Modeling
              </h2>
              <div className="w-20 h-1.5 bg-yellow-500 mt-3 rounded-full" />
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2} className="space-y-4">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Modern construction requires seamless collaboration between design geometries and budgetary reality. Antenity’s specialized BIM 3D Cost Modeling services unify physical virtual layouts directly with comprehensive cost databases. By leveraging intelligent 3D Building Information Models, we create dynamic, responsive cost mappings that eliminate manual counting errors and streamline procurement.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Our <strong className="text-slate-900 font-semibold">BIM cost modeling</strong> platform bridges the gap between planners, developers, and field general contractors. We map structural, architectural, and MEP elements directly to real-time unit pricing databases, producing unparalleled accuracy.
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
              {/* Image Frame Accent Border */}
              <div className="absolute -inset-2 bg-yellow-500 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity blur" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" 
                  alt="3D Building Model Blueprint on Laptop" 
                  className="w-full h-full object-cover max-h-[480px] filter hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded floating active tag */}
                <div className="absolute top-4 left-4 bg-slate-900/90 text-white font-mono text-[10px] tracking-widest uppercase py-1.5 px-3 rounded border border-white/10 backdrop-blur-sm">
                  3D Coordinates Visualized
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

      {/* 3. Full Breakdown Section */}
      <section className="py-20 bg-[#1e293b] text-white" id="bim-breakdown">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column with circular badge overlay & scroll-based rotate */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal variant="fadeLeft" className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1512403754473-278556139b0a?auto=format&fit=crop&w=800&q=80" 
                    alt="Workmen reviewing 3D structure details" 
                    className="w-full object-cover max-h-[440px] filter brightness-[0.85]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                </div>

                {/* Circular badge with custom scroll-linked rotating frame motion */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-36 sm:h-36 bg-yellow-500 rounded-full flex flex-col items-center justify-center border-4 border-[#1e293b] shadow-xl text-slate-950 p-2 z-20">
                  {/* Rotating Logo Silhouette (Scroll-linked rotation) */}
                  <motion.div 
                    className="absolute inset-1 opacity-20"
                    style={{ rotate: badgeRotation }}
                  >
                    <OZLogoBadge className="w-full h-full text-slate-950" />
                  </motion.div>

                  {/* Inner Content */}
                  <div className="flex flex-col items-center justify-center text-center z-10">
                    <span className="text-2xl sm:text-3xl font-display font-black leading-none tracking-tight">25+</span>
                    <span className="text-[9px] uppercase font-mono font-extrabold tracking-widest mt-1 text-center leading-tight">Years Exp</span>
                    <span className="text-[7px] text-slate-800 font-sans font-bold leading-none mt-0.5 uppercase tracking-wide">BIM Modeling</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal variant="fadeRight" delay={0.1}>
                <span className="inline-block text-xs font-mono font-bold tracking-[0.2em] text-yellow-500 uppercase">
                  Service Scope
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight leading-tight mt-1 text-white">
                  Full Breakdown of BIM 3D Cost Modeling
                </h2>
                <div className="w-16 h-1 bg-yellow-500 mt-3 rounded-full" />
              </ScrollReveal>

              <ScrollReveal variant="fadeRight" delay={0.2} className="space-y-4">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Antenity delivers granular BIM Cost services mapped to every coordinate of your digital model. Here is our direct operational process:
                </p>

                {/* List items with nice custom layouts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    "Extract precise 3D spatial volumes automatically",
                    "Synchronize physical elements with unit rates",
                    "Run clash cost mitigation prior to field break",
                    "Simulate budget shifts on physical design changes",
                    "Detailed Bills of Quantities directly from Revit files"
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 bg-slate-800/40 border border-white/5 hover:border-yellow-500/30 p-3.5 rounded-lg transition-colors"
                    >
                      <div className="bg-yellow-500/10 text-yellow-500 p-1.5 rounded-md mt-0.5 shrink-0">
                        <Check className="w-4 h-4 stroke-[3px]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {item === "Run clash cost mitigation prior to field break" ? (
                          <strong className="text-yellow-400 font-bold">{item}</strong>
                        ) : item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2 italic border-l-2 border-yellow-500/40 pl-4">
                  By linking spatial geometries with real market costs, we remove speculation and assure maximum structural value.
                </p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Making Smart Financial Choices */}
      <section className="py-20 bg-white" id="bim-financial-choices">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <ScrollReveal variant="fadeRight">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-yellow-600 uppercase">
                Visualized Cost Intelligence
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight mt-1">
                Optimizing Budgets with 3D Visual Maps
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mt-3 rounded-full" />
            </ScrollReveal>
            
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Our <strong className="text-slate-900 font-semibold">BIM 3D modeling cost analysis</strong> replaces outdated 2D drawings with real coordinate depth. Stakeholders can physically view the budget impact of material selections directly inside the virtual structure before signing supplier contracts.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column (Yellow Accent Vertical line) */}
          <div className="lg:col-span-7 border-l-4 border-yellow-500 pl-6 lg:pl-10 space-y-6">
            <ScrollReveal variant="fadeLeft" delay={0.1}>
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                We empower your team to optimize:
              </h4>
              
              <ul className="space-y-4 mt-4 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                  <span>Immediate volumetric extraction for precise structural material quotes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                  <span>Value engineering comparisons of competing physical designs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                  <span>Real-time budget adjustments synced with client engineering reviews</span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal variant="fadeLeft" delay={0.2} className="pt-2">
              <p className="text-sm text-slate-500 leading-relaxed font-sans italic bg-slate-100 p-4 rounded border-l-4 border-slate-300">
                Eliminate surprises on-site by finding geometry clash issues in the model rather than with cranes and concrete in the field.
              </p>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>

      {/* 5. Tender Preparation and Bid Support */}
      <section className="py-20 bg-slate-100 border-y border-slate-200" id="bim-tender-prep">
        <div className="w-full px-4 sm:px-8 lg:px-12 space-y-12">
          
          <ScrollReveal variant="fadeDown" className="text-center space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-yellow-600 uppercase">
              Tendering Edge
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
              Model-Based Tender Prep & Bid Support
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Box 1 with left yellow highlight */}
            <ScrollReveal variant="fadeRight" className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-yellow-500 space-y-4">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Antenity’s <strong className="text-slate-950 font-bold">BIM 3D bid estimation</strong> deliverables provide contractors with a powerful competitive advantage. Showing clients a visual, audit-friendly cost map makes your tenders stand out and guarantees unparalleled reliability.
              </p>
            </ScrollReveal>

            {/* Box 2 with left yellow highlight */}
            <ScrollReveal variant="fadeLeft" className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-yellow-500 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Our deliverables package:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                  <span>3D Model-linked Bills of Quantities (BOQs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                  <span>Visual design variance budget evaluations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                  <span>Independent digital model verification reports</span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 font-mono font-bold uppercase pt-1 border-t border-slate-100">
                We make your bid mathematically and visually indisputable to safeguard project success.
              </p>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 6. Value Engineering & Lifecycle - Dark Overlay Section */}
      <section className="py-24 bg-[#1a2631] text-white relative overflow-hidden" id="bim-value-engineering">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-8 max-w-4xl mx-auto">
          <ScrollReveal variant="fadeDown" className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-yellow-400 uppercase">
              Unified Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
              Value Engineering paired with 3D Spatial Coordination
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1} className="space-y-6 max-w-4xl mx-auto text-slate-300">
            <p className="text-sm sm:text-base leading-relaxed">
              By connecting accurate pricing with virtual coordinate elements, Antenity provides seamless value engineering insights. We track the cost of physical components, labor hours, and sub-assembly installations relative to structural layers.
            </p>
            <p className="text-sm sm:text-base leading-relaxed font-sans">
              Our models verify that you keep overall expenditures down while upgrading mechanical, electrical, and structural systems. This provides developer confidence and guarantees code-compliant design efficiency from day one.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Improved system performance while keeping costs down */}
      <section className="py-20 bg-white" id="bim-system-performance">
        <div className="w-full px-4 sm:px-8 lg:px-12 space-y-12">
        <ScrollReveal variant="fadeDown" className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-yellow-600 uppercase">
            Coordination Yields
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Flawless Spatial Coordination, Minimized Expenses
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 with left yellow highlight indicator */}
          <ScrollReveal variant="fadeRight" className="bg-white p-8 rounded-xl border border-slate-200 border-l-4 border-l-yellow-500 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Our <strong className="text-slate-900 font-semibold">3D BIM Model extraction</strong> maps directly with standard estimation codes. We verify levels of details (LOD 100 to 500) to ensure that the volume counts perfectly mirror standard construction catalogs.
            </p>
          </ScrollReveal>

          {/* Card 2 with left yellow highlight indicator */}
          <ScrollReveal variant="fadeLeft" className="bg-white p-8 rounded-xl border border-slate-200 border-l-4 border-l-yellow-500 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              We help you avoid the common disconnect between designers and trade estimators. With model-based estimates, both parties operate from a single, unalterable digital source of physical and financial truth.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

      {/* 8. Why Choose Antenity - Dark Parallax background with technical overlay */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        {/* Industrial background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" 
            alt="Corporate skyscraper architecture structure" 
            className="w-full h-full object-cover filter brightness-[0.15] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />
        </div>

        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 max-w-4xl mx-auto text-center space-y-8 text-white">
          <ScrollReveal variant="fadeDown" className="text-center space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-yellow-400 uppercase">
              Distinct Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight leading-tight">
              Why Choose Antenity for BIM 3D Cost Modeling?
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1} className="space-y-5 bg-slate-950/60 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-white/5 shadow-2xl">
            <ul className="space-y-4 text-xs sm:text-sm md:text-base text-slate-200">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Automatic <strong className="text-white font-bold">3D volumetric take-offs</strong> directly from CAD, Revit & IFC files</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Precise mapping connecting physical objects to live pricing databases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>In-depth <strong className="text-white font-bold">spatial clash detection cost impact</strong> review to minimize on-site change orders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Highly visual representation of pricing details to easily align with corporate stakeholders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Reliable, rapid turnaround times backed by dedicated BIM cost specialists</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 mt-6">
              <p className="text-xs sm:text-sm text-yellow-400 font-mono font-bold tracking-wider uppercase leading-relaxed">
                Antenity integrates modern CAD metrics directly with economic realities, allowing you to build both visually and financially on solid ground.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Frequently Asked Questions */}
      <section className="py-24 bg-white" id="bim-faq">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (FAQ accordions) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fadeRight">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-yellow-600 uppercase block mb-1">
                Resource Hub
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-none">
                FREQUENTLY ASKED QUESTIONS
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

          {/* Right Column (Tower Crane image) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ScrollReveal variant="scaleUp" className="relative group">
              <div className="absolute -inset-2 bg-yellow-500 rounded-2xl opacity-10 group-hover:opacity-15 transition-opacity blur" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" 
                  alt="Towering yellow cranes rising into the sky" 
                  className="w-full object-cover max-h-[520px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>

      {/* 10. Call to Action / Help Figure Out Section */}
      <section className="py-20 bg-slate-900 text-white relative" id="bim-cta">
        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 max-w-4xl mx-auto text-center space-y-8">
          
          <ScrollReveal variant="fadeDown" className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-yellow-400 uppercase">
              Free Consultation Support
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
              Antenity Can Help You Build Accurate BIM 3D Cost Models
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1} className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Antenity offers reliable, certified <strong className="text-white font-bold">BIM 3D modeling cost services</strong> customized precisely to your specifications. Our <strong className="text-yellow-400 font-semibold">BIM cost modeling specialists' USA</strong> intelligence helps you manage change orders, prevent on-site layout clashes, and bid with absolute safety.
            </p>
          </ScrollReveal>

          {/* Dynamic Action Widgets */}
          <ScrollReveal variant="fadeUp" delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 max-w-3xl mx-auto">
            {/* Phone contact widget */}
            <a 
              href="tel:+15077781624"
              className="group flex flex-col items-center justify-center p-6 bg-slate-800/50 hover:bg-slate-800 border border-white/5 hover:border-yellow-500/30 rounded-xl transition-all duration-200 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Phone Support</span>
              <span className="text-base sm:text-lg font-display font-bold text-white mt-1 group-hover:text-yellow-400 transition-colors">
                +1 (507) 778 1624
              </span>
            </a>

            {/* Location widget */}
            <div className="group flex flex-col items-center justify-center p-6 bg-slate-800/50 hover:bg-slate-800 border border-white/5 hover:border-yellow-500/30 rounded-xl transition-all duration-200 text-center">
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
                <span>Calculate My BIM Cost Model Now</span>
              </button>
            </ScrollReveal>
          )}

        </div>
      </section>

      {/* 11. Infinite Scrolling Marquee ("yellow line par carousel apply kar do") */}
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
