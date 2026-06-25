'use client';

import { CSSProperties, FormEvent, useEffect, useRef, useState } from 'react';
import { Check, Mail, MapPin, Phone, Search, Send, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

const policySections = [
  {
    id: 'information-we-collect',
    number: '1.',
    title: 'Information We Collect',
    content: (
      <div className="space-y-5">
        <p>We may collect the following categories of information:</p>
        <div>
          <h3 className="mb-2 font-display text-lg font-semibold text-slate-950">A. Personal Information</h3>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business information</li>
            <li>Billing information</li>
            <li>Any information you voluntarily submit through forms, chats, or contact requests</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-display text-lg font-semibold text-slate-950">B. Automatically Collected Information</h3>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'how-we-use-your-information',
    number: '2.',
    title: 'How We Use Your Information',
    content: (
      <div className="space-y-4">
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Provide and manage our services</li>
          <li>Respond to inquiries and customer support requests</li>
          <li>Send administrative updates</li>
          <li>Deliver marketing communications (if you opt-in)</li>
          <li>Improve website functionality and user experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </div>
    )
  },
  {
    id: 'sms-communications',
    number: '3.',
    title: 'SMS Communications & A2P/10DLC Compliance',
    content: (
      <div className="space-y-4">
        <p>If you opt in to receive SMS communications from OZ Solution, the following applies:</p>
        <h3 className="font-display text-lg font-semibold text-slate-950">SMS Consent</h3>
        <p>By providing your mobile number and opting in, you consent to receive SMS messages from OZ Solution related to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Service updates</li>
          <li>Account notifications</li>
          <li>Marketing or promotional messages (if selected)</li>
        </ul>
        <p className="rounded-2xl bg-amber-50 p-4 text-sm text-slate-700 ring-1 ring-amber-100">
          Message frequency may vary. Standard message and data rates may apply.
        </p>
        <p>
          You may opt out at any time by replying <strong className="font-semibold text-slate-950">STOP</strong>. For assistance,
          reply <strong className="font-semibold text-slate-950">HELP</strong> or contact us at{' '}
          <a href="mailto:info@ozsolution.com" className="font-semibold text-yellow-600 hover:text-yellow-700">
            info@ozsolution.com
          </a>
        </p>
      </div>
    )
  },
  {
    id: 'data-sharing',
    number: '4.',
    title: 'Data Sharing & Mobile Information Protection',
    content: (
      <div className="space-y-4">
        <p>We value your privacy and enforce strict data protection standards.</p>
        <h3 className="font-display text-lg font-semibold text-slate-950">No Third-Party Marketing Sharing</h3>
        <p className="border-l-4 border-yellow-500 bg-slate-50 py-3 pl-5 font-medium text-slate-900">
          Mobile phone numbers and SMS opt-in data will NOT be shared, sold, rented, or disclosed to third parties or
          affiliates for marketing or promotional purposes.
        </p>
        <p>This includes all SMS consent and opt-in information.</p>
        <h3 className="font-display text-lg font-semibold text-slate-950">Limited Data Sharing for Service Delivery</h3>
        <p>We may share personal information, including mobile numbers, only with trusted third-party service providers strictly for the purpose of:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Delivering SMS messages</li>
          <li>Processing payments</li>
          <li>Hosting our website</li>
          <li>Providing technical support</li>
          <li>Operating essential business services</li>
        </ul>
        <p>
          These service providers are contractually obligated to protect your data, use it solely for the services they
          provide to OZ Solution, and not use it for their own marketing.
        </p>
      </div>
    )
  },
  {
    id: 'cookies-tracking',
    number: '5.',
    title: 'Cookies & Tracking Technologies',
    content: (
      <div className="space-y-4">
        <p>We may use cookies and similar technologies to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Enhance user experience</li>
          <li>Analyze website traffic</li>
          <li>Improve marketing performance</li>
        </ul>
        <p>You may disable cookies through your browser settings.</p>
      </div>
    )
  },
  {
    id: 'data-security',
    number: '6.',
    title: 'Data Security',
    content: (
      <div className="space-y-4">
        <p>
          We implement commercially reasonable administrative, technical, and physical safeguards to protect your personal
          information against unauthorized access, disclosure, or misuse.
        </p>
        <p>However, no online transmission is 100% secure, and we cannot guarantee absolute security.</p>
      </div>
    )
  },
  {
    id: 'data-retention',
    number: '7.',
    title: 'Data Retention',
    content: (
      <div className="space-y-4">
        <p>We retain personal information only for as long as necessary to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Fulfill the purposes outlined in this policy</li>
          <li>Comply with legal obligations</li>
          <li>Resolve disputes</li>
          <li>Enforce agreements</li>
        </ul>
      </div>
    )
  },
  {
    id: 'your-rights',
    number: '8.',
    title: 'Your Rights',
    content: (
      <div className="space-y-4">
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Access your personal data</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent</li>
          <li>Opt out of marketing communications</li>
        </ul>
        <p>
          To exercise your rights, contact us at:{' '}
          <a href="mailto:info@ozsolution.com" className="font-semibold text-yellow-600 hover:text-yellow-700">
            info@ozsolution.com
          </a>
        </p>
      </div>
    )
  },
  {
    id: 'childrens-privacy',
    number: '9.',
    title: "Children's Privacy",
    content: (
      <p>
        Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information
        from children.
      </p>
    )
  },
  {
    id: 'updates-to-this-policy',
    number: '10.',
    title: 'Updates to This Policy',
    content: (
      <div className="space-y-4">
        <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.</p>
        <p>Continued use of the website after changes constitutes acceptance of the updated policy.</p>
      </div>
    )
  },
  {
    id: 'contact-information',
    number: '11.',
    title: 'Contact Information',
    content: (
      <div className="space-y-4">
        <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
        <div className="rounded-3xl bg-slate-50 p-6 font-medium text-slate-800 ring-1 ring-slate-200">
          <p className="font-display text-lg font-semibold text-slate-950">OZ Solution</p>
          <p>Website: www.ozsolution.com</p>
          <p>Email: info@ozsolution.com</p>
          <p>Phone: +1 (507) 778 1624</p>
        </div>
      </div>
    )
  }
];

const collageImages = [
  {
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=85',
    className: 'h-60 sm:h-72 lg:h-80'
  },
  {
    src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=85',
    className: 'h-44 sm:h-52 lg:h-60'
  },
  {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85',
    className: 'h-32 sm:h-40 lg:h-44'
  },
  {
    src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=85',
    className: 'h-56 sm:h-64 lg:h-72'
  }
];

export default function PrivacyPolicy() {
  const policyContentRef = useRef<HTMLDivElement>(null);
  const sidebarColumnRef = useRef<HTMLElement>(null);
  const [sidebarStyle, setSidebarStyle] = useState<CSSProperties>({});
  const [activeSectionId, setActiveSectionId] = useState(policySections[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMatches, setSearchMatches] = useState<string[]>([]);
  const [searchMessage, setSearchMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    smsOptIn: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        smsOptIn: false
      });
    }, 4000);
  };

  useEffect(() => {
    const stickyTop = 96;

    const updateSidebar = () => {
      const content = policyContentRef.current;
      const sidebarColumn = sidebarColumnRef.current;

      if (!content || !sidebarColumn || window.innerWidth < 1024) {
        setSidebarStyle({});
        return;
      }

      const contentRect = content.getBoundingClientRect();
      const columnRect = sidebarColumn.getBoundingClientRect();
      const sidebarBottomBuffer = 120;
      const shouldFix = contentRect.top <= stickyTop && contentRect.bottom > window.innerHeight - sidebarBottomBuffer;

      const activeSection = policySections
        .map((section) => ({
          id: section.id,
          top: document.getElementById(section.id)?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY
        }))
        .filter((section) => section.top <= stickyTop + 80)
        .at(-1);

      if (activeSection) {
        setActiveSectionId(activeSection.id);
      }

      if (!shouldFix) {
        setSidebarStyle({});
        return;
      }

      setSidebarStyle({
        position: 'fixed',
        top: stickyTop,
        left: columnRect.left,
        width: columnRect.width,
        maxHeight: `calc(100vh - ${stickyTop + 16}px)`,
        overflowY: 'auto',
        zIndex: 20
      });
    };

    updateSidebar();
    window.addEventListener('scroll', updateSidebar, { passive: true });
    window.addEventListener('resize', updateSidebar);

    return () => {
      window.removeEventListener('scroll', updateSidebar);
      window.removeEventListener('resize', updateSidebar);
    };
  }, []);

  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      setSearchMatches([]);
      setSearchMessage('');
      return;
    }

    const matches = policySections
      .filter((section) => {
        const sectionElement = document.getElementById(section.id);
        const searchableText = `${section.number} ${section.title} ${sectionElement?.textContent ?? ''}`.toLowerCase();
        return searchableText.includes(query);
      })
      .map((section) => section.id);

    setSearchMatches(matches);
    setSearchMessage(matches.length ? `${matches.length} matching section${matches.length > 1 ? 's' : ''}` : 'No matching sections found');
  }, [searchQuery]);

  const scrollToPolicySection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);

    if (!sectionElement) return;

    setActiveSectionId(sectionId);
    sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handlePolicySearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const firstMatch = searchMatches[0];

    if (firstMatch) {
      scrollToPolicySection(firstMatch);
      return;
    }

    if (searchQuery.trim()) {
      setSearchMessage('No matching sections found');
    }
  };

  return (
    <main className="bg-white text-slate-900" id="privacy-policy-view">
      <div className="w-full bg-white">
        <section className="px-5 pb-12 pt-16 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 lg:pb-20 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <ScrollReveal variant="fadeRight" duration={0.75}>
              <div className="max-w-xl">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-yellow-500" />
                  Legal & Privacy
                </div>
                <h1 className="font-display text-5xl font-bold tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">
                  Privacy Policy
                </h1>
                <p className="mt-5 text-base text-slate-600">Latest update; 24 June 2024</p>

                <form onSubmit={handlePolicySearch} className="relative mt-8 max-w-xl">
                  <div className="flex gap-3">
                    <label className="relative flex-1" htmlFor="privacy-search">
                      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        id="privacy-search"
                        type="search"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        placeholder="Search any topic..."
                        className="h-14 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm outline-none transition focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100"
                      />
                    </label>
                    <button type="submit" className="h-14 rounded-xl bg-yellow-500 px-7 text-sm font-semibold text-slate-950 transition hover:bg-yellow-400">
                      Search
                    </button>
                  </div>

                  {searchMessage && (
                    <p className="mt-3 text-sm font-medium text-slate-500">{searchMessage}</p>
                  )}

                  {searchMatches.length > 0 && (
                    <div className="absolute left-0 right-[7.25rem] top-[4.4rem] z-30 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                      {searchMatches.map((sectionId) => {
                        const section = policySections.find((item) => item.id === sectionId);

                        if (!section) return null;

                        return (
                          <button
                            key={section.id}
                            type="button"
                            onClick={() => scrollToPolicySection(section.id)}
                            className="block w-full px-5 py-3 text-left text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                          >
                            <span className="font-semibold text-slate-950">{section.number}</span> {section.title}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeLeft" duration={0.75} delay={0.1}>
              <div className="mx-auto grid max-w-2xl grid-cols-2 items-start gap-6 sm:gap-8">
                <div className="space-y-6 pt-16 sm:space-y-8 sm:pt-24">
                  {[collageImages[0], collageImages[2]].map((image) => (
                    <div key={image.src} className={`${image.className} overflow-hidden bg-slate-100`}>
                      <img src={image.src} alt="" className="h-full w-full object-cover grayscale-[15%]" />
                    </div>
                  ))}
                </div>
                <div className="space-y-6 sm:space-y-8">
                  {[collageImages[1], collageImages[3]].map((image) => (
                  <div key={image.src} className={`${image.className} overflow-hidden bg-slate-100`}>
                    <img src={image.src} alt="" className="h-full w-full object-cover grayscale-[15%]" />
                  </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 lg:pb-28">
          <div ref={policyContentRef} className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <article className="max-w-3xl">
              <ScrollReveal variant="fadeUp" duration={0.65}>
                <div className="mb-12 text-lg leading-8 text-slate-700">
                  <p>
                    OZ Solution respects your privacy and is committed to protecting your personal information. This
                    Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
                    our website or use our services.
                  </p>
                  <p className="mt-5 font-medium text-slate-950">
                    By using our website or services, you agree to the terms of this Privacy Policy.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-14">
                {policySections.map((section, index) => (
                  <ScrollReveal key={section.id} variant="fadeUp" duration={0.6} delay={index < 3 ? index * 0.04 : 0}>
                    <section id={section.id} className="scroll-mt-28 border-t border-slate-200 pt-9">
                      <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                        {section.number} {section.title}
                      </h2>
                      <div className="mt-5 text-base leading-8 text-slate-700">
                        {section.content}
                      </div>
                    </section>
                  </ScrollReveal>
                ))}
              </div>
            </article>

            <aside ref={sidebarColumnRef} className="relative hidden self-stretch lg:block">
              <div style={sidebarStyle} className="scrollbar-none border-l border-slate-200 pl-8 pr-2 text-sm text-slate-500">
                <p className="mb-7 font-display text-2xl font-semibold text-slate-950">On this page</p>
                <nav className="space-y-4">
                  {policySections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block rounded-xl px-3 py-2 leading-snug transition hover:translate-x-1 hover:text-slate-950 ${
                        activeSectionId === section.id
                          ? 'bg-slate-50 font-semibold text-slate-950'
                          : 'text-slate-500'
                      }`}
                    >
                      {section.number} {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-slate-200/70 bg-slate-50 px-5 py-20 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24" id="privacy-contact-form-section">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <ScrollReveal variant="fadeRight" className="lg:col-span-5">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-yellow-600">
                    <span className="block h-2 w-2 rounded-sm bg-yellow-500" />
                    Contact Us
                  </div>
                  <h2 className="max-w-xl font-display text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                    Let’s connect & build your dream project
                  </h2>
                  <p className="max-w-xl text-base leading-7 text-slate-600">
                    We’d love to hear about your project. Reach out, share your ideas, and let’s start shaping your dream into something real and lasting.
                  </p>
                </div>

                <div className="divide-y divide-slate-200">
                  <div className="flex items-center gap-5 py-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-500 text-white">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-slate-950">Phone Number</h3>
                      <a href="tel:+15077781624" className="mt-1 block text-slate-600 transition hover:text-yellow-600">
                        +1 (507) 778 1624
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 py-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-500 text-white">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-slate-950">Email Address</h3>
                      <a href="mailto:info@ozsolution.com" className="mt-1 block text-slate-600 transition hover:text-yellow-600">
                        info@ozsolution.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 py-6">
                    <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-500 text-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-slate-950">Our Location</h3>
                      <p className="mt-1 max-w-sm text-slate-600">
                        15750 Fair Hill Way Apple Valley, Minnesota 55124, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeLeft" delay={0.15} className="lg:col-span-7">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-950">Message sent successfully!</h3>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
                      Thank you, {formData.firstName || 'there'}. Your message has been received and our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="mb-7">
                      <h3 className="font-display text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                        Get in touch with us
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Need help or have a project? Get in touch — we’re always ready to support you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(event) => setFormData({ ...formData, firstName: event.target.value })}
                        placeholder="First Name"
                        className="h-14 rounded-xl border border-transparent bg-slate-50 px-4 text-sm outline-none transition focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-100"
                      />
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(event) => setFormData({ ...formData, lastName: event.target.value })}
                        placeholder="Last Name"
                        className="h-14 rounded-xl border border-transparent bg-slate-50 px-4 text-sm outline-none transition focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-100"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                        placeholder="Phone number"
                        className="h-14 rounded-xl border border-transparent bg-slate-50 px-4 text-sm outline-none transition focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-100"
                      />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                        placeholder="Email address"
                        className="h-14 rounded-xl border border-transparent bg-slate-50 px-4 text-sm outline-none transition focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-100"
                      />
                    </div>

                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                      placeholder="Message"
                      className="w-full rounded-xl border border-transparent bg-slate-50 px-4 py-4 text-sm outline-none transition focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-100"
                    />

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacySmsOptIn"
                        checked={formData.smsOptIn}
                        onChange={(event) => setFormData({ ...formData, smsOptIn: event.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-yellow-500 focus:ring-yellow-400"
                      />
                      <label htmlFor="privacySmsOptIn" className="text-sm leading-6 text-slate-600">
                        I agree to be contacted by OZ Solution about my inquiry. We do not sell your information.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-4 rounded-xl bg-yellow-500 px-7 py-4 font-semibold text-slate-950 shadow-[0_16px_35px_rgba(234,179,8,0.25)] transition hover:bg-yellow-400"
                    >
                      Send message
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-white">
                        <Send className="h-4 w-4" />
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </main>
  );
}
