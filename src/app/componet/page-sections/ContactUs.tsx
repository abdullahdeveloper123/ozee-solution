'use client';

import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Clock3, Mail, MapPin, MessageSquareText, Phone, Send } from 'lucide-react';

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone number',
    value: ' +1 (508) 888 1927',
    href: 'tel: +15088881927',
  },
  {
    icon: Mail,
    label: 'Email address',
    value: 'info@ozsolution.com',
    href: 'mailto:info@ozsolution.com',
  },
  {
    icon: MapPin,
    label: 'Our location',
    value: '15750 Fair Hill Way, Apple Valley, MN 55124, USA',
  },
];

const initialForm = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  service: 'quantity-takeoff',
  message: '',
};

export default function ContactUs() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    setForm(initialForm);
    window.setTimeout(() => setSent(false), 5000);
  };

  return (
    <main className="overflow-hidden bg-white text-slate-900" id="contact-us-view">
      <section className="relative isolate min-h-[390px] overflow-hidden bg-slate-950 sm:min-h-[460px]">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=85')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-900/35" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(234,179,8,0.16)_48%,transparent_72%)]" />

        <div className="relative mx-auto flex min-h-[390px] w-full max-w-7xl items-center px-5 py-20 sm:min-h-[460px] sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-yellow-400">
              <span className="h-px w-10 bg-yellow-400" />
              Contact OZ Solution
            </div>
            <h1 className="font-display text-5xl font-extrabold leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Let&apos;s build your next <span className="text-yellow-400">winning bid.</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
              Tell us about your project and our senior estimating team will help you move from drawings to confident decisions.
            </p>
            <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-slate-200">
              <span>Home</span><span className="text-yellow-400">/</span><span>Contact us</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600"><span className="h-1.5 w-1.5 bg-yellow-500" /> Contact us</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Precision starts with a conversation.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500">
              From takeoffs and bid estimates to BIM cost modeling, share your scope and we&apos;ll help shape a clear, commercially sound path forward.
            </p>

            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              {contactDetails.map(({ icon: Icon, label, value, href }, index) => {
                const content = <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-yellow-500 text-white transition-transform duration-300 group-hover:scale-105"><Icon className="h-5 w-5" /></span>
                  <span><span className="block text-xs font-semibold uppercase tracking-wide text-slate-900">{label}</span><span className="mt-1 block text-xs leading-5 text-slate-500 sm:text-sm">{value}</span></span>
                </>;

                return href ? (
                  <motion.a whileHover={{ x: 5 }} key={label} href={href} className="group flex items-center gap-4 py-5">{content}</motion.a>
                ) : (
                  <motion.div whileHover={{ x: 5 }} key={label} className="group flex items-center gap-4 py-5">{content}</motion.div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-slate-950 p-5 text-slate-200">
              <Clock3 className="h-5 w-5 shrink-0 text-yellow-400" />
              <p className="text-xs leading-5"><span className="font-bold text-white">Business hours:</span> Monday–Friday, 9:00 AM–5:00 PM (CST)</p>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)] sm:p-9 lg:p-11"
          >
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[5rem] rounded-tr-3xl bg-yellow-500/15" />
            <div className="relative">
              <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-yellow-500 text-white"><MessageSquareText className="h-5 w-5" /></span><span className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-600">Project inquiry</span></div>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Get in touch with us</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">Give us a few project details. We&apos;ll connect you with the right estimating specialist within one business day.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="First name"><input required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="First name" className="contact-input" /></Field>
                  <Field label="Last name"><input required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Last name" className="contact-input" /></Field>
                  <Field label="Phone number"><input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 (000) 000-0000" className="contact-input" /></Field>
                  <Field label="Email address"><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="contact-input" /></Field>
                </div>
                <Field label="What can we help with?"><select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="contact-input"><option value="quantity-takeoff">Quantity takeoff</option><option value="detailed-estimate">Detailed cost estimate</option><option value="bim-modeling">BIM 3D / 5D modeling</option><option value="tender-bid">Tender & bid estimate</option><option value="other">Other inquiry</option></select></Field>
                <Field label="Tell us about your project"><textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Project type, location, schedule, and any details that will help us prepare..." className="contact-input resize-none" /></Field>
                <label className="flex items-start gap-3 pt-1 text-xs leading-5 text-slate-500"><input required type="checkbox" className="mt-0.5 h-4 w-4 accent-yellow-500" /><span>I agree to be contacted by OZ Solution about this request. We respect your privacy and never sell your information.</span></label>
                <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="submit" className="group mt-2 inline-flex items-center gap-3 rounded-lg bg-yellow-500 px-6 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-500/20 transition-colors hover:bg-yellow-400">
                  Send message <span className="grid h-6 w-6 place-items-center rounded bg-slate-950 text-white transition-transform group-hover:translate-x-1"><ArrowRight className="h-4 w-4" /></span>
                </motion.button>
                <AnimatePresence>{sent && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"><CheckCircle2 className="h-5 w-5 shrink-0" />Thanks—your message is on its way. We&apos;ll be in touch shortly.</motion.div>}</AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .contact-input { width: 100%; border: 1px solid #e2e8f0; border-radius: 0.7rem; background: #fff; padding: 0.875rem 1rem; color: #0f172a; font-size: 0.875rem; outline: none; transition: border-color 180ms ease, box-shadow 180ms ease; }
        .contact-input::placeholder { color: #94a3b8; }
        .contact-input:focus { border-color: #eab308; box-shadow: 0 0 0 3px rgba(234, 179, 8, 0.16); }
      `}</style>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-xs font-semibold text-slate-700"><span className="mb-2 block">{label}</span>{children}</label>;
}
