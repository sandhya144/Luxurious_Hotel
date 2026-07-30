import { Link, useLocation } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import Seo from '@/components/Seo';
import { rooms } from '@/data/site';
import { useHashScroll } from '@/hooks/useHashScroll';

export default function Rooms() {
  const location = useLocation();
  useHashScroll(location.key);

  return (
    <main className="bg-ivory pt-28 md:pt-32">
      <Seo
        title="Rooms · The White House Hotel, Varanasi"
        description="Four room types at The White House Hotel — Deluxe, Super Deluxe, Family Suite, Executive, and Temple View. Clean, comfortable, steps from Kashi Vishwanath Temple."
        path="/rooms"
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Our Rooms" title="Four Rooms, Each Kept Spotless">
            From a calm Deluxe to our most-requested Temple View room — every room is
            cleaned daily and set up for a real night's rest.
          </SectionHeading>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-24 px-6 pb-28 md:space-y-32 md:pb-36">
        {rooms.map((room, i) => (
          <Reveal
            key={room.id}
            delay={i * 0.05}
            className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
          >
            <div className={`overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
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
              <p className="smallcaps text-xs text-brass-deep">
                From ₹{room.priceFrom.toLocaleString('en-IN')}/night
              </p>
              <h3 className="font-display text-3xl font-light text-charcoal sm:text-4xl">
                {room.name}
              </h3>
              <p className="text-base font-light leading-relaxed text-charcoal-soft">
                {room.blurb}
              </p>
              <p className="text-sm text-charcoal-soft">
                {room.size} · {room.guests} guests · {room.amenitiesInline}
              </p>
              <Link
                to="/#contact"
                className="inline-block border border-brass-line/60 px-7 py-3 text-xs uppercase tracking-wider2 text-brass-deep transition-all duration-300 hover:bg-brass hover:border-brass hover:text-ivory"
              >
                Reserve
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
