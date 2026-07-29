import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { nearby } from '@/data/site';

export default function Nearby() {
  return (
    <section className="bg-stone/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Nearby" title="Steps from the Sacred">
          Everything that brings people to Varanasi is within a short walk or ride.
        </SectionHeading>

        <ul className="mt-16 space-y-10">
          {nearby.map((place, i) => (
            <Reveal
              key={place.name}
              as="li"
              delay={i * 0.08}
              className="grid items-center gap-6 border-t border-brass-line/40 pt-7 sm:grid-cols-[140px_1fr_auto] sm:gap-10"
            >
              <div className="aspect-[5/4] overflow-hidden sm:w-[140px]">
                <img
                  src={place.image}
                  alt={place.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-light text-charcoal">{place.name}</h3>
                <p className="mt-1.5 text-sm font-light leading-relaxed text-charcoal-soft">{place.note}</p>
              </div>
              <p className="text-sm uppercase tracking-wider2 text-brass-deep sm:text-right">{place.distance}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
