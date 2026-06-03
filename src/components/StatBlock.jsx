const StatBlock = ({ value, label }) => (
  <div className="rounded-3xl bg-white/5 p-6 text-center">
    <p className="text-3xl font-semibold text-white">{value}</p>
    <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">{label}</p>
  </div>
);

export default StatBlock;
