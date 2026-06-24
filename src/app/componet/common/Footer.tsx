import React, { useState } from 'react';
import Logo from './Logo';
import { PageRoute } from '@/types';
import { Mail, Phone, MapPin, Send, HelpCircle, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socials = [
    { label: 'X-Twitter', icon: '🇽', href: 'https://twitter.com/ozsolution' },
    { label: 'Facebook', icon: '🇫', href: 'https://facebook.com/ozsolution' },
    { label: 'LinkedIn', icon: '🇱', href: 'https://linkedin.com/company/ozsolution' },
    { label: 'Instagram', icon: '🇮', href: 'https://instagram.com/ozsolution' },
    { label: 'Discord', icon: '🇩', href: 'https://discord.gg/ozsolution' }
  ];

  const quickLinks = [
    { label: 'Home', path: 'home' as PageRoute },
    { label: 'About Us', path: 'about-us' as PageRoute },
    { label: 'Service', path: 'services' as PageRoute },
    { label: 'Contact', path: 'contact-us' as PageRoute },
    { label: 'Privacy Policy', path: 'privacy-policy' as PageRoute },
    { label: 'Terms of Use', path: 'terms-of-use' as PageRoute }
  ];

  return (
    <footer className="bg-[#1f262e] text-white pt-16 pb-8 border-t border-slate-800" id="oz-solution-footer">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        
        {/* Main Content Grid matching pic 3 exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700/50">
          
          {/* Logo & Working Hours Column */}
          <div className="space-y-6">
            <Logo light={true} onNavigate={() => onNavigate('home')} />
            
            <div className="pt-4 border-t border-slate-700/50">
              <h4 className="text-yellow-500 font-display font-semibold text-sm uppercase tracking-wider mb-3">
                Working Hours:
              </h4>
              <p className="text-sm font-sans text-slate-300 font-medium">
                Monday – Friday: 9:00 AM – 5:00 PM
              </p>
              <p className="text-sm font-sans text-slate-400">
                Saturday – Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Information Column */}
          <div className="space-y-4">
            <h4 className="text-slate-100 font-display font-semibold text-base tracking-wide border-l-4 border-yellow-500 pl-3">
              Contact Information
            </h4>
            <div className="flex items-start gap-3 pt-2 text-sm text-slate-300 font-sans">
              <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
              <span>
                15750 Fair Hill Way Apple Valley,<br />
                Minnesota 55124, USA
              </span>
            </div>
          </div>

          {/* Get In Touch Column */}
          <div className="space-y-4">
            <h4 className="text-slate-100 font-display font-semibold text-base tracking-wide border-l-4 border-yellow-500 pl-3">
              Get In Touch
            </h4>
            <div className="space-y-3 pt-2">
              <a 
                href="tel:+15077781624" 
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-yellow-400 transition-colors font-mono"
              >
                <Phone className="w-4 h-4 text-yellow-500" />
                +1 (507) 778 1624
              </a>
              <a 
                href="mailto:info@ozsolution.com" 
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-yellow-400 transition-colors font-mono"
              >
                <Mail className="w-4 h-4 text-yellow-500" />
                info@ozsolution.com
              </a>
            </div>
          </div>

          {/* Newsletter Column matching pic 3 exactly */}
          <div className="space-y-4">
            <h4 className="text-slate-100 font-display font-semibold text-base tracking-wide border-l-4 border-yellow-500 pl-3">
              Newsletter Subscription
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans mt-2">
              Stay updated on our latest projects, tips, and offers.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative mt-3">
              <input
                type="email"
                required
                placeholder="Enter Email Address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#181d24] border border-slate-700/80 rounded-md py-3 pl-4 pr-14 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all font-sans"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 px-3 rounded flex items-center justify-center transition-colors shadow-md cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            
            {isSubscribed && (
              <p className="text-xs text-emerald-400 font-mono animate-pulse">
                ✓ Thanks for subscribing to OZ Solution!
              </p>
            )}
          </div>

        </div>

        {/* Social Link Pills matching layout from pic 3 */}
        <div className="py-8 border-b border-slate-700/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-sm font-display font-bold text-slate-300 tracking-wider">
              Follow On Socials:
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#2d3744] hover:bg-slate-700 hover:text-yellow-400 border border-slate-700/30 text-slate-200 text-xs font-semibold py-2.5 px-4 rounded transition-all transform hover:-translate-y-0.5"
              >
                <span className="text-sm">{social.icon}</span>
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom footer copyright and quick lists matching pic 3 exactly */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => onNavigate(link.path)}
                className="text-xs font-sans text-slate-400 hover:text-yellow-400 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="text-xs text-slate-500 font-sans text-center lg:text-right">
            Copyright © 2026 All Rights Reserved The Marketing Manic
          </div>
        </div>

      </div>
    </footer>
  );
}
