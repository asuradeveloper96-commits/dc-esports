import { Helmet } from 'react-helmet-async';

const Terms = () => (
  <main className="px-5 py-20 sm:px-8 lg:px-10 text-white">
    <Helmet>
      <title>DC eSports | Terms & Conditions</title>
      <meta name="description" content="View the terms and conditions for using DC eSports and participating in events." />
    </Helmet>

    <div className="mx-auto max-w-5xl space-y-10 rounded-[2.5rem] border border-white/10 bg-panel p-10 shadow-glow">
      <h1 className="text-4xl font-semibold text-white">Terms & Conditions</h1>
      <div className="space-y-6 text-slate-300">
        <p>By using DC eSports, you agree to follow platform guidelines and event rules. Please read these terms carefully before participating.</p>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Use of the platform</h2>
          <p>DC eSports provides a platform for event discovery and participation. Users are responsible for registering accurately and abiding by event rules.</p>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Entry fees and prizes</h2>
          <p>Entry fees are processed securely. Prize pools are distributed according to event rules and payouts are managed by organizers.</p>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Liability</h2>
          <p>DC eSports is not liable for device compatibility issues, third-party payment providers, or user behavior during events.</p>
        </div>
      </div>
    </div>
  </main>
);

export default Terms;
