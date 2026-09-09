import { useState } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import SplitText from '../components/SplitText';
import { heroImages, storyImages } from '../data/images';

export default function Kontakt() {
  const [sent, setSent] = useState(false);

  return (
    <div className="page-enter">
      <HeroCarousel
        eyebrow="Wir freuen uns"
        slides={[heroImages[3], { src: storyImages.baker, title: 'Sagen Sie Grüß Gott', subtitle: 'Am Marienplatz, mitten in München.' }, heroImages[0]]}
      />

      <Marquee
        items={['Mo–Fr 06:00–18:30', 'Sa 06:00–14:00', 'So 07:00–12:00', 'Marienplatz 12 · München', 'Vorbestellungen willkommen']}
        variant="dark"
        speed="slow"
      />

      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-14 text-center">
        <div className="divider text-xs uppercase tracking-[0.5em] mb-6">Kontakt</div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#3b2617] leading-[0.95]">
          <span className="anim-widen block">Grüß Gott</span>
          <span className="block italic text-gold-gradient anim-zoom" style={{ animationDelay: '.4s' }}>
            & willkommen.
          </span>
        </h1>
        <Reveal delay={300}>
          <p className="mt-8 text-lg md:text-xl text-[#5a3a22] font-light max-w-2xl mx-auto leading-relaxed">
            Ob Vorbestellung, Feier, Presse oder einfach ein Kompliment –
            wir freuen uns über jede Nachricht.
          </p>
        </Reveal>
      </section>

      {/* Contact cards + form */}
      <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32 grid lg:grid-cols-5 gap-10">
        {/* Info */}
        <div className="lg:col-span-2 space-y-6">
          {[
            { t: 'Adresse', v: 'Marienplatz 12\n80331 München\nBayern, Deutschland', icon: '📍' },
            { t: 'Telefon', v: '+49 89 1234 5678\nMo–Sa erreichbar', icon: '📞' },
            { t: 'E-Mail', v: 'servus@koenigsbrot.de\nbestellung@koenigsbrot.de', icon: '✉️' },
            { t: 'Öffnungszeiten', v: 'Mo–Fr  06:00 – 18:30\nSa       06:00 – 14:00\nSo       07:00 – 12:00', icon: '🕰️' },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <div className="card-lift bg-[#f7efe2] border border-[#a77a2c]/20 rounded-2xl p-6 flex gap-5">
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-[#3b2617] text-[#f2d089] flex items-center justify-center text-2xl">
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[#a77a2c]">{c.t}</div>
                  <div className="mt-1 font-serif text-lg text-[#3b2617] whitespace-pre-line leading-relaxed">
                    {c.v}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <Reveal>
            <div className="bg-[#3b2617] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#c89a4b]/20 blur-3xl" />
              <div className="relative">
                <div className="text-[#f2d089] text-xs uppercase tracking-[0.5em] mb-3">Schreiben Sie uns</div>
                <h3 className="font-serif text-white text-3xl md:text-5xl leading-tight">
                  <span className="anim-widen block">Was dürfen wir</span>
                  <span className="block italic text-[#f2d089] anim-zoom" style={{ animationDelay: '.3s' }}>
                    für Sie backen?
                  </span>
                </h3>

                <form
                  className="mt-8 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    setTimeout(() => setSent(false), 4000);
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="text-[#f2d089]/80 text-xs uppercase tracking-[0.3em]">Name</span>
                      <input
                        required
                        type="text"
                        className="mt-2 w-full bg-transparent border-b border-[#f2d089]/40 py-3 text-white outline-none focus:border-[#f2d089] transition-colors"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[#f2d089]/80 text-xs uppercase tracking-[0.3em]">E-Mail</span>
                      <input
                        required
                        type="email"
                        className="mt-2 w-full bg-transparent border-b border-[#f2d089]/40 py-3 text-white outline-none focus:border-[#f2d089] transition-colors"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-[#f2d089]/80 text-xs uppercase tracking-[0.3em]">Betreff</span>
                    <select className="mt-2 w-full bg-transparent border-b border-[#f2d089]/40 py-3 text-white outline-none focus:border-[#f2d089] transition-colors">
                      <option className="text-[#3b2617]">Vorbestellung</option>
                      <option className="text-[#3b2617]">Feier / Catering</option>
                      <option className="text-[#3b2617]">Presse</option>
                      <option className="text-[#3b2617]">Allgemeine Anfrage</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-[#f2d089]/80 text-xs uppercase tracking-[0.3em]">Nachricht</span>
                    <textarea
                      required
                      rows={5}
                      className="mt-2 w-full bg-transparent border-b border-[#f2d089]/40 py-3 text-white outline-none focus:border-[#f2d089] transition-colors resize-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-4 px-10 py-4 rounded-full bg-[#f2d089] text-[#3b2617] text-xs uppercase tracking-[0.3em] hover:bg-white transition-colors duration-500"
                  >
                    {sent ? '✓ Nachricht gesendet' : 'Nachricht senden'}
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-21/9 bg-[#efe3cc]">
            <iframe
              title="Kartenausschnitt München"
              src="https://www.openstreetmap.org/export/embed.html?bbox=11.567%2C48.135%2C11.577%2C48.140&layer=mapnik&marker=48.1374%2C11.5755"
              className="absolute inset-0 w-full h-full grayscale-[30%]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute top-6 left-6 bg-[#3b2617] text-[#f2d089] rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-[10px] uppercase tracking-[0.3em]">Uns finden</div>
              <div className="font-serif text-xl">Marienplatz 12, München</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Big drift text */}
      <section className="bg-[#efe3cc] py-24 relative overflow-hidden">
        <div className="marquee-track slow text-[#3b2617]/15 font-serif italic text-[6rem] md:text-[10rem] leading-none whitespace-nowrap select-none">
          <span>Servus · Grüß Gott · Pfiat di · Auf Wiederschaun ·&nbsp;</span>
          <span>Servus · Grüß Gott · Pfiat di · Auf Wiederschaun ·&nbsp;</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <Reveal>
            <h3 className="font-serif text-[#3b2617] text-4xl md:text-6xl leading-tight">
              <SplitText text="Bis bald in unserer Backstube." />
            </h3>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
