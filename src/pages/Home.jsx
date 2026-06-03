import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import StatBlock from '../components/StatBlock';
import TestimonialCard from '../components/TestimonialCard';
import features from '../data/features';
import testimonials from '../data/testimonials';

const Home = () => (
  <main className="relative overflow-hidden bg-page text-white">
    <Helmet>
      <title>DC eSports | Home</title>
      <meta
        name="description"
        content="DC eSports is the premium esports platform for organizers and players. Discover events, manage teams, and download the app."
      />
    </Helmet>
    <div className="mx-auto max-w-7xl">
      <section className="relative overflow-hidden bg-hero-glow px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-1 lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-violet-400"></span>
              Live esports events, fast registration, premium platform
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                DC eSports is the premium home for modern esports competition.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Discover curated events, manage teams, and launch gaming experiences with app-ready deep links designed for serious esports competitors.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/download" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-sky-400 px-6 py-4 text-sm font-semibold text-slate-950 shadow-glow transition hover:brightness-110">
                Download App
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section className="bg-panel px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-purple-300">Why DC eSports</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Built for growth, built for game day.</h2>
          </div>
          <p className="text-slate-400">From fast signups to organizer dashboards and deep link support, DC eSports brings event operations and player engagement into one polished experience.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>

    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.28em] text-purple-300">Performance numbers</p>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Pro stats for gamers and organizers.</h2>
            <p className="max-w-xl text-slate-400">Engagement, visibility, and conversion metrics designed to help your events scale while maintaining a premium competitive experience.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <StatBlock value="120K+" label="Active players" />
            <StatBlock value="4.9/5" label="Player satisfaction" />
            <StatBlock value="350+" label="Live events" />
            <StatBlock value="99.9%" label="Platform uptime" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-panel px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-purple-300">What our community says</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Trusted by gamers, organizers, and coaches.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Home;
