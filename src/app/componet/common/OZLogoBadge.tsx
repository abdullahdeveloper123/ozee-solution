import React from 'react';

interface OZLogoBadgeProps {
  className?: string;
}

export default function OZLogoBadge({ className = '' }: OZLogoBadgeProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`fill-current ${className}`}
      id="oz-building-logo-svg"
    >
      {/* 1. Left Building - Windows/Panels */}
      <polygon points="21.7,69.4 34.5,65.4 34.5,61.4 21.7,65.4" />
      <polygon points="21.7,63.4 34.5,59.4 34.5,55.4 21.7,59.4" />
      <polygon points="21.7,57.4 34.5,53.4 34.5,49.4 21.7,53.4" />
      <polygon points="21.7,51.4 34.5,47.4 34.5,43.4 21.7,47.4" />
      
      {/* Left Building - Roof slant top */}
      <polygon points="21.7,45.4 34.5,41.4 34.5,42.4 21.7,46.4" />
      
      {/* Left Building - Vertical divider on the right */}
      <polygon points="34.5,41.4 36.5,40.7 36.5,69.4 34.5,69.4" />

      {/* 2. Middle Building - Left Facade Windows/Panels */}
      <polygon points="42.5,69.4 52.5,66.1 52.5,63.1 42.5,66.4" />
      <polygon points="42.5,61.4 52.5,58.1 52.5,55.1 42.5,58.4" />
      <polygon points="42.5,53.4 52.5,50.1 52.5,47.1 42.5,50.4" />
      <polygon points="42.5,45.4 52.5,42.1 52.5,39.1 42.5,42.4" />
      <polygon points="42.5,37.4 52.5,34.1 52.5,31.1 42.5,34.4" />
      <polygon points="42.5,29.4 52.5,26.1 52.5,23.1 42.5,26.4" />
      
      {/* Middle Building - Vertical divider */}
      <polygon points="52.5,23.1 55.2,22.2 55.2,69.4 52.5,69.4" />

      {/* 3. Letter "O" Facade - Transparent Center via EvenOdd fill rule */}
      <path 
        d="M56.5,43.4 L65.5,46.4 L65.5,69.4 L56.5,69.4 Z M59.5,48.4 L62.5,49.4 L62.5,65.4 L59.5,65.4 Z" 
        fillRule="evenodd" 
      />

      {/* 4. Letter "Z" Facade */}
      <polygon points="66.5,46.7 75.5,49.7 75.5,53.7 70.5,53.7 75.5,64.4 75.5,69.4 66.5,69.4 66.5,65.4 71.5,65.4 66.5,54.7 66.5,46.7" />

      {/* 5. Far-Right Building with Transparent Window Slots */}
      <path 
        d="M75.5,35.4 L78.5,36.4 L78.5,69.4 L75.5,69.4 Z M76.3,40 H77.7 V42 H76.3 Z M76.3,44 H77.7 V46 H76.3 Z M76.3,48 H77.7 V50 H76.3 Z M76.3,52 H77.7 V54 H76.3 Z M76.3,56 H77.7 V58 H76.3 Z M76.3,60 H77.7 V62 H76.3 Z M76.3,64 H77.7 V66 H76.3 Z" 
        fillRule="evenodd" 
      />

      {/* 6. Ground Lines */}
      <rect x="21" y="71.4" width="58" height="2.2" />
      <rect x="21" y="75.6" width="58" height="2.2" />
      
      {/* 7. Vertical Ground Support Divider */}
      <polygon points="52.5,69.4 55.2,69.4 55.2,77.8 52.5,77.8" />
    </svg>
  );
}
