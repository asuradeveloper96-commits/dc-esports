import { Helmet } from 'react-helmet-async';

const About = () => (
  <main className="bg-page px-5 py-20 text-white sm:px-8 lg:px-10">
    <Helmet>
      <title>DC eSports | About Us</title>
      <meta name="description" content="Learn about DC eSports, our mission to elevate competitive gaming, and the team building the platform." />
    </Helmet>

    <div className="mx-auto max-w-6xl space-y-16">
      <section className="rounded-[2.5rem] border border-white/10 bg-panel p-10 shadow-glow">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-purple-300">About DC eSports</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Professional esports infrastructure for players and organizers.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            DC eSports is an esports platform tailored for modern competitive events. We combine mobile support, event management, and live event discovery into one premium experience.
          </p>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-white/10 bg-panel p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.28em] text-purple-300">Mission</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Empower competitive players</h2>
          <p className="mt-4 text-slate-300">Deliver fast, secure event access with world-class presentation and mobile-first onboarding.</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-panel p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.28em] text-purple-300">Vision</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Become the leading esports hub</h2>
          <p className="mt-4 text-slate-300">Build trust across organizers, teams, and fans with a platform designed to scale competitive gaming globally.</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-panel p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.28em] text-purple-300">Value</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Premium experience every step</h2>
          <p className="mt-4 text-slate-300">Support organizers with analytics, players with reliable event flows, and fans with polished content presentation.</p>
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-white/10 bg-panel p-10 shadow-glow">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-purple-300">Founder</p>
            <h2 className="text-3xl font-semibold text-white">Asura</h2>
            <p className="text-slate-300">Founder & Developer</p>
            <p className="text-slate-300">A passionate esports entrepreneur and developer dedicated to creating better competitive gaming experiences.</p>
            <p className="text-sm text-slate-400">DC eSports was founded with a vision to simplify tournament participation and provide players with a professional platform to discover, join, and compete in esports events. From app development and platform design to tournament management, every aspect of DC eSports is built with a player-first mindset.</p>
            <p className="text-sm text-slate-400">With a strong focus on innovation, performance, and user experience, Asura continues to develop tools that help gaming communities grow while making competitive gaming more accessible for everyone.</p>
            <p className="mt-4 italic text-slate-300">"Our goal is simple: build a platform where players can focus on competing, organizers can run events efficiently, and esports communities can thrive."</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-slate-300">
            <p className="text-sm uppercase tracking-[0.28em] text-purple-300">Profile</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Asura</h3>
            <p className="mt-4 leading-7">
              Founder &amp; Developer focused on building accessible, performance-driven tooling for competitive gaming and community growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>
);

export default About;
