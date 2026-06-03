import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => (
  <main className="flex min-h-screen items-center justify-center bg-page px-5 text-white">
    <Helmet>
      <title>DC eSports | Page Not Found</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <div className="rounded-[2.5rem] border border-white/10 bg-panel p-10 text-center shadow-glow">
      <p className="text-sm uppercase tracking-[0.28em] text-purple-300">Page missing</p>
      <h1 className="mt-4 text-5xl font-semibold text-white">404</h1>
      <p className="mt-4 text-slate-300">The page you’re looking for doesn’t exist. Return to the main hub and explore events.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-purple-500 to-sky-400 px-6 py-4 text-sm font-semibold text-slate-950 shadow-glow transition hover:brightness-110">
        Back to Home
      </Link>
    </div>
  </main>
);

export default NotFound;
