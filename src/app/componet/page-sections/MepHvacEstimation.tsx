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
  Gauge
} from 'lucide-react';
import { useScroll, useTransform, motion } from 'motion/react';
import ScrollReveal from '../common/ScrollReveal';
import OZLogoBadge from '../common/OZLogoBadge';

interface MepHvacEstimationProps {
  onNavigate: (route: string) => void;
  onOpenEstimationTool?: () => void;
}

export default function MepHvacEstimation({ onNavigate, onOpenEstimationTool }: MepHvacEstimationProps) {
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
      q: "Q1. What is HVAC cost estimation?",
      a: "HVAC cost estimation is the process of calculating all expenses associated with heating, ventilation, and air conditioning systems, including equipment, materials, labor, installation, testing, and commissioning, to help plan project budgets accurately."
    },
    {
      q: "Q2. Who can benefit from HVAC cost estimation services?",
      a: "Contractors, subcontractors, real estate developers, mechanical engineers, and consultants benefit from precise HVAC cost estimates to secure fair bids, manage risk, and optimize budgets."
    },
    {
      q: "Q3. What costs are included in your HVAC estimates?",
      a: "Our detailed HVAC estimates cover major equipment (chillers, boilers, heat pumps, AHUs), distribution components (piping, ductwork, dampers), insulation, specialized controls, labor, testing, commissioning, and starting up costs."
    },
    {
      q: "Q4. Can HVAC estimates support bid preparation?",
      a: "Yes. Our accurate, granular cost breakdowns and structured bills of quantities (BOQs) make your contract proposals highly competitive while safeguarding your project profit margins."
    },
    {
      q: "Q5. Do you offer value engineering and lifecycle cost analysis?",
      a: "Absolutely. We analyze equipment efficiency, material alternatives, and long-term operations costs to improve system performance while keeping initial capital and lifecycle costs down."
    },
    {
      q: "Q6. How do HVAC estimates help with project planning?",
      a: "They prevent costly construction delays and field changes by sizing resources and matching specifications early in the design stage, aligning performative goals with actual financial capacity."
    },
    {
      q: "Q7. Are your HVAC estimates suitable for new construction and renovations?",
      a: "Yes. We support both brand-new complex commercial developments requiring complete layout take-offs, and specialized retrofit/renovation HVAC projects demanding careful spatial planning."
    },
    {
      q: "Q8. Why choose OZ Solution for HVAC cost estimation?",
      a: "We deliver data-backed accuracy, full pricing transparency, rapid turnarounds, and expert localized construction intelligence, giving you absolute confidence at the bargaining table."
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen selection:bg-yellow-500 selection:text-slate-900 overflow-x-hidden">
      
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
              MEP & HVAC Cost Estimation
            </h1>
          </ScrollReveal>
          
          <ScrollReveal variant="fadeUp" duration={0.8} delay={0.15}>
            <p className="text-xs sm:text-sm font-mono tracking-wider text-yellow-500 uppercase">
              <span className="hover:text-yellow-400 cursor-pointer transition-colors" onClick={() => onNavigate('home')}>Home</span> / MEP & HVAC Cost Estimation
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. HVAC Cost Estimation - Intro Section */}
      <section className="py-20 bg-white" id="mep-intro">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
                HVAC Cost Estimation
              </h2>
              <div className="w-20 h-1.5 bg-yellow-500 mt-3 rounded-full" />
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2} className="space-y-4">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                For any building or renovation project to be successful, it is crucial to have an accurate estimate of HVAC costs. OZ Solution offers precise, accurate HVAC cost-estimation services that give contractors, developers, engineers, and consultants the information they need to plan with confidence. Our estimates are meant to help you make better budget decisions, reduce financial risk, and ensure HVAC systems are delivered on time and within the agreed-upon scope.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Our <strong className="text-slate-900 font-semibold">HVAC budgeting and cost control</strong> services provide project teams with clear, accurate, and complete cost information from the early design and HVAC Load Calculations stages through final contract submissions. This helps them make smart decisions at every level.
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
                  src="https://ozestimatesolutions.com.au/wp-content/uploads/2024/11/construction-silhouette-1-scaled.jpg" 
                  alt="HVAC Estimator working on blueprints" 
                  className="w-full h-full object-cover max-h-[480px] filter hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded floating active tag */}
                <div className="absolute top-4 left-4 bg-slate-900/90 text-white font-mono text-[10px] tracking-widest uppercase py-1.5 px-3 rounded border border-white/10 backdrop-blur-sm">
                  Active Coordination
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
      {/* 3. Full Breakdown Section */}
      <section className="py-20 bg-[#1e293b] text-white" id="mep-breakdown">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column with circular badge overlay & scroll-based rotate */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal variant="fadeLeft" className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative">
                  <img 
                    src="https://ozestimatesolutions.com.au/wp-content/uploads/2024/11/man-making-measurements-building-scaled.jpg" 
                    alt="Workmen reviewing details" 
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
                    <span className="text-2xl sm:text-3xl font-display font-black leading-none tracking-tight">15+</span>
                    <span className="text-[9px] uppercase font-mono font-extrabold tracking-widest mt-1 text-center leading-tight">Years Exp</span>
                    <span className="text-[7px] text-slate-800 font-sans font-bold leading-none mt-0.5 uppercase tracking-wide">Estimation</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal variant="fadeRight" delay={0.1}>
                <span className="inline-block text-xs font-mono font-bold tracking-[0.2em] text-yellow-500 uppercase">
                  Service Breakdown
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight leading-tight mt-1 text-white">
                  Full breakdown of HVAC Cost Estimation
                </h2>
                <div className="w-16 h-1 bg-yellow-500 mt-3 rounded-full" />
              </ScrollReveal>

              <ScrollReveal variant="fadeRight" delay={0.2} className="space-y-4">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  OZ Solution provides comprehensive HVAC & Specialized Services covering all key costs. Here are the costs we think will be involved in HVAC:
                </p>

                {/* List items with nice custom layouts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    "Parts and equipment for HVAC systems",
                    "Piping, ductwork, and other parts",
                    "Equipment, material, and labor costing",
                    "Costs of labor and installation",
                    "Costs for testing, commissioning, and starting up"
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 bg-slate-800/40 border border-white/5 hover:border-yellow-500/30 p-3.5 rounded-lg transition-colors"
                    >
                      <div className="bg-yellow-500/10 text-yellow-500 p-1.5 rounded-md mt-0.5 shrink-0">
                        <Check className="w-4 h-4 stroke-[3px]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {item === "Equipment, material, and labor costing" ? (
                          <strong className="text-yellow-400 font-bold">{item}</strong>
                        ) : item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2 italic border-l-2 border-yellow-500/40 pl-4">
                  By tracking all direct and indirect costs, we take the guesswork out of the equation and ensure there are no unforeseen cost overruns later in the project lifecycle.
                </p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Making Smart Financial Choices */}
      <section className="py-20 bg-white" id="mep-financial-choices">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <ScrollReveal variant="fadeRight">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-yellow-600 uppercase">
                Aesthetic Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight mt-1">
                Making Smart Financial Choices
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mt-3 rounded-full" />
            </ScrollReveal>
            
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Our <strong className="text-slate-900 font-semibold">HVAC project cost estimation</strong> services help clients understand all project costs before work begins. Stakeholders can easily compare multiple systems, equipment, and design options when they have clear, detailed cost information.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column (Yellow Accent Vertical line) */}
          <div className="lg:col-span-7 border-l-4 border-yellow-500 pl-6 lg:pl-10 space-y-6">
            <ScrollReveal variant="fadeLeft" delay={0.1}>
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                This information helps people make smart choices about:
              </h4>
              
              <ul className="space-y-4 mt-4 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                  <span>Detailed HVAC ducting and piping take-offs help choose and size equipment</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                  <span>Changes to the design and possibilities for <strong className="text-slate-900 font-semibold">value engineering for HVAC systems</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                  <span>Changes to the budget that are in line with performance goals</span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal variant="fadeLeft" delay={0.2} className="pt-2">
              <p className="text-sm text-slate-500 leading-relaxed font-sans italic bg-slate-100 p-4 rounded border-l-4 border-slate-300">
                We help clients prevent costly changes and delays during construction by determining early on how much things will cost.
              </p>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>

      {/* 5. Tender Preparation and Bid Support */}
      <section className="py-20 bg-slate-100 border-y border-slate-200" id="mep-tender-prep">
        <div className="w-full px-4 sm:px-8 lg:px-12 space-y-12">
          
          <ScrollReveal variant="fadeDown" className="text-center space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-yellow-600 uppercase">
              Bid Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
              Tender Preparation and Bid Support
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Box 1 with left yellow highlight */}
            <ScrollReveal variant="fadeRight" className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-yellow-500 space-y-4">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                OZ Solution's <strong className="text-slate-950 font-bold">HVAC bid estimation</strong> services are essential for preparing bids and competing for contracts. Our detailed cost breakdowns help contractors and consultants prepare proposals that accurately reflect the project's needs.
              </p>
            </ScrollReveal>

            {/* Box 2 with left yellow highlight */}
            <ScrollReveal variant="fadeLeft" className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-yellow-500 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                We help with:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                  <span>Detailed BOQs for HVAC work</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                  <span>Checking prices for bids and proposals</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                  <span>Comparing the costs of different design options</span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 font-mono font-bold uppercase pt-1 border-t border-slate-100">
                This level of accuracy makes bids more competitive while preserving profit margins.
              </p>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 6. Value Engineering & Lifecycle - Dark Overlay Section */}
      <section className="py-24 bg-[#1a2631] text-white relative overflow-hidden" id="mep-value-engineering">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-8 max-w-4xl mx-auto">
          <ScrollReveal variant="fadeDown" className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-yellow-400 uppercase">
              Financial Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
              Value Engineering and Lifecycle HVAC cost analysis
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1} className="space-y-6 max-w-4xl mx-auto text-slate-300">
            <p className="text-sm sm:text-base leading-relaxed">
              OZ Solution helps clients achieve long-term efficiency by offering value engineering and lifecycle cost analysis in addition to upfront construction expenditures. When we estimate the cost of HVAC, we consider the effectiveness of MEP coordination drawings, its performance, maintenance costs, and lifespan.
            </p>
            <p className="text-sm sm:text-base leading-relaxed font-sans">
              We help improve HVAC system performance while keeping costs in check by evaluating <strong className="text-yellow-400 font-bold">HVAC materials and labor cost estimates</strong>. This method ensures that systems not only stay within budget but also deliver long-term value by becoming energy-efficient and reducing operating costs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Improved system performance while keeping costs down */}
      <section className="py-20 bg-white" id="mep-system-performance">
        <div className="w-full px-4 sm:px-8 lg:px-12 space-y-12">
        <ScrollReveal variant="fadeDown" className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-yellow-600 uppercase">
            Operational Optimization
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Improved system performance while keeping costs down
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 with left yellow highlight indicator */}
          <ScrollReveal variant="fadeRight" className="bg-white p-8 rounded-xl border border-slate-200 border-l-4 border-l-yellow-500 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Our <strong className="text-slate-900 font-semibold">HVAC Budgeting</strong> and cost-estimating process is quite similar to the criteria for designing and engineering HVAC systems. This ensures that cost-effectiveness never compromises system performance, comfort, or compliance.
            </p>
          </ScrollReveal>

          {/* Card 2 with left yellow highlight indicator */}
          <ScrollReveal variant="fadeLeft" className="bg-white p-8 rounded-xl border border-slate-200 border-l-4 border-l-yellow-500 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              We help you find the right balance between performance goals and budget by carefully looking at materials, installation methods, and system configurations. The end result is an HVAC system that works well and stays under budget.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

      {/* 8. Why Choose OZ Solution - Dark Parallax background with technical overlay */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        {/* Manifold valves background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://ozestimatesolutions.com.au/wp-content/uploads/2024/11/construction-silhouette-scaled.jpg" 
            alt="Technical valves and manifold pressure gauges" 
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
              Why Choose OZ Solution for HVAC Cost Estimation?
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1} className="space-y-5 bg-slate-950/60 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-white/5 shadow-2xl">
            <ul className="space-y-4 text-xs sm:text-sm md:text-base text-slate-200">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Accurate <strong className="text-white font-bold">HVAC cost planning</strong> is based on data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Full openness about the costs of equipment, labor, and installation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Help with the early stages of <strong className="text-white font-bold">HVAC project financial forecasting</strong>, design, bidding, and building</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Knowledge of value engineering and analyzing costs across the life of a product</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 p-0.5 mt-0.5 shrink-0 font-bold">✔</span>
                <span>Less financial risk and better control over projects</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 mt-6">
              <p className="text-xs sm:text-sm text-yellow-400 font-mono font-bold tracking-wider uppercase leading-relaxed">
                Our HVAC cost prediction services at OZ Solution help you plan better, make decisions faster, and finish your project on time.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Frequently Asked Questions */}
      <section className="py-24 bg-white" id="mep-faq">
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
      <section className="py-20 bg-slate-900 text-white relative" id="mep-cta">
        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 max-w-4xl mx-auto text-center space-y-8">
          
          <ScrollReveal variant="fadeDown" className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-yellow-400 uppercase">
              Free Proposal Support
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
              OZ Solution Can Help You Figure Out How Much Your HVAC Will Cost
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1} className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              OZ Solution offers reliable <strong className="text-white font-bold">HVAC cost-estimation</strong> services tailored to your project needs, whether you are planning a new building project or improving an existing HVAC design. Our <strong className="text-yellow-400 font-semibold">HVAC cost consultants' USA</strong> knowledge helps you keep costs down, work more efficiently, and install HVAC systems with confidence.
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
                 +1 (508) 888 1927
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
                <span>Calculate My HVAC Estimate Now</span>
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
