import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import { glimpses } from '@/data/site';

export default function Glimpses() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal as="p" className="mb-10 text-center smallcaps text-xs text-brass-deep">
          A Few Glimpses
        </Reveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {glimpses.map((g, i) => (
            <Reveal key={i} delay={i * 0.08} className="overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden md:aspect-[3/4]">
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
            className="text-xs uppercase tracking-wider2 text-brass-deep transition-colors hover:text-charcoal"
          >
            View Full Gallery →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
