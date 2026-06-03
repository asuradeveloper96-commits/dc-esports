const FeatureCard = ({ title, description }) => (
  <div className="rounded-3xl border border-white/10 bg-panel p-6 shadow-glow transition hover:-translate-y-1 hover:border-purple-400/30">
    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Feature</p>
    <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
    <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
  </div>
);

export default FeatureCard;
