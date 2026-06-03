import { Helmet } from 'react-helmet-async';
import FAQAccordion from '../components/FAQAccordion';
import faq from '../data/faq';

const Download = () => (
  <main className="px-5 py-20 sm:px-8 lg:px-10 text-white">
    <Helmet>
      <title>DC eSports | Download App</title>
      <meta name="description" content="Download the DC eSports Android app and access live events, deep links, and premium esports features." />
    </Helmet>
    <div className="mx-auto max-w-6xl space-y-16">
      <section className="rounded-[2.5rem] border border-white/10 bg-panel p-10 shadow-glow">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.32em] text-purple-300">Download</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Get the DC eSports app for Android.</h1>
            <p className="text-slate-300">Install the app to join events faster, open schedules directly from deep links, and stay connected to every match.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://mega.nz/file/6aB0AKQL#33AiDnOrsqYVZ-97MiRCru1hk_ajkiY_qdfSnNDYTTM" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-purple-500 to-sky-400 px-6 py-4 text-sm font-semibold text-slate-950 shadow-glow transition hover:brightness-110">
                Download APK
              </a>
              <a href="#faq" className="inline-flex items-center rounded-full border border-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:border-purple-400/40 hover:text-white">
                Read FAQs
              </a>
            </div>
          </div>
          <div className="space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-slate-300 shadow-glow">
            <p className="text-sm uppercase tracking-[0.28em] text-purple-300">APK Info</p>
            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-panel p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Version</p>
                  <p className="mt-2 text-lg font-semibold text-white">1.0.0</p>
                </div>
                <div className="rounded-3xl bg-panel p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Compatibility</p>
                  <p className="mt-2 text-lg font-semibold text-white">Android 8.0+</p>
                </div>
              </div>
              <div className="rounded-3xl bg-panel p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Deep Links</p>
                <p className="mt-2 text-lg font-semibold text-white">Supports Android App Links and Firebase Deep Links</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2.5rem] border border-white/10 bg-panel p-10 shadow-glow">
          <p className="text-sm uppercase tracking-[0.28em] text-purple-300">Features</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Built for esports on Android.</h2>
          <div className="mt-8 space-y-6 text-slate-300">
            <div className="rounded-3xl bg-white/5 p-6">
              <p className="font-semibold text-white">Deep link event access</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">Jump straight into events from event pages and notifications with intent-based app opening.</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-6">
              <p className="font-semibold text-white">Fast registration flow</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">Complete registration in seconds with secure checkout and instant confirmation.</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-6">
              <p className="font-semibold text-white">Modern esports dashboard</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">Track upcoming matches, view standings, and manage team rosters from the app interface.</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-[2.5rem] border border-white/10 bg-panel p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.28em] text-purple-300">App screenshot</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-purple-500 via-sky-400 to-indigo-500 p-6 text-white shadow-glow">
                <p className="text-sm uppercase tracking-[0.24em]">Home</p>
                <div className="mt-6 space-y-4 rounded-3xl bg-white/10 p-4 text-xs text-slate-200">
                  <p>Featured events</p>
                  <p>Live match status</p>
                </div>
              </div>
              <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 text-white shadow-glow">
                <p className="text-sm uppercase tracking-[0.24em]">Event</p>
                <div className="mt-6 space-y-4 rounded-3xl bg-white/10 p-4 text-xs text-slate-200">
                  <p>Match details</p>
                  <p>Open in app button</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-panel p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.28em] text-purple-300">Mobile</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Designed for on-the-go esports.</h3>
            <p className="mt-4 text-slate-300">Access events, notifications, and sharing tools from your phone without missing a match.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="rounded-[2.5rem] border border-white/10 bg-panel p-10 shadow-glow">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.28em] text-purple-300">FAQ</p>
          <h2 className="text-4xl font-semibold text-white">Deep links and app support explained.</h2>
        </div>
        <div className="mt-8 grid gap-4">
          {faq.map((item) => (
            <FAQAccordion key={item.question} item={item} />
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default Download;
