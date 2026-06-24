import React from 'react';
import ScrollReveal from '../common/ScrollReveal';

export default function TermsOfUse() {
  return (
    <div className="bg-white text-slate-800 font-sans" id="terms-of-use-view">
      
      {/* 1. Hero Banner with Construction Scaffolding Background */}
      <section 
        className="relative h-[250px] sm:h-[350px] bg-slate-900 flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80')"
        }}
        id="terms-hero-banner"
      >
        <div className="text-center space-y-4 px-4 z-10">
          <ScrollReveal variant="fadeUp" duration={0.8}>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              Terms of Use
            </h1>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 font-sans mt-2">
              <span className="hover:text-yellow-400 cursor-pointer transition-colors">Home</span>
              <span>/</span>
              <span className="text-yellow-500 font-medium">Terms of Use</span>
            </div>
          </ScrollReveal>
        </div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      </section>

      {/* 2. Terms & Conditions Main Content */}
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-12" id="terms-content-section">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Services Agreement */}
          <ScrollReveal variant="fadeUp" duration={0.6}>
            <div className="space-y-3" id="terms-services-agreement">
              <h2 className="text-lg sm:text-xl font-display font-black text-slate-900 tracking-tight">
                Services Agreement
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Typically, it takes 2 to 3 business days to complete an estimate once you agree to the provided quote and complete the payment process. However, depending on the project's scale and complexity, this timeframe might extend by a few hours to days.
              </p>
            </div>
          </ScrollReveal>

          {/* Payment Policy */}
          <ScrollReveal variant="fadeUp" duration={0.6} delay={0.05}>
            <div className="space-y-3" id="terms-payment-policy">
              <h2 className="text-lg sm:text-xl font-display font-black text-slate-900 tracking-tight">
                Payment Policy
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                We use online Payments that allow us to comfortably make payments using a Credit Card, Debit Card, or PayPal. Once we receive your plans and go through the project details, we\'ll send you an invoice from along with the estimated delivery date. To make a payment, you can use your mobile, desktop, or contact us at (507) 778-1624 | <a href="mailto:info@ozsolution.com" className="text-yellow-600 hover:underline">info@ozsolution.com</a>
              </p>
            </div>
          </ScrollReveal>

          {/* Bidding Policy */}
          <ScrollReveal variant="fadeUp" duration={0.6} delay={0.1}>
            <div className="space-y-4" id="terms-bidding-policy">
              <h2 className="text-lg sm:text-xl font-display font-black text-slate-900 tracking-tight">
                Bidding Policy
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans space-y-3">
                <p>
                  OZ Solution LLC is not responsible if a Contractor fails to submit their bid in time. After the estimate has been delivered, no refunds will be issued. Cancellations are eligible for a refund only if made within 2 hours of making the payment. Beyond this period, our team begins work on the project, and refunds are not possible.
                </p>
                <p>
                  Clients who wish to keep their provided information confidential should notify us. We can then draft a Non-Disclosure Agreement to be mutually agreed upon. In the absence of such a request, OZ Solution LLC reserves the right to use the provided information for marketing purposes, such as in testimonials. This may include the client\'s name, company details, project information, estimated costs, and drawing plans.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Use of Information */}
          <ScrollReveal variant="fadeUp" duration={0.6} delay={0.15}>
            <div className="space-y-4" id="terms-use-of-information">
              <h2 className="text-lg sm:text-xl font-display font-black text-slate-900 tracking-tight">
                Use of Information
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans space-y-3">
                <p>
                  1) By providing your contact information, such as phone number, you agree to START receiving text messages for OZ Solution. These messages are meant to share marketing updates, new promotions, or policy updates and will only receive messages from OZ Solution.
                </p>
                <p>
                  2) By choosing to opt in for our text messages, you agree to receive up to 3 messages per month from OZ Solution.
                </p>
                <p>
                  3) We ensure that your opt-in message flow complies with local and global regulations, such as the Telephone Consumer Protection Act (TCPA) in the United States.
                </p>
                <p>
                  4) After you opt-in for the messages, we send you a confirmation message to reiterate the terms and conditions, confirm our subscription, and contact information for support or questions.
                </p>
                <p>
                  5) Message & data rates may apply. Message frequency varies.
                </p>
                <p>
                  6) Please reply STOP to the text message to unsubscribe.
                </p>
                <div className="pt-4 border-t border-slate-100 space-y-1">
                  <p className="text-[11px] text-slate-400 italic">Message & data rates may apply. Message frequency varies.</p>
                  <p className="text-[11px] text-slate-400 italic">Please reply STOP to the text message to unsubscribe.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Pricing Policy */}
          <ScrollReveal variant="fadeUp" duration={0.6} delay={0.2}>
            <div className="space-y-3" id="terms-pricing-policy">
              <h2 className="text-lg sm:text-xl font-display font-black text-slate-900 tracking-tight">
                Pricing Policy
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                We do not provide additional insurance, financial guarantees, or warranties, as our estimates are intended only as guidelines for final pricing and should not be considered as the final cost. We use RSMeans for zip code-specific material and labor costs, but be aware that prices may vary based on different contractors, regions, and vendors. We are always ready to assist with any revisions, clarifications, or queries to help you finalize your pricing.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 3. Animated Marquee Banner matching construction focus */}
      <ScrollReveal variant="fadeUp" duration={0.8} id="terms-marquee-bar-reveal">
        <section className="bg-[#facc15] py-4 overflow-hidden border-y-2 border-slate-950" id="terms-marquee-remodeling-bar">
          <div className="whitespace-nowrap flex select-none overflow-hidden text-slate-950 font-display font-black text-xs uppercase tracking-widest gap-8">
            <div className="flex shrink-0 justify-around min-w-full gap-8 animate-[marquee_25s_linear_infinite]">
              <span>★ RENOVATION & REMODELING</span>
              <span>★ COMMERCIAL PROJECTS</span>
              <span>★ INTERIOR & EXTERIOR DESIGN</span>
              <span>★ BUILDING DESIGN</span>
              <span>★ CONSTRUCTION</span>
            </div>
            <div className="flex shrink-0 justify-around min-w-full gap-8 animate-[marquee_25s_linear_infinite]" aria-hidden="true">
              <span>★ RENOVATION & REMODELING</span>
              <span>★ COMMERCIAL PROJECTS</span>
              <span>★ INTERIOR & EXTERIOR DESIGN</span>
              <span>★ BUILDING DESIGN</span>
              <span>★ CONSTRUCTION</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
