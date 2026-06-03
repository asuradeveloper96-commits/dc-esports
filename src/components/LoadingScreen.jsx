const LoadingScreen = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050509] text-white">
    <div className="animate-pulse rounded-3xl border border-white/10 bg-[#11131a] px-10 py-12 text-center shadow-glow">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 via-sky-400 to-violet-700 text-3xl font-black shadow-xl">
        DC
      </div>
      <p className="text-lg font-semibold uppercase tracking-[0.28em] text-slate-300">DC eSports</p>
      <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">Loading the premium esports experience...</p>
    </div>
  </div>
);

export default LoadingScreen;
