type Props = { onNavigate: (p: string) => void };

export default function Footer({ onNavigate }: Props) {
  return (
    <footer className="bg-[#1a120a] text-[#efe3cc] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#c89a4b,transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-serif text-3xl md:text-4xl">
            Bäckerei <span className="italic text-[#f2d089]">Königsbrot</span>
          </div>
          <p className="mt-4 text-[#efe3cc]/70 max-w-md leading-relaxed">
            Seit über 125 Jahren backen wir mit Leidenschaft und regionalen Zutaten. 
            Ein Stück Bayern in jeder Kruste.
          </p>
          <div className="mt-6 flex gap-3">
            {['Instagram', 'Facebook', 'Pinterest'].map((s) => (
              <a
                key={s}
                href="#"
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
          <div className="uppercase text-xs tracking-[0.3em] text-[#c89a4b] mb-4">Besuchen Sie uns</div>
          <p className="text-[#efe3cc]/80 leading-relaxed text-sm">
            Marienplatz 12<br />
            80331 München<br />
            Bayern, Deutschland
          </p>
          <p className="mt-4 text-[#efe3cc]/80 text-sm">
            Mo–Fr 06:00–18:30<br />
            Sa 06:00–14:00<br />
            So 07:00–12:00
          </p>
        </div>
      </div>
      <div className="border-t border-[#efe3cc]/10 py-6 text-center text-xs text-[#efe3cc]/50 tracking-wider">
        © 2026 Bäckerei Königsbrot · Alle Rechte vorbehalten · Handgemacht in Bayern
      </div>
    </footer>
  );
}
