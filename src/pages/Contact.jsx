import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Message ready to send. Integration available with Firebase or email provider.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="px-5 py-20 sm:px-8 lg:px-10 text-white">
      <Helmet>
        <title>DC eSports | Contact</title>
        <meta name="description" content="Contact DC eSports for app support, platform questions, and esports event partnerships." />
      </Helmet>

      <div className="mx-auto max-w-6xl space-y-12">
        <section className="rounded-[2.5rem] border border-white/10 bg-panel p-10 shadow-glow">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.32em] text-purple-300">Reach out</p>
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">Need support or want to launch an esports event?</h1>
              <p className="text-slate-300">Contact DC eSports through WhatsApp, Instagram, email, or submit a message below for quick follow-up.</p>
            </div>
            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.28em] text-purple-300">WhatsApp</p>
                <a href="https://wa.me/919693078797" target="_blank" rel="noreferrer" className="block text-lg font-semibold text-white hover:text-purple-300">
                  +91 96930 78797
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.28em] text-purple-300">Instagram</p>
                <a href="https://instagram.com/stop.it.asura" target="_blank" rel="noreferrer" className="block text-lg font-semibold text-white hover:text-purple-300">
                  @stop.it.asura
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.28em] text-purple-300">Email</p>
                <a href="mailto:asuradeveloper96@gmail.com" className="block text-lg font-semibold text-white hover:text-purple-300">
                  asuradeveloper96@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2.5rem] border border-white/10 bg-panel p-10 shadow-glow">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-purple-300">Contact form</p>
            <h2 className="text-3xl font-semibold text-white">Send us a message</h2>
            <p className="max-w-2xl text-slate-400">We’re ready to help you onboard events or answer questions about app and deep link support.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Name</span>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-purple-400"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-purple-400"
                placeholder="you@example.com"
              />
            </label>
            <label className="sm:col-span-2 space-y-2 text-sm text-slate-300">
              <span>Message</span>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="min-h-[160px] w-full rounded-[2rem] border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-purple-400"
                placeholder="Tell us about your event or support request"
              />
            </label>
            <div className="sm:col-span-2">
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-sky-400 px-6 py-4 text-sm font-semibold text-slate-950 shadow-glow transition hover:brightness-110">
                Submit message
              </button>
              {status && <p className="mt-4 text-sm text-slate-400">{status}</p>}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;
