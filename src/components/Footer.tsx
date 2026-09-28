type Props = { onNavigate: (p: string) => void };

export default function Footer({ onNavigate }: Props) {
  return (
    <footer className="bg-[#1a120a] text-[#efe3cc] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#c89a4b,transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="inline-block bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-4 py-2">
            <img src="/logo-wenzel.png" alt="Bäckerei-Konditorei Wenzel" className="h-14 w-auto object-contain" />
          </div>
          <p className="mt-4 text-[#efe3cc]/70 max-w-md leading-relaxed">
            Wir produzieren in unserer eigenen Backstube nach handwerklicher Tradition
            mit ausgesuchten und geprüften Rohstoffen. Backen ist bei uns Tradition seit 1929.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { s: 'Instagram', href: 'https://www.instagram.com/der.brotmacher/' },
              { s: 'Facebook', href: 'https://www.facebook.com/der.brotmacher' },
            ].map(({ s, href }) => (
              <a
                key={s}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#efe3cc]/20 rounded-full text-xs uppercase tracking-[0.3em] hover:bg-[#c89a4b] hover:text-[#1a120a] hover:border-[#c89a4b] transition-all duration-500"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="uppercase text-xs tracking-[0.3em] text-[#c89a4b] mb-4">Navigation</div>
          <ul className="space-y-2">
            {[
              { id: 'home', l: 'Startseite' },
              { id: 'produkte', l: 'Produkte' },
              { id: 'geschichte', l: 'Unsere Geschichte' },
              { id: 'kontakt', l: 'Kontakt' },
            ].map((i) => (
              <li key={i.id}>
                <button onClick={() => onNavigate(i.id)} className="hover:text-[#f2d089] transition-colors">
                  {i.l}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="uppercase text-xs tracking-[0.3em] text-[#c89a4b] mb-4">Unsere Filialen</div>
          <p className="text-[#efe3cc]/80 leading-relaxed text-sm">
            <span className="text-[#c89a4b]">Schweinheim</span><br />
            Steubenstraße 77, 63743 Aschaffenburg<br />
            Tel. 06021 / 95603
          </p>
          <p className="mt-4 text-[#efe3cc]/80 text-sm">
            <span className="text-[#c89a4b]">Innenstadt</span><br />
            Sandgasse 47, 63739 Aschaffenburg<br />
            Tel. 06021 / 23212
          </p>
          <p className="mt-4 text-[#efe3cc]/80 text-sm">
            Mo–Fr 06:00–18:00<br />
            Sa 06:00–13:00<br />
            So 08:00–11:00
          </p>
        </div>
      </div>
      <div className="border-t border-[#efe3cc]/10 py-6 text-center text-xs text-[#efe3cc]/50 tracking-wider">
        © 2026 Bäckerei-Konditorei Wenzel · Alle Rechte vorbehalten · Handgemacht seit 1929
      </div>
    </footer>
  );
}
