'use client';
import React, { useState, useEffect } from 'react';
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
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(true);

  // Lock body scroll when sidebar open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

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
    setIsMobileServicesOpen(false);
  };

  const closeSidebar = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2e3f4f] text-white border-b border-white/5 shadow-md" id="oz-solution-header">
      {/* Top contact bar */}
      <div className="bg-[#24323f]/90 border-b border-white/5 text-slate-300 text-xs py-2 px-4 sm:px-8 lg:px-12 hidden sm:flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-mono">
            <Phone className="w-3.5 h-3.5 text-yellow-500" />
           +1 (508) 888 1927
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

        {/* Desktop Nav */}
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

        {/* Desktop CTA */}
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

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-slate-200 hover:text-yellow-500 focus:outline-none p-2 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* ── Mobile Sidebar ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-[#1e2c38] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10 bg-[#24323f]">
          <Logo light={true} onNavigate={() => handleNavClick('home')} />
          <button
            onClick={closeSidebar}
            className="text-slate-300 hover:text-yellow-400 transition-colors p-1"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.label} className="rounded-md overflow-hidden">
                  {/* Services toggle row */}
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`w-full flex items-center justify-between py-3 px-4 text-sm font-semibold rounded-md transition-colors ${
                      currentPath === item.path
                        ? 'text-yellow-400 bg-slate-800/60'
                        : 'text-slate-100 hover:bg-slate-700/40 hover:text-yellow-400'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-yellow-500 transition-transform duration-300 ${
                        isMobileServicesOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {/* Collapsible sub-items */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 py-1 space-y-0.5 border-l-2 border-yellow-500/40 ml-4 mt-1 mb-2">
                      {item.subItems?.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleNavClick(sub.link as PageRoute)}
                          className="w-full text-left py-2 px-3 text-xs text-slate-400 hover:text-yellow-400 hover:bg-slate-700/30 rounded-md transition-colors"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className={`w-full text-left py-3 px-4 text-sm font-semibold rounded-md transition-colors ${
                  currentPath === item.path
                    ? 'text-yellow-400 bg-slate-800/60'
                    : 'text-slate-100 hover:bg-slate-700/40 hover:text-yellow-400'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Sidebar footer CTA */}
        <div className="px-4 py-5 border-t border-white/10">
          <button
            onClick={() => handleNavClick('contact-us')}
            className="w-full flex items-center justify-between bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold py-3 px-5 rounded-md text-sm tracking-wide transition-all cursor-pointer"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
