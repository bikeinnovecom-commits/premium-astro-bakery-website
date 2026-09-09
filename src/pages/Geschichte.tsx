import HeroCarousel from '../components/HeroCarousel';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import SplitText from '../components/SplitText';
import { storyImages, heroImages } from '../data/images';

const timeline = [
  {
    year: '1897',
    title: 'Die Gründung',
    text: 'Alois Königsbrot eröffnet am Fuße der Alpen seine erste Backstube. Ein hölzerner Steinofen, ein Sack Roggenmehl, ein Traum.',
  },
  {
    year: '1929',
    title: 'Zweite Generation',
    text: 'Sohn Josef übernimmt und führt die traditionelle Sauerteigführung ein, die bis heute unser Markenzeichen ist.',
  },
  {
    year: '1954',
    title: 'Der neue Steinofen',
    text: 'Der bis heute genutzte Steinofen wird in Handarbeit gemauert – befeuert mit Buchenholz aus dem Bayerischen Wald.',
  },
  {
    year: '1982',
    title: 'Bio-Wende',
    text: 'Als eine der ersten Bäckereien Bayerns stellen wir vollständig auf regionales Bio-Mehl um.',
  },
  {
    year: '2011',
    title: 'Vierte Generation',
    text: 'Meisterbäcker Franz Königsbrot bringt neue Kraft, ohne die Wurzeln zu vergessen. Neue Rezepturen entstehen.',
  },
  {
    year: 'Heute',
    title: 'Immer noch echt',
    text: 'Kein Backmittel. Keine Abkürzung. Nur Zeit, Feuer und Handwerk. So wie damals, so wie morgen.',
  },
];

export default function Geschichte() {
  return (
    <div className="page-enter">
      <HeroCarousel
        eyebrow="Vier Generationen"
        slides={[
          { src: storyImages.village, title: 'Wo alles begann', subtitle: 'Am Fuße der bayerischen Alpen.' },
          { src: storyImages.baker, title: 'Handwerk in Reinform', subtitle: 'Jede Bewegung, jahrzehntelang perfektioniert.' },
          { src: storyImages.allgau, title: 'Aus der Heimat', subtitle: 'Wir kennen unsere Bauern beim Namen.' },
          heroImages[2],
        ]}
      />

      <Marquee
        items={['1897', 'Alois Königsbrot', 'Vier Generationen', '125 Jahre Tradition', 'Bayern', 'Handwerk']}
        variant="light"
      />

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <div className="divider text-xs uppercase tracking-[0.5em] mb-6">Unsere Geschichte</div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#3b2617] leading-[0.95]">
          <span className="anim-widen block">Ein Handwerk,</span>
          <span className="block italic text-gold-gradient anim-zoom" style={{ animationDelay: '.4s' }}>
            das bleibt.
          </span>
        </h1>
        <Reveal delay={200}>
          <p className="mt-8 text-lg md:text-xl text-[#5a3a22] leading-relaxed max-w-3xl mx-auto font-light">
            Vier Generationen. Ein Ofen. Unzählige Brote. Die Geschichte der Bäckerei Königsbrot
            ist die Geschichte einer Familie, die nie aufgehört hat zu glauben, dass ehrliches Handwerk
            und Zeit das Beste hervorbringen.
          </p>
        </Reveal>
      </section>

      {/* Big image with overlay text */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <Reveal>
          <div className="img-zoom relative rounded-3xl overflow-hidden shadow-2xl">
            <img src={storyImages.village} alt="Bayerisches Dorf" className="w-full aspect-21/9 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 md:bottom-14 left-8 md:left-14 right-8 md:right-14">
              <div className="text-[#f2d089] text-xs uppercase tracking-[0.5em] mb-3 anim-widen">
                Am Fuße der Alpen
              </div>
              <h2 className="font-serif text-white text-3xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
                <SplitText text="Wo Bäche klar sind und Weizen wild wächst." stagger={30} />
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
              <SplitText text="Vier Generationen" />
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
                  { t: 'Regionalität', d: 'Alle Rohstoffe aus einem Umkreis von 50 km.' },
                  { t: 'Handarbeit', d: 'Jedes Brot wird von Hand geformt – keine Maschine ersetzt Fingerspitzengefühl.' },
                  { t: 'Ehrlichkeit', d: 'Kein Backmittel, keine Zusatzstoffe. Nur Mehl, Wasser, Salz und Zeit.' },
                  { t: 'Verantwortung', d: 'Faire Löhne, faire Preise, faire Bauern.' },
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
              <em className="text-[#f2d089]">Wir backen Erinnerungen.</em>“
            </h3>
            <div className="mt-6 text-white/70 font-display italic">— Familie Königsbrot</div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
