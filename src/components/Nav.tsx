import { useState, useEffect } from 'react';

type Props = {
  current: string;
  onNavigate: (page: string) => void;
};

const links = [
  { id: 'home', label: 'Startseite' },
  { id: 'produkte', label: 'Produkte' },
  { id: 'geschichte', label: 'Unsere Geschichte' },
  { id: 'kontakt', label: 'Kontakt' },
];

export default function Nav({ current, onNavigate }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#f7efe2]/90 backdrop-blur-md py-3 shadow-[0_10px_30px_-15px_rgba(59,38,23,0.35)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center group"
        >
          <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-xl px-3 py-1.5 shadow-sm group-hover:bg-white/30 transition-all duration-300">
            <img
              src="/logo-wenzel.png"
              alt="Bäckerei-Konditorei Wenzel"
              className="h-12 w-auto object-contain"
            />
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => onNavigate(l.id)}
              className={`relative px-5 py-2 text-sm uppercase tracking-[0.2em] transition-colors ${
                current === l.id ? 'text-[#a77a2c]' : 'text-[#3b2617] hover:text-[#a77a2c]'
              }`}
            >
              {l.label}
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] bg-[#a77a2c] transition-all duration-500 ${
                  current === l.id ? 'w-6' : 'w-0'
                }`}
              />
            </button>
          ))}
          <button
            onClick={() => onNavigate('kontakt')}
            className="ml-4 px-6 py-3 rounded-full bg-[#3b2617] text-[#f7efe2] text-xs uppercase tracking-[0.3em] hover:bg-[#a77a2c] transition-colors duration-500"
          >
            Bewerben
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full border border-[#a77a2c]/40 text-[#3b2617]"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-[2px] bg-current transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-current transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-current transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <div className="mx-6 rounded-2xl bg-[#f7efe2] border border-[#a77a2c]/20 p-4 space-y-1 shadow-xl">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                onNavigate(l.id);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg uppercase tracking-[0.2em] text-sm ${
                current === l.id ? 'bg-[#3b2617] text-[#f7efe2]' : 'text-[#3b2617] hover:bg-[#efe3cc]'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
