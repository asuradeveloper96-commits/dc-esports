import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Download', path: '/download' },
  { label: 'Register', path: '/register' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('dc-theme') || 'dark';
    setTheme(stored);
    document.documentElement.classList.toggle('light', stored === 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('dc-theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-panel backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 font-semibold text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 via-sky-400 to-violet-700 text-lg text-white shadow-glow">
            DC
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-300">DC eSports</p>
            <p className="text-xs text-slate-500">Premium esports platform</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-purple-400/40 hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☾' : '☀'}
          </button>
          <Link
            to="/download"
            className="hidden rounded-full bg-gradient-to-r from-purple-500 to-sky-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:brightness-110 md:inline-flex"
          >
            Download App
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 md:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Open mobile menu"
          >
            <span className="text-xl">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-panel px-5 py-5 md:hidden">
          <div className="space-y-4">
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/40 hover:text-white"
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/download"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gradient-to-r from-purple-500 to-sky-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 shadow-glow"
            >
              Download App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
