import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { rooms } from '@/data/site';

export default function RoomsTeaser() {
  const teaser = rooms.slice(0, 2);
  return (
    <section id="rooms" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Our Rooms" title="A Room for Every Kind of Stay">
          Five room types, each kept spotless and made for real rest after a day in the city.
        </SectionHeading>

        <div className="mt-16 space-y-20">
          {teaser.map((room, i) => (
            <Reveal
              key={room.id}
              delay={i * 0.1}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16`}
            >
              <div
                className={`overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                  />
                </div>
              </div>
              <div className={`space-y-5 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="smallcaps text-xs text-brass-deep">From ₹{room.priceFrom.toLocaleString('en-IN')}/night</p>
                <h3 className="font-display text-3xl font-light text-charcoal sm:text-4xl">{room.name}</h3>
                <p className="text-base font-light leading-relaxed text-charcoal-soft">{room.blurb}</p>
                <p className="text-sm text-charcoal-soft">
                  {room.size} · {room.guests} guests · {room.amenitiesInline}
                </p>
                <Link
                  to="/rooms"
                  className="inline-block text-xs uppercase tracking-wider2 text-brass-deep transition-colors hover:text-charcoal"
                >
                  Reserve →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-16 text-center">
          <Link
            to="/rooms"
            className="inline-block border border-brass-line/60 px-8 py-3 text-xs uppercase tracking-wider2 text-brass-deep transition-all duration-300 hover:bg-brass hover:border-brass hover:text-ivory"
          >
            See All Rooms
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
