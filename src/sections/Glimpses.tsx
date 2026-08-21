
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import { glimpses } from '@/data/site';

export default function Glimpses() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal as="p" className="mb-12 text-center font-medium smallcaps text-xs text-brass-deep">
          A Few Glimpses
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {glimpses.map((g, i) => (
            <Reveal key={i} delay={i * 0.08} className="overflow-hidden">
              <div
                className="gallery-card floating-img aspect-[4/5] overflow-hidden rounded-sm border border-brass-line/90 transition-colors duration-300 hover:border-brass-line/70"
                style={{
                  animationDelay: `${i * 0.35}s`,
                }}
              >
                <img
                  src={g.image}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-9 text-center">
          <Link
            to="/gallery"
            className="mt-5 inline-block border bg-brass px-8 py-3 text-xs uppercase tracking-wider2 text-white font-medium transition-all duration-300 hover:bg-brass hover:border-brass hover:text-ivory"
          >
            View Full Gallery →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

