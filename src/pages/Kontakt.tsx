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
        eyebrow="Wir freuen uns auf Ihren Besuch"
        slides={[heroImages[3], { src: storyImages.baker, title: 'Besuchen Sie uns', subtitle: '2 × in Aschaffenburg.' }, heroImages[0]]}
      />

      <Marquee
        items={['Steubenstraße 77 · Schweinheim', 'Sandgasse 47 · Innenstadt', 'Mo–Fr 06:00–18:00', 'Sa 06:00–13:00', 'So 08:00–11:00']}
        variant="dark"
        speed="slow"
      />

      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-14 text-center">
        <div className="divider text-xs uppercase tracking-[0.5em] mb-6">Kontakt</div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#3b2617] leading-[0.95]">
          <span className="anim-widen block">Herzlich</span>
          <span className="block italic text-gold-gradient anim-zoom" style={{ animationDelay: '.4s' }}>
            Willkommen.
          </span>
        </h1>
        <Reveal delay={300}>
          <p className="mt-8 text-lg md:text-xl text-[#5a3a22] font-light max-w-2xl mx-auto leading-relaxed">
            Sie können unsere Filialen zu den angegebenen Öffnungszeiten telefonisch erreichen
            oder jederzeit per E-Mail.
          </p>
        </Reveal>
      </section>

      {/* Contact cards + form */}
      <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32 grid lg:grid-cols-5 gap-10">
        {/* Info */}
        <div className="lg:col-span-2 space-y-6">
          {[
            {
              t: 'Filiale Schweinheim',
              v: 'Steubenstraße 77\n63743 Aschaffenburg\nTel. 06021 / 95603\nFax 06021 / 960103',
              icon: '📍',
            },
            {
              t: 'Filiale Innenstadt',
              v: 'Sandgasse 47\n63739 Aschaffenburg\nTel. 06021 / 23212\nFax 06021 / 581270',
              icon: '�',
            },
            {
              t: 'E-Mail',
              v: 'info@baeckerei-wenzel.com',
              icon: '✉️',
            },
            {
              t: 'Öffnungszeiten',
              v: 'Schweinheim:\nMo–Fr  06:00 – 18:00\nSa       06:00 – 13:00\nSo       08:00 – 11:00\n\nInnenstadt:\nMo–Fr  06:30 – 18:30\nSa       06:00 – 13:00',
              icon: '🕰️',
            },
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
                  <span className="anim-widen block">Was darf es</span>
                  <span className="block italic text-[#f2d089] anim-zoom" style={{ animationDelay: '.3s' }}>
                    für Sie sein?
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
                      <span className="text-[#f2d089]/80 text-xs uppercase tracking-[0.3em]">Absender E-Mail</span>
                      <input
                        required
                        type="email"
                        className="mt-2 w-full bg-transparent border-b border-[#f2d089]/40 py-3 text-white outline-none focus:border-[#f2d089] transition-colors"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-[#f2d089]/80 text-xs uppercase tracking-[0.3em]">Absender Telefon</span>
                    <input
                      type="tel"
                      className="mt-2 w-full bg-transparent border-b border-[#f2d089]/40 py-3 text-white outline-none focus:border-[#f2d089] transition-colors"
                    />
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

      {/* Map – Aschaffenburg Schweinheim */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-21/9 bg-[#efe3cc]">
            <iframe
              title="Bäckerei Wenzel Aschaffenburg"
              src="https://www.openstreetmap.org/export/embed.html?bbox=9.120%2C49.950%2C9.185%2C49.995&layer=mapnik&marker=49.9622%2C9.1649"
              className="absolute inset-0 w-full h-full grayscale-[30%]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute top-6 left-6 bg-[#3b2617] text-[#f2d089] rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-[10px] uppercase tracking-[0.3em]">Filiale Schweinheim</div>
              <div className="font-serif text-xl">Steubenstraße 77, Aschaffenburg</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Big drift text */}
      <section className="bg-[#efe3cc] py-24 relative overflow-hidden">
        <div className="marquee-track slow text-[#3b2617]/15 font-serif italic text-[6rem] md:text-[10rem] leading-none whitespace-nowrap select-none">
          <span>Willkommen · Herzlich · Auf Wiedersehen · Bis bald ·&nbsp;</span>
          <span>Willkommen · Herzlich · Auf Wiedersehen · Bis bald ·&nbsp;</span>
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
