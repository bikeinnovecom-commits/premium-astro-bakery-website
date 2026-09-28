import { useState } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import SplitText from '../components/SplitText';
import { products, heroImages } from '../data/images';

const categories = ['Alle', 'Backstube', 'Brötchen', 'Konditorei', 'Süßgebäck', 'Snack', 'Café'];

export default function Produkte() {
  const [cat, setCat] = useState('Alle');
  const filtered = cat === 'Alle' ? products : products.filter((p) => p.tag === cat);

  return (
    <div className="page-enter">
      <HeroCarousel
        eyebrow="Unsere Auswahl"
        slides={[heroImages[1], heroImages[3], heroImages[0]]}
      />

      <Marquee
        items={['Eigene Backstube', 'Handwerkliche Tradition', 'Geprüfte Rohstoffe', 'Aschaffenburg', 'Konditorei', 'Täglich frisch']}
        variant="gold"
        speed="fast"
      />

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-14 text-center">
        <div className="divider text-xs uppercase tracking-[0.5em] mb-6">Sortiment</div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#3b2617] leading-[0.95]">
          <span className="anim-widen block">Unsere</span>
          <span className="block italic text-gold-gradient anim-zoom" style={{ animationDelay: '.4s' }}>
            Produkte
          </span>
        </h1>
        <Reveal delay={300}>
          <p className="mt-8 text-lg md:text-xl text-[#5a3a22] font-light max-w-2xl mx-auto leading-relaxed">
            Wir produzieren in unserer eigenen Backstube nach handwerklicher Tradition
            mit ausgesuchten und geprüften Rohstoffen.
          </p>
        </Reveal>
      </section>

      {/* Filter */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.3em] border transition-all duration-500 ${
                cat === c
                  ? 'bg-[#3b2617] text-[#f2d089] border-[#3b2617]'
                  : 'bg-transparent text-[#3b2617] border-[#3b2617]/30 hover:border-[#3b2617]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="card-lift group bg-[#f7efe2] rounded-3xl overflow-hidden shadow-lg border border-[#a77a2c]/10">
                <div className="img-zoom aspect-[5/6] overflow-hidden bg-[#efe3cc] relative">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#3b2617]/90 backdrop-blur text-[#f2d089] px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.3em]">
                    {p.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#f2d089] text-[#3b2617] px-4 py-2 rounded-full font-serif text-lg">
                    {p.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#3b2617]">{p.name}</h3>
                  <p className="mt-3 text-[#5a3a22]/85 leading-relaxed">{p.desc}</p>
                  <button className="mt-5 w-full py-3 rounded-full bg-[#3b2617] text-[#f2d089] text-xs uppercase tracking-[0.3em] hover:bg-[#a77a2c] transition-colors duration-500">
                    In den Korb
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Horizontal quote strip */}
      <section className="bg-[#efe3cc] py-24 relative overflow-hidden">
        <div className="marquee-track slow reverse text-[#3b2617]/15 font-serif italic text-[6rem] md:text-[10rem] leading-none whitespace-nowrap select-none">
          <span>Genuss · Handwerk · Tradition · Wenzel ·&nbsp;</span>
          <span>Genuss · Handwerk · Tradition · Wenzel ·&nbsp;</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <Reveal>
            <div className="text-center max-w-3xl">
              <div className="divider text-xs uppercase tracking-[0.5em] mb-4">Unser Anspruch</div>
              <h3 className="font-serif text-4xl md:text-6xl text-[#3b2617] leading-tight">
                <SplitText text="Backen ist Tradition" />
              </h3>
              <p className="mt-6 text-[#5a3a22] text-lg">
                Wir produzieren in unserer eigenen Backstube nach handwerklicher Tradition
                mit ausgesuchten und geprüften Rohstoffen. Zu unserem täglichen Angebot gehören
                frisch belegte Vesperbrötchen und Stangen.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: 'Backstube', d: 'In der Backstube dreht sich alles um das traditionelle Handwerk des Brotbackens – täglich frisch, mit regionalen Zutaten.', icon: '�' },
            { t: 'Konditorei', d: 'Unsere Konditorei bietet ein umfangreiches Sortiment an feinen Kuchen, Torten und Süßgebäcken – für jeden besonderen Anlass.', icon: '🎂' },
            { t: 'Seit 1929', d: 'Was Philipp und Katharina Wenzel 1929 begannen, führen wir in Familientradition fort – mit Leidenschaft, Sorgfalt und Erfahrung.', icon: '🌾' },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 120}>
              <div className="card-lift bg-[#f7efe2] border border-[#a77a2c]/20 rounded-2xl p-8 h-full">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h4 className="font-serif text-2xl text-[#3b2617]">{f.t}</h4>
                <p className="mt-3 text-[#5a3a22]/85 leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
