const TestimonialCard = ({ quote, name, role }) => (
  <div className="rounded-3xl border border-white/10 bg-panel p-6 shadow-glow">
    <p className="text-sm leading-7 text-slate-300">“{quote}”</p>
    <div className="mt-6">
      <p className="font-semibold text-white">{name}</p>
      <p className="text-sm text-slate-400">{role}</p>
    </div>
  </div>
);

export default TestimonialCard;
