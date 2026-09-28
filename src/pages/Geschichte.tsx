import HeroCarousel from '../components/HeroCarousel';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import SplitText from '../components/SplitText';
import { storyImages, heroImages } from '../data/images';

const timeline = [
  {
    year: '1929',
    title: 'Die Gründung',
    text: 'Gründung der Brot- und Feinbäckerei durch Philipp und Katharina Wenzel – mit dem Anspruch, höchste Qualität und besten Service zu bieten.',
  },
  {
    year: '1949',
    title: 'Umbau',
    text: 'Umbau des Bäckerhauses – die Bäckerei wächst und modernisiert sich, ohne die handwerkliche Tradition aufzugeben.',
  },
  {
    year: '1965',
    title: 'Zweite Generation',
    text: 'Übernahme und Vergrößerung der Bäckerei und des Verkaufsraumes durch Sohn Bernhard mit Frau Rosemarie.',
  },
  {
    year: '1980',
    title: 'Neue Filiale',
    text: 'Bau des Wohn- und Geschäftshauses in der Steubenstraße und Eröffnung einer 2. Verkaufsstätte in der Innenstadt.',
  },
  {
    year: '1990',
    title: 'Dritte Generation',
    text: 'Anbau einer neuen Backstube am Anwesen in der Steubenstraße und Beginn der Firmenleitung durch Sohn Bernhard junior mit Familie und Mutter Rosemarie Wenzel.',
  },
  {
    year: 'Heute',
    title: 'Ihre Bäckerei in Aschaffenburg',
    text: 'Mit zwei Filialen – in Schweinheim (Steubenstraße 77) und in der Innenstadt (Sandgasse 47) – blickt die Bäckerei Wenzel stolz auf über 95 Jahre Tradition zurück.',
  },
];

export default function Geschichte() {
  return (
    <div className="page-enter">
      <HeroCarousel
        eyebrow="Über 95 Jahre Tradition"
        slides={[
          { src: storyImages.village, title: 'Wo alles begann', subtitle: 'In Aschaffenburg, seit 1929.' },
          { src: storyImages.baker, title: 'Handwerk in Reinform', subtitle: 'Jede Bewegung, jahrzehntelang perfektioniert.' },
          { src: storyImages.allgau, title: 'Aus der Region', subtitle: 'Ausgesuchte und geprüfte Rohstoffe.' },
          heroImages[2],
        ]}
      />

      <Marquee
        items={['1929', 'Philipp & Katharina Wenzel', 'Familientradition', 'Über 95 Jahre', 'Aschaffenburg', 'Handwerk']}
        variant="light"
      />

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <div className="divider text-xs uppercase tracking-[0.5em] mb-6">Unsere Geschichte</div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#3b2617] leading-[0.95]">
          <span className="anim-widen block">Backen ist bei uns</span>
          <span className="block italic text-gold-gradient anim-zoom" style={{ animationDelay: '.4s' }}>
            Tradition seit 1929.
          </span>
        </h1>
        <Reveal delay={200}>
          <p className="mt-8 text-lg md:text-xl text-[#5a3a22] leading-relaxed max-w-3xl mx-auto font-light">
            Philipp und Katharina Wenzel gründeten 1929 die Brot- und Feinbäckerei in Aschaffenburg.
            Was als kleiner Familienbetrieb begann, ist heute eine feste Institution in der Region –
            mit demselben Anspruch an Qualität und persönlichem Service wie am ersten Tag.
          </p>
        </Reveal>
      </section>

      {/* Big image with overlay text */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <Reveal>
          <div className="img-zoom relative rounded-3xl overflow-hidden shadow-2xl">
            <img src={storyImages.village} alt="Aschaffenburg" className="w-full aspect-21/9 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 md:bottom-14 left-8 md:left-14 right-8 md:right-14">
              <div className="text-[#f2d089] text-xs uppercase tracking-[0.5em] mb-3 anim-widen">
                In Aschaffenburg
              </div>
              <h2 className="font-serif text-white text-3xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
                <SplitText text="Die Bäckerei mit der langen Tradition." stagger={30} />
              </h2>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="bg-[#efe3cc]/60 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="divider text-xs uppercase tracking-[0.5em] mb-4">Zeitleiste</div>
            <h2 className="font-serif text-4xl md:text-6xl text-[#3b2617]">
              <SplitText text="Über 95 Jahre Familientradition" />
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#a77a2c]/30" />
            <div className="space-y-16 md:space-y-24">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 80}>
                  <div className={`md:grid md:grid-cols-2 md:gap-16 items-center ${i % 2 ? 'md:[direction:rtl]' : ''}`}>
                    <div className={`md:[direction:ltr] ${i % 2 ? 'md:text-right' : ''} ${i % 2 ? 'anim-slide-r' : 'anim-slide-l'}`}>
                      <div className="font-serif text-6xl md:text-8xl text-gold-gradient leading-none">
                        {t.year}
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl text-[#3b2617] mt-4">{t.title}</h3>
                    </div>
                    <div className="md:[direction:ltr] mt-4 md:mt-0 relative">
                      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#a77a2c] ring-4 ring-[#efe3cc]" style={{ [i % 2 ? 'right' : 'left']: '-32px', left: 'auto' } as never} />
                      <p className="text-[#5a3a22] text-lg leading-relaxed">{t.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="img-zoom rounded-3xl overflow-hidden shadow-2xl">
              <img src={storyImages.kneading} alt="Teig kneten" className="w-full aspect-[4/5] object-cover" />
            </div>
          </Reveal>
          <div>
            <div className="divider text-xs uppercase tracking-[0.5em] mb-6">Unsere Werte</div>
            <h3 className="font-serif text-4xl md:text-6xl text-[#3b2617] leading-tight">
              <span className="anim-widen block">Gutes braucht</span>
              <span className="block italic text-[#a77a2c] anim-zoom" style={{ animationDelay: '.3s' }}>
                seine Zeit.
              </span>
            </h3>
            <Reveal delay={200}>
              <ul className="mt-8 space-y-5">
                {[
                  { t: 'Eigene Backstube', d: 'Wir produzieren in unserer eigenen Backstube nach handwerklicher Tradition – täglich frisch, ohne Kompromisse.' },
                  { t: 'Ausgesuchte Rohstoffe', d: 'Nur ausgesuchte und geprüfte Rohstoffe kommen in unsere Produkte – für Qualität, die man schmeckt.' },
                  { t: 'Familientradition', d: 'Seit 1929 in Familienhand – von Generation zu Generation weitergegeben mit Leidenschaft und Sorgfalt.' },
                  { t: 'Persönlicher Service', d: 'Wir beraten Sie gerne über unser umfangreiches Sortiment an Bäckerei- und Konditoreierzeugnissen.' },
                ].map((v) => (
                  <li key={v.t} className="flex gap-4">
                    <div className="mt-2 w-2 h-2 rounded-full bg-[#a77a2c] flex-shrink-0" />
                    <div>
                      <div className="font-serif text-xl text-[#3b2617]">{v.t}</div>
                      <div className="text-[#5a3a22]/85">{v.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Big marquee outro */}
      <section className="bg-[#3b2617] py-32 relative overflow-hidden">
        <div className="marquee-track fast text-[#c89a4b]/20 font-serif italic text-[7rem] md:text-[12rem] leading-none whitespace-nowrap select-none">
          <span>Tradition · Handwerk · Familie ·&nbsp;</span>
          <span>Tradition · Handwerk · Familie ·&nbsp;</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <Reveal>
            <h3 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl">
              „Wir backen nicht nur Brot.<br />
              <em className="text-[#f2d089]">Wir backen mit Herzblut."</em>
            </h3>
            <div className="mt-6 text-white/70 font-display italic">— Familie Wenzel, seit 1929</div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
