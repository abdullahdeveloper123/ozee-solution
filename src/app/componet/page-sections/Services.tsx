import React, { useState } from 'react';
import { 
  CheckCircle2, Compass, Cpu, Layers, Hammer, Settings,
  Calculator, ArrowRight, Laptop2, HelpCircle 
} from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

interface ServicesProps {
  onNavigate: (route: string) => void;
  onOpenEstimationTool: () => void;
}

export default function Services({ onNavigate, onOpenEstimationTool }: ServicesProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'estimations' | 'drawings' | 'bim'>('all');

  const services = [
    {
      id: 'qty',
      category: 'estimations',
      title: 'Quantity Take-Off & Material BOQs',
      timeframe: '24-48 Hours',
      software: 'Bluebeam, PlanSwift, On-Screen Takeoff',
      description: 'Granular material quantities cataloging. We organize every dimension from structural concrete cubic yards to single trim screws using CSI MasterFormat indexing divisions.',
      bullets: [
        'Organized in direct CSV or Excel formats ready for local supplier bidding',
        'Itemized structural rebar and steel tonnage schedules included',
        'Geotechnical excavation and grading volume estimates'
      ]
    },
    {
      id: 'mep',
      category: 'estimations',
      title: 'MEP & HVAC Trades Cost Estimation',
      timeframe: '48-72 Hours',
      software: 'Trimble AutoBid, FastPIPE, Revit MEP',
      description: 'Trade-specific costing covering mechanical piping, electrical wire lengths, sub-panels, conduit schedules, plumbing fixtures, and localized fire sprinkler density counts.',
      bullets: [
        'HVAC ductwork fabrication material indexing',
        'Structural power and low-voltage electrical takeoffs',
        'Plumbing wet-utility riser diagrams measurement'
      ]
    },
    {
      id: 'bim',
      category: 'bim',
      title: 'BIM 3D Visual Cost Modeling',
      timeframe: '72-96 Hours',
      software: 'Autodesk Revit, Navisworks, Trimble',
      description: 'Dynamic cost-integration. We insert detailed coordinate metrics and material price tags directly into native BIM structures so pricing scales list instantly if designs shift.',
      bullets: [
        'Automatic quantity takeoff synchronization from 3D Revit components',
        'Visual cost-overrun highlight map inside structural assemblies',
        'Seamless integration with construction project scheduling models'
      ]
    },
    {
      id: 'tenderbid',
      category: 'estimations',
      title: 'Tender & Bid Estimates',
      timeframe: '3-5 Days',
      software: 'RSMeans, OST (On-Screen Takeoff), Bluebeam',
      description: 'End-to-end bid estimating including detailed tender preparation, competitive pricing strategy, and full risk-based cost breakdowns. We help you submit competitive, profitable bids.',
      bullets: [
        'Detailed construction bid level cost estimates and BOQ compliance',
        'Contingency cost estimation and comprehensive risk-based analysis',
        'Proposal support including tender documentation and bid planning'
      ]
    },
    {
      id: 'maint',
      category: 'drawings',
      title: 'Cleaning & Maintenance Cost Forecasters',
      timeframe: '3 Days',
      software: 'LifeCycle Costing Excel Algorithms',
      description: 'Life-cycle costing forecasting showing projected utilities, operational overhead, structure degradation, and maintenance reserves across 25-50 year holding schemas.',
      bullets: [
        'OpEx and CapEx future valuation depreciation charts',
        'Facility system replacement schedule projections',
        'Green energy-efficient cost saving analysis comparison'
      ]
    }
  ];

  const filteredServices = services.filter(svc => {
    if (activeFilter === 'all') return true;
    return svc.category === activeFilter;
  });

  return (
    <div className="bg-[#f8fafc] text-slate-800 py-12 md:py-20" id="services-page">
      <div className="w-full px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Header Block */}
        <ScrollReveal variant="fadeUp" duration={0.8} className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">DETAILED SERVICES SPECIFICATION</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            High Precision Cost Estimating & Architectural BIM Outputs
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
            Our estimating divisions operate under strict preconstruction review principles to translate raw digital blueprints into organized, localized CSI Masterformat material databases.
          </p>
        </ScrollReveal>

        {/* Tab Filter buttons */}
        <ScrollReveal variant="fadeUp" duration={0.8} delay={0.1} className="flex flex-wrap items-center justify-center gap-3 border-b border-slate-200 pb-4">
          {[
            { id: 'all', label: 'All Precon Services' },
            { id: 'estimations', label: 'Core Estimations & Takeoffs' },
            { id: 'drawings', label: 'Detailed Engineering Drawings' },
            { id: 'bim', label: 'Advanced 3D BIM Costing' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`py-2 px-5 rounded-full font-sans text-xs font-bold tracking-wide transition-all cursor-pointer ${
                activeFilter === tab.id 
                  ? 'bg-yellow-500 text-slate-950 shadow-md' 
                  : 'bg-white border border-slate-205 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Services List Display */}
        <div className="space-y-12">
          {filteredServices.map((svc) => (
            <ScrollReveal 
              key={svc.id}
              variant="fadeUp"
              duration={0.6}
              className="bg-white border border-slate-200/95 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              id={`service-block-${svc.id}`}
            >
              {/* Metric panel */}
              <div className="lg:col-span-4 space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-100 w-full">
                <span className="text-slate-400 font-mono text-5xl font-extrabold select-none">
                  #{svc.id.toUpperCase()}
                </span>
                
                <div className="space-y-3 pt-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block">Average Duration</span>
                    <span className="text-sm font-sans font-bold text-slate-800">{svc.timeframe}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block">Core Softwares</span>
                    <span className="text-xs font-mono font-medium text-slate-600 block">{svc.software}</span>
                  </div>
                </div>

                <button 
                  onClick={onOpenEstimationTool}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider py-3 rounded-md transition-colors cursor-pointer"
                >
                  <Laptop2 className="w-4 h-4" />
                  <span>Interactive Estimator</span>
                </button>
              </div>

              {/* Specs detailed panel */}
              <div className="lg:col-span-8 space-y-4">
                <h3 className="font-display font-bold text-slate-900 text-xl sm:text-2xl tracking-tight">
                  {svc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {svc.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  {svc.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-500 font-sans leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Banner call to action */}
        <ScrollReveal variant="fadeUp" duration={0.8} className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h2 className="font-display font-bold text-xl sm:text-3xl text-slate-100 max-w-xl mx-auto">
            Need customized takeoff schedules aligned to a complex project specification?
          </h2>
          <p className="text-xs text-slate-450 text-slate-450 max-w-lg mx-auto leading-relaxed">
            Our domestic civil technicians regularly draft specialized, multi-phase preconstruction packages matching extreme high-dense parameters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-md transition-all cursor-pointer"
            >
              Request Custom PDF Template
            </button>
          </div>
        </ScrollReveal>

      </div>

      {/* Infinite Scrolling Marquee ("last apr jo yellow div is par same like jis tarah home page par carsoul add keya hooya ha") */}
      <section className="relative w-full overflow-hidden bg-yellow-500 py-5 font-display font-black text-xs text-slate-950 uppercase tracking-widest border-y border-yellow-600 select-none mt-16">
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
