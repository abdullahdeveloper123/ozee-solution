import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  onNavigate?: () => void;
}

export default function Logo({ className = '', light = true, onNavigate }: LogoProps) {
  return (
    <div 
      className={`flex flex-col items-start select-none cursor-pointer ${className}`} 
      id="oz-solution-logo"
      onClick={onNavigate}
    >
      <div className="flex items-center gap-1.5">
        {/* Styled Vector Construction 'A' & Abstract Architectural Dome */}
        <div className="relative flex items-center h-10 w-11 mt-1">
          {/* Yellow Crane-themed 'A' */}
          <svg
            viewBox="0 0 50 50"
            className="w-8 h-8 text-yellow-500 fill-current"
            aria-hidden="true"
          >
            {/* Architectural Crane arm or truss-like structure inside A */}
            <path d="M12 40 L22 10 H28 L38 40 H31 L28 31 H22 L19 40 Z M23.5 26 H26.5 L25 21 Z" />
            <path d="M10 42 H40 V45 H10 Z" className="text-yellow-600" />
            {/* Crane gear or arm */}
            <circle cx="25" cy="14" r="2.5" className="text-slate-200" />
          </svg>
          
          {/* Elegant Architectural dome emblem tucked closely */}
          <div className="absolute -right-1 bottom-1 w-6 h-6 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className={`w-5 h-5 ${light ? 'text-cyan-400' : 'text-cyan-600'} fill-current`}
            >
              <path d="M12 2A10 10 0 0 0 2 12h2a8 8 0 0 1 16 0h2A10 10 0 0 0 12 2zm-5 10c0-2.8 2.2-5 5-5s5 2.2 5 5H7z" />
              <rect x="11" y="12" width="2" height="6" className="text-yellow-400" />
              <rect x="7" y="13" width="1.5" height="5" />
              <rect x="15" y="13" width="1.5" height="5" />
            </svg>
          </div>
        </div>

        {/* Wordmark */}
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline">
            <span className="text-yellow-500 font-display font-bold text-2xl tracking-tight leading-none">OZ</span>
            <span className={`font-sans font-semibold text-xl tracking-wide leading-none ml-1 ${light ? 'text-white' : 'text-slate-800'}`}>
              Solution
            </span>
          </div>
        </div>
      </div>
      
      {/* Sub-tagline */}
      <div className="flex items-center gap-1 w-full pl-0.5 mt-0.5">
        <div className={`h-[1px] w-5 ${light ? 'bg-slate-600' : 'bg-slate-300'}`} />
        <span className={`text-[8px] font-medium tracking-widest uppercase truncate whitespace-nowrap ${light ? 'text-slate-400' : 'text-slate-500'}`}>
          Innovate with Confidence
        </span>
      </div>
    </div>
  );
}
