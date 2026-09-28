import { useEffect, useState } from 'react';
import { heroImages } from '../data/images';

type Props = {
  slides?: typeof heroImages;
  eyebrow?: string;
};

export default function HeroCarousel({ slides = heroImages, eyebrow = 'Willkommen in Bayern' }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full aspect-21/9 min-h-[380px]">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
              i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center ${i === index ? 'ken-burns' : ''}`}
              style={{ backgroundImage: `url(${s.src})` }}
              key={`bg-${i}-${index}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-3xl" key={`content-${index}`}>
            <div className="anim-widen text-[#f2d089] uppercase text-xs md:text-sm tracking-[0.5em] mb-4 md:mb-6 font-light">
              {eyebrow}
            </div>
            <h1 className="anim-zoom-out font-serif text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-semibold drop-shadow-2xl">
              {slides[index].title}
            </h1>
            <p className="anim-fade-up text-white/90 mt-6 md:mt-8 text-lg md:text-2xl font-display italic max-w-2xl" style={{ animationDelay: '.4s' }}>
              {slides[index].subtitle}
            </p>
            <div className="anim-fade-up mt-8 md:mt-10 flex flex-wrap gap-4" style={{ animationDelay: '.7s' }}>
              <a
                href="#produkte"
                className="px-8 py-4 bg-[#f2d089] text-[#3b2617] text-xs uppercase tracking-[0.3em] hover:bg-white transition-colors duration-500 rounded-full"
              >
                Unsere Spezialitäten
              </a>
              <a
                href="#geschichte"
                className="px-8 py-4 border border-white/60 text-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-[#3b2617] transition-all duration-500 rounded-full"
              >
                Unsere Geschichte
              </a>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group"
              aria-label={`Slide ${i + 1}`}
            >
              <div
                className={`h-[3px] transition-all duration-500 ${
                  i === index ? 'w-14 bg-[#f2d089]' : 'w-6 bg-white/40 group-hover:bg-white/70'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-10 text-white/80 text-xs tracking-[0.4em] font-light hidden md:block">
          {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>

        {/* Side ornament */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-10 text-white/60 text-[10px] tracking-[0.4em] font-light [writing-mode:vertical-rl] rotate-180 hidden md:block">
          BÄCKEREI-KONDITOREI · WENZEL · ASCHAFFENBURG
        </div>
      </div>
    </section>
  );
}
