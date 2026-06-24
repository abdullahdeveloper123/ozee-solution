 'use client';

import React, { createContext, type ReactNode, useContext, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Header from './app/componet/common/Header';
import Footer from './app/componet/common/Footer';
import Loader from './app/componet/common/Loader';
import { PageRoute } from './types';
import { Calculator, X, Sparkles, Check, ChevronRight, UploadCloud, AlertCircle } from 'lucide-react';
import { routePaths } from './config/routes';

interface AppShellProps {
  children?: ReactNode;
}

interface SiteNavigationContextValue {
  navigate: (route: PageRoute) => void;
  openEstimator: () => void;
}

const SiteNavigationContext = createContext<SiteNavigationContextValue | null>(null);

export function useSiteNavigation(): SiteNavigationContextValue {
  const context = useContext(SiteNavigationContext);
  if (!context) throw new Error('useSiteNavigation must be used inside App');
  return context;
}

export default function App({ children }: AppShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = (Object.entries(routePaths).find(([, path]) => path === pathname)?.[0] ?? 'home') as PageRoute;
  const [isNavigating, setIsNavigating] = useState(false);
  
  // Interactive Estimation Tool State
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [estStep, setEstStep] = useState(1);
  const [estData, setEstData] = useState({
    sector: 'commercial',
    sqft: 5000,
    divisions: ['concrete', 'metals', 'electrical'],
    urgency: 'normal',
    blueprintName: '',
    fullName: '',
    corpEmail: '',
  });
  const [takeoffSubmitted, setTakeoffSubmitted] = useState(false);

  // Dynamic route changer with beautiful delays displaying Pic 4 loader
  const handleNavigate = (newRoute: PageRoute) => {
    if (newRoute === currentPath) return;
    
    setIsNavigating(true);
    // Mimic enterprise load sequence requested in the prompt
    setTimeout(() => {
      router.push(routePaths[newRoute]);
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Let translation complete beautifully
      setTimeout(() => {
        setIsNavigating(false);
      }, 400);

    }, 800);
  };

  const handleEstimationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTakeoffSubmitted(true);
    setTimeout(() => {
      setTakeoffSubmitted(false);
      setEstStep(1);
      setIsEstimatorOpen(false);
      setEstData({
        sector: 'commercial',
        sqft: 5000,
        divisions: ['concrete', 'metals', 'electrical'],
        urgency: 'normal',
        blueprintName: '',
        fullName: '',
        corpEmail: '',
      });
    }, 4000);
  };

  const handleMockUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setEstData({ ...estData, blueprintName: e.target.files[0].name });
    }
  };

  // Pricing engine for customized takeoff wizard
  const calculateTotalEstimate = () => {
    let baseRate = 0.20; // unit rate per sqft
    if (estData.sector === 'residential') baseRate = 0.15;
    if (estData.sector === 'industrial') baseRate = 0.28;
    if (estData.sector === 'infrastructure') baseRate = 0.40;

    const divisionsMultiplier = 1 + (estData.divisions.length * 0.15); // +15% per CSI division
    let urgencyMultiplier = 1.0;
    if (estData.urgency === 'fasttrack') urgencyMultiplier = 1.3;
    if (estData.urgency === 'premium') urgencyMultiplier = 1.5;

    const subtotal = estData.sqft * baseRate * divisionsMultiplier * urgencyMultiplier;
    return Math.round(subtotal);
  };

  return (
    <SiteNavigationContext.Provider value={{
      navigate: handleNavigate,
      openEstimator: () => {
        setIsEstimatorOpen(true);
        setEstStep(1);
      },
    }}>
    <div className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-slate-50 relative overflow-x-hidden">
      
      {/* Route Change Global Transition Loader based on Pic 4 */}
      <Loader isLoading={isNavigating} />

      {/* Styled Header */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Content Stage */}
      <main className="flex-1 min-h-[60vh]">
        {children}
      </main>

      {/* Styled Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Step-by-Step Takeoff Estimator overlay modal */}
      {isEstimatorOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl border border-slate-205 relative animate-fadeIn max-h-[90vh] flex flex-col justify-between">
            {/* Top Indicator */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-yellow-500" />
            
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-[#1a2631] text-white">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-yellow-500" />
                <span className="font-display font-semibold text-sm uppercase tracking-wider">OZ Solution Interactive Takeoff Wizard</span>
              </div>
              <button 
                onClick={() => setIsEstimatorOpen(false)}
                className="text-slate-400 hover:text-white p-1 transition-colors cursor-pointer"
                aria-label="Close estimator"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stepper Progress bar */}
            <div className="bg-slate-50 border-b border-slate-100 px-6 py-3 flex items-center justify-between text-xs font-mono font-bold text-slate-400">
              <span className={estStep === 1 ? 'text-yellow-600' : 'text-slate-500'}>1. Sector Parameters</span>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <span className={estStep === 2 ? 'text-yellow-600' : 'text-slate-500'}>2. CSI Divisions</span>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <span className={estStep === 3 ? 'text-yellow-600' : 'text-slate-500'}>3. Secure Proposal</span>
            </div>

            {/* Form Stage */}
            <div className="p-6 overflow-y-auto flex-1">
              {takeoffSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-xl text-slate-900">Takeoff Proposal Requested Successfully!</h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed max-w-sm mx-auto">
                    Thank you, <strong className="text-slate-800">{estData.fullName}</strong>. Our estimating coordinator will verify your uploaded blueprints (<em className="text-slate-600">{estData.blueprintName || 'preliminary-sketches.pdf'}</em>) against localized building indexes. Expect a full proposal sheet inside 4 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEstimationSubmit} className="space-y-6">
                  
                  {/* STEP 1: PROJECT PARAMETERS */}
                  {estStep === 1 && (
                    <div className="space-y-5 animate-fadeIn">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-slate-700">Project Building Sector</label>
                        <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                          {[
                            { key: 'residential', label: 'Residential Block' },
                            { key: 'commercial', label: 'Commercial Hub' },
                            { key: 'industrial', label: 'Industrial Complex' },
                            { key: 'infrastructure', label: 'Civil/Infrastructure' }
                          ].map((sec) => (
                            <button
                              key={sec.key}
                              type="button"
                              onClick={() => setEstData({ ...estData, sector: sec.key })}
                              className={`py-3 px-4 border rounded-lg text-left transition-all ${
                                estData.sector === sec.key 
                                  ? 'border-yellow-500 bg-yellow-500/10 text-yellow-600 font-bold' 
                                  : 'border-slate-220 bg-slate-50 text-slate-600 hover:bg-slate-100'
                              }`}
                            >
                              {sec.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-semibold">
                          <label className="text-slate-700">Gross Physical Footprint Area (Sq.Ft)</label>
                          <span className="text-yellow-600 font-mono font-bold">{estData.sqft.toLocaleString()} sqft</span>
                        </div>
                        <input 
                          type="range"
                          min="1000"
                          max="250000"
                          step="1000"
                          value={estData.sqft}
                          onChange={(e) => setEstData({ ...estData, sqft: Number(e.target.value) })}
                          className="w-full h-1.5 bg-slate-205 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                          <span>1,000 sqft</span>
                          <span>250,000 sqft</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: CSI DIVISIONS */}
                  {estStep === 2 && (
                    <div className="space-y-5 animate-fadeIn">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Select Required Takeoff Divisions</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {[
                            { key: 'concrete', label: 'Concrete (CSI Div 03)' },
                            { key: 'masonry', label: 'Masonry (CSI Div 04)' },
                            { key: 'metals', label: 'Structural Metals (CSI Div 05)' },
                            { key: 'wood', label: 'Wood & Plastics (CSI Div 06)' },
                            { key: 'thermal', label: 'Thermal & Moisture (CSI Div 07)' },
                            { key: 'electrical', label: 'Electrical & low-volt (CSI Div 26)' },
                            { key: 'hvac', label: 'HVAC Ductworks (CSI Div 23)' }
                          ].map((div) => {
                            const isChecked = estData.divisions.includes(div.key);
                            return (
                              <button
                                key={div.key}
                                type="button"
                                onClick={() => {
                                  const list = isChecked 
                                    ? estData.divisions.filter(item => item !== div.key) 
                                    : [...estData.divisions, div.key];
                                  setEstData({ ...estData, divisions: list });
                                }}
                                className={`py-2.5 px-3 border rounded-lg text-left transition-all text-xs flex items-center justify-between ${
                                  isChecked 
                                    ? 'border-cyan-500 bg-cyan-50/50 text-cyan-700 font-bold' 
                                    : 'border-slate-220 bg-slate-50 text-slate-600 hover:bg-slate-100'
                                }`}
                              >
                                <span>{div.label}</span>
                                {isChecked && <Check className="w-4 h-4 text-cyan-600 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-slate-700">Project Deliverables Speed</label>
                        <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider">
                          {[
                            { key: 'normal', label: 'Standard (5 Days)' },
                            { key: 'fasttrack', label: 'Fast (+30%)' },
                            { key: 'premium', label: 'Express (+50%)' }
                          ].map((u) => (
                            <button
                              key={u.key}
                              type="button"
                              onClick={() => setEstData({ ...estData, urgency: u.key })}
                              className={`py-2 text-center border rounded transition-all ${
                                estData.urgency === u.key 
                                  ? 'border-yellow-500 bg-yellow-500/10 text-yellow-600' 
                                  : 'border-slate-200 bg-slate-50 text-slate-400 hover:border-slate-300'
                              }`}
                            >
                              {u.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: SECURE PROPOSAL & MOCK UPLOAD */}
                  {estStep === 3 && (
                    <div className="space-y-5 animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name*</label>
                          <input 
                            type="text" 
                            required
                            placeholder="e.g. John Doe"
                            value={estData.fullName}
                            onChange={(e) => setEstData({ ...estData, fullName: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-300 rounded-md py-2.5 px-3.5 text-sm focus:outline-none focus:border-yellow-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email*</label>
                          <input 
                            type="email" 
                            required
                            placeholder="e.g. john@buildcorp.com"
                            value={estData.corpEmail}
                            onChange={(e) => setEstData({ ...estData, corpEmail: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-300 rounded-md py-2.5 px-3.5 text-sm focus:outline-none focus:border-yellow-500"
                          />
                        </div>
                      </div>

                      {/* Mock upload target block */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-slate-700">Upload Project Diagrams / Blueprint PDF *</label>
                        <div className="border-2 border-dashed border-slate-200 hover:border-yellow-500/80 rounded-xl p-5 text-center transition-colors relative cursor-pointer bg-slate-50">
                          <input 
                            type="file" 
                            accept=".pdf,.png,.jpg,.dwg"
                            onChange={handleMockUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                          <span className="text-xs font-mono font-medium block text-slate-600">
                            {estData.blueprintName || 'Drag & Drop or Click to Select File'}
                          </span>
                          <span className="text-[10px] text-slate-400 font-sans block mt-1">Supports PDF, DWG, PNG formats</span>
                        </div>
                      </div>

                      {/* Ballpark Pricing board summarized inside visual cards */}
                      <div className="bg-[#1e2530] text-slate-200 p-4 rounded-xl border border-slate-700/80 space-y-2 font-sans text-xs">
                        <h4 className="font-display font-semibold text-yellow-400 uppercase tracking-widest text-[9px]">Preconstruction Fee Summary</h4>
                        <div className="flex justify-between">
                          <span>Base takeoff fee:</span>
                          <span className="font-mono">${(estData.sqft * 0.15).toLocaleString()} USD</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Divisions count ({estData.divisions.length}):</span>
                          <span>+{(estData.divisions.length * 15)}% adjustment</span>
                        </div>
                        <div className="border-t border-slate-700 pt-2 mt-2 flex justify-between font-bold text-sm text-white">
                          <span>Itemized Sub-Total:</span>
                          <span className="font-mono text-yellow-400">${calculateTotalEstimate().toLocaleString()} USD</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Nav Controls */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    {estStep > 1 ? (
                      <button
                        type="button"
                        onClick={() => setEstStep(estStep - 1)}
                        className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors uppercase font-mono cursor-pointer"
                      >
                        ← Back
                      </button>
                    ) : (
                      <span />
                    )}

                    {estStep < 3 ? (
                      <button
                        type="button"
                        onClick={() => setEstStep(estStep + 1)}
                        className="bg-[#2e3f4f] hover:bg-[#24323f] text-yellow-400 px-6 py-2.5 rounded text-xs font-bold uppercase transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>Continue</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 px-6 py-2.5 rounded text-xs font-extrabold uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 fill-slate-950" />
                        <span>Submit Project Bid Takeoff</span>
                      </button>
                    )}
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
    </SiteNavigationContext.Provider>
  );
}
