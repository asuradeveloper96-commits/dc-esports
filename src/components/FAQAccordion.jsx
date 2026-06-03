import { useState } from 'react';

const FAQAccordion = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-white/10 bg-panel p-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left text-sm text-white"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{item.question}</span>
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-4 text-sm leading-7 text-slate-300">{item.answer}</p>}
    </div>
  );
};

export default FAQAccordion;
