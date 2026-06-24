import React, { useState } from 'react';
import Logo from './Logo';
import { PageRoute } from '@/types';
import { ChevronDown, Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentPath: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Nav items from Pic 2
  const navItems = [
    { label: 'Home', path: 'home' as PageRoute },
    { label: 'About Us', path: 'about-us' as PageRoute },
    { 
      label: 'Services', 
      path: 'services' as PageRoute, 
      hasDropdown: true,
      subItems: [
        { label: 'Quantity Take-Off & BOQs', link: 'quantity-takeoff' },
        { label: 'Detailed & Conceptual Estimation', link: 'detailed-estimation' },
        { label: 'MEP & HVAC Cost Estimation', link: 'mep-hvac-estimation' },
        { label: 'BIM 3D Cost Modeling', link: 'bim-3d-modeling' },
        { label: 'Tender & Bid Estimates', link: 'tender-bid-estimates' }
      ]
    },
    { label: 'Blog', path: 'blog' as PageRoute },
    { label: 'Privacy Policy', path: 'privacy-policy' as PageRoute },
    { label: 'Contact Us', path: 'contact-us' as PageRoute }
  ];

  const handleNavClick = (path: PageRoute) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2e3f4f] text-white border-b border-white/5 shadow-md" id="oz-solution-header">
      {/* Upper bar for contact (extra premium structure feel) */}
      <div className="bg-[#24323f]/90 border-b border-white/5 text-slate-300 text-xs py-2 px-4 sm:px-8 lg:px-12 hidden sm:flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-mono">
            <Phone className="w-3.5 h-3.5 text-yellow-500" />
            +1 (507) 778 1624
          </span>
          <span className="flex items-center gap-1.5 font-mono">
            <Mail className="w-3.5 h-3.5 text-yellow-500" />
            info@ozsolution.com
          </span>
        </div>
        <div className="text-[10px] font-mono tracking-wider text-slate-400">
          CONSTRUCTION ESTIMATION & BIM TECHNICAL SERVICES
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo light={true} onNavigate={() => handleNavClick('home')} />

        {/* Desktop Navigation Menu (Matching pic 2 exactly) */}
        <nav className="hidden lg:flex items-center gap-8 font-sans">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div 
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <button 
                    onClick={() => handleNavClick(item.path)}
                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-yellow-400 cursor-pointer ${
                      currentPath === item.path ? 'text-yellow-400' : 'text-slate-100'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  <div className={`absolute left-0 mt-2 w-72 bg-[#24323f] rounded-lg shadow-xl border border-white/10 overflow-hidden py-2 transform origin-top transition-all duration-200 ${
                    isServicesDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}>
                    {item.subItems?.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => handleNavClick(sub.link as PageRoute)}
                        className="w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-slate-700/50 hover:text-yellow-400 transition-colors font-sans"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className={`text-[15px] font-medium transition-colors hover:text-yellow-400 cursor-pointer ${
                  currentPath === item.path ? 'text-yellow-400' : 'text-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Button matching image no. 2 */}
        <div className="hidden lg:flex items-center">
          <button 
            id="header-get-in-touch"
            onClick={() => handleNavClick('contact-us')}
            className="group flex items-center bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-sm tracking-wide rounded-md overflow-hidden pl-5 transition-transform active:scale-95 duration-200 cursor-pointer"
          >
            <span className="mr-4 select-none">Get In Touch</span>
            <div className="bg-[#1a2631] text-white p-3.5 group-hover:bg-slate-900 transition-colors">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-200 hover:text-yellow-500 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#24323f] border-t border-white/5 py-4 px-4 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-white/5 last:border-0 pb-1">
              <button
                onClick={() => handleNavClick(item.path)}
                className={`w-full text-left py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${
                  currentPath === item.path ? 'text-yellow-400 bg-slate-800' : 'text-slate-200 hover:bg-slate-800/10'
                }`}
              >
                {item.label}
              </button>
              {item.hasDropdown && (
                <div className="pl-6 py-1 space-y-1">
                  {item.subItems?.map((sub) => (
                    <button
                      key={sub.label}
                      onClick={() => handleNavClick(sub.link as PageRoute)}
                      className="w-full text-left py-1.5 px-3 text-xs text-slate-400 hover:text-yellow-400 transition-colors"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <button
              onClick={() => handleNavClick('contact-us')}
              className="w-full flex items-center justify-between bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold py-3 px-5 rounded-md text-sm tracking-wide transition-all"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
