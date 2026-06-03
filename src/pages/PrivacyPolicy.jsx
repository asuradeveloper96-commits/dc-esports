import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => (
  <main className="px-5 py-20 sm:px-8 lg:px-10 text-white">
    <Helmet>
      <title>DC eSports | Privacy Policy</title>
      <meta name="description" content="Read the DC eSports privacy policy for data handling and user rights." />
    </Helmet>

    <div className="mx-auto max-w-5xl space-y-10 rounded-[2.5rem] border border-white/10 bg-panel p-10 shadow-glow">
      <h1 className="text-4xl font-semibold text-white">Privacy Policy</h1>
      <div className="space-y-6 text-slate-300">
        <p>DC eSports is committed to protecting your privacy. We use data responsibly to improve your event experience and keep your account secure.</p>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Information collection</h2>
          <p>We collect contact information, event registrations, and usage signals to power app experiences.</p>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">How we use it</h2>
          <p>Data is used for event management, communications, analytics, and platform security. We do not sell your personal information.</p>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Your rights</h2>
          <p>You can contact asuradeveloper96@gmail.com for data access, correction, or deletion requests.</p>
        </div>
      </div>
    </div>
  </main>
);

export default PrivacyPolicy;
