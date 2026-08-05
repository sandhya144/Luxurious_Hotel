import Reveal from '@/components/Reveal';
import { hotel } from '@/data/site';

export default function ByNumbers() {
  return (
    <section className="border-y border-brass-line/40 bg-stone/40 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal as="p" className="text-center text-base font-light text-charcoal sm:text-lg">
          <span className="font-display text-xl sm:text-2xl">{hotel.rating}★</span> average rating
          <span className="mx-3 text-brass-line">·</span>
          {hotel.guestsHosted} guests hosted
          <span className="mx-3 text-brass-line">·</span>
          800m to the temple
          <span className="mx-3 text-brass-line">·</span>
           years of hospitality
        </Reveal>
      </div>
    </section>
  );
}
