import HeroCarousel from '../components/HeroCarousel';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import SplitText from '../components/SplitText';
import { products, galleryImages, storyImages } from '../data/images';

type Props = { onNavigate: (p: string) => void };

export default function Home({ onNavigate }: Props) {
  const featured = products.slice(0, 3);

  return (
    <div className="page-enter">
      <HeroCarousel eyebrow="Willkommen bei der Bäckerei WENZEL" />

      {/* Marquee */}
      <Marquee
        items={['Backen ist Tradition', 'Seit 1929', 'Eigene Backstube', 'Handwerkliche Tradition', 'Aschaffenburg', '2 Filialen']}
        variant="dark"
      />

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <Reveal>
          <div className="divider mb-6 text-xs uppercase tracking-[0.5em]">Seit 1929</div>
        </Reveal>
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-[#3b2617]">
          <span className="anim-widen block">Backen ist bei uns</span>
          <span className="block italic text-gold-gradient anim-zoom" style={{ animationDelay: '.4s' }}>
            Tradition seit 1929.
          </span>
        </h2>
        <Reveal delay={200}>
          <p className="mt-8 text-lg md:text-xl text-[#5a3a22] leading-relaxed max-w-3xl mx-auto font-light">
            Wir produzieren in unserer eigenen Backstube nach handwerklicher Tradition mit
            ausgesuchten und geprüften Rohstoffen. Was Philipp und Katharina Wenzel 1929 begannen,
            führen wir mit derselben Leidenschaft und Sorgfalt fort.
          </p>
        </Reveal>
      </section>

      {/* Feature grid */}
      <section id="produkte" className="bg-[#efe3cc]/60 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="divider text-xs uppercase tracking-[0.5em] mb-4">Handwerkliche Spezialitäten</div>
              <h3 className="font-serif text-4xl md:text-6xl text-[#3b2617] leading-tight">
                <SplitText text="Unsere Klassiker" />
              </h3>
            </div>
            <Reveal>
              <button
                onClick={() => onNavigate('produkte')}
                className="self-start md:self-auto px-8 py-3 rounded-full border-2 border-[#3b2617] text-[#3b2617] text-xs uppercase tracking-[0.3em] hover:bg-[#3b2617] hover:text-[#f2d089] transition-all duration-500"
              >
                Alle Produkte ansehen
              </button>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <article className="card-lift group bg-[#f7efe2] rounded-3xl overflow-hidden shadow-lg">
                  <div className="img-zoom aspect-[4/5] overflow-hidden bg-[#efe3cc] relative">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-[#3b2617]/90 backdrop-blur text-[#f2d089] px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.3em]">
                      {p.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="font-serif text-2xl text-[#3b2617]">{p.name}</h4>
                      <span className="text-[#a77a2c] font-medium">{p.price}</span>
                    </div>
                    <p className="mt-3 text-[#5a3a22]/85 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Split story */}
      <section id="geschichte" className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="img-zoom relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={storyImages.baker} alt="Bäckerhände" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute bottom-6 left-6 right-6 bg-[#f7efe2]/95 backdrop-blur rounded-xl p-4 text-[#3b2617]">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#a77a2c]">Seit 1929</div>
                <div className="font-serif text-xl mt-1">Familientradition in Backkunst</div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="divider text-xs uppercase tracking-[0.5em] mb-6">Unsere Geschichte</div>
            </Reveal>
            <h3 className="font-serif text-4xl md:text-6xl text-[#3b2617] leading-tight">
              <span className="anim-widen block">Ein Handwerk,</span>
              <span className="block italic text-[#a77a2c] anim-zoom" style={{ animationDelay: '.3s' }}>
                das bleibt.
              </span>
            </h3>
            <Reveal delay={200}>
              <p className="mt-6 text-[#5a3a22] text-lg leading-relaxed">
                Was Philipp und Katharina Wenzel 1929 in Aschaffenburg begannen, führen wir heute
                in der dritten Generation fort – mit denselben Werten, derselben Sorgfalt und
                derselben Liebe zum echten handwerklichen Backwerk.
              </p>
              <p className="mt-4 text-[#5a3a22] text-lg leading-relaxed">
                Zu unserem täglichen Angebot gehören frisch belegte Vesperbrötchen und Stangen.
                Für Ihren Kaffeegenuss bieten wir Ihnen frische Kaffeebohnen der Privatrösterei Braun in Mainaschaff.
              </p>
              <button
                onClick={() => onNavigate('geschichte')}
                className="mt-8 inline-flex items-center gap-3 text-[#3b2617] uppercase text-xs tracking-[0.3em] border-b-2 border-[#a77a2c] pb-1 hover:text-[#a77a2c] transition-colors"
              >
                Mehr erfahren →
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Horizontal drift text banner */}
      <section className="bg-[#3b2617] py-20 relative overflow-hidden">
        <div className="marquee-track slow text-[#c89a4b]/25 font-serif text-[8rem] md:text-[14rem] leading-none whitespace-nowrap select-none">
          <span>WENZEL · BROT · TRADITION ·&nbsp;</span>
          <span>WENZEL · BROT · TRADITION ·&nbsp;</span>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <Reveal>
            <div className="text-[#f2d089] uppercase text-xs tracking-[0.5em] mb-4">2 × in Aschaffenburg</div>
            <h3 className="font-serif text-white text-4xl md:text-6xl leading-tight max-w-3xl">
              „Backen ist bei uns{' '}
              <em className="text-[#f2d089]">Tradition seit 1929.</em>"
            </h3>
            <div className="mt-6 text-white/70 font-display italic">— Bäckerei-Konditorei Wenzel, Aschaffenburg</div>
          </Reveal>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <Reveal>
              <div className="divider text-xs uppercase tracking-[0.5em] mb-4">Impressionen</div>
            </Reveal>
            <h3 className="font-serif text-4xl md:text-6xl text-[#3b2617]">
              <SplitText text="Aus unserer Backstube" />
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={`img-zoom overflow-hidden rounded-2xl ${i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'} bg-[#efe3cc]`}>
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#efe3cc]/60 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { val: '1929', label: 'Gründung' },
              { val: '2', label: 'Filialen in Aschaffenburg' },
              { val: '95+', label: 'Jahre Tradition' },
            ].map((s) => (
              <Reveal key={s.label}>
                <div>
                  <div className="font-serif text-5xl md:text-7xl text-gold-gradient leading-none">{s.val}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-[#5a3a22]">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 pt-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3b2617] to-[#5a3a22] p-12 md:p-20 text-center">
              <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c89a4b]/20 blur-3xl" />
              <h3 className="relative font-serif text-4xl md:text-6xl text-white leading-tight">
                <span className="anim-widen block">Besuchen Sie uns</span>
                <span className="block italic text-gold-gradient anim-zoom" style={{ animationDelay: '.3s' }}>in Aschaffenburg!</span>
              </h3>
              <p className="relative mt-6 text-white/80 max-w-xl mx-auto">
                Sie können unsere Filialen zu den angegebenen Öffnungszeiten telefonisch erreichen
                oder jederzeit per E-Mail. Wir freuen uns auf Ihren Besuch!
              </p>
              <button
                onClick={() => onNavigate('kontakt')}
                className="relative mt-8 px-10 py-4 rounded-full bg-[#f2d089] text-[#3b2617] text-xs uppercase tracking-[0.3em] hover:bg-white transition-colors duration-500"
              >
                Kontakt & Öffnungszeiten
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
