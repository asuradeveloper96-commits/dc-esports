import { Link } from 'react-router-dom';

const social = [
  { label: 'Instagram', href: 'https://instagram.com/stop.it.asura', icon: '📸' },
  { label: 'WhatsApp', href: 'https://wa.me/919693078797', icon: '💬' },
  { label: 'Email', href: 'mailto:asuradeveloper96@gmail.com', icon: '✉' },
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-panel py-12">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">DC eSports</p>
          <p className="max-w-sm text-sm leading-7 text-slate-300">
            A premium esports platform for organizers, gamers, and sponsors. Fast, secure, and built for modern competition.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Quick links</p>
          <div className="mt-5 grid gap-3 text-slate-300">
            <Link to="/about" className="hover:text-white">About Us</Link>
            <Link to="/download" className="hover:text-white">Download</Link>
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Connect</p>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:border-purple-400/40 hover:text-white"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        <p>© 2026 DC eSports. Built for competitive gaming experiences.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
