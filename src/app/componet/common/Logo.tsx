import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  light?: boolean;
  onNavigate?: () => void;
}

export default function Logo({ className = '', onNavigate }: LogoProps) {
  return (
    <div
      className={`flex items-center select-none cursor-pointer ${className}`}
      id="oz-solution-logo"
      onClick={onNavigate}
    >
      <Image
        src="/assets/logo3.png"
        alt="OZ Solution Logo"
        width={160}
        height={90}
        className="object-contain h-12 w-auto"
        priority
      />
    </div>
  );
}
