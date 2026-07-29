import Reveal from '@/components/Reveal';
import { hotel } from '@/data/site';

export default function TrustLine() {
  return (
    <section className="border-y border-brass-line/40 bg-stone/40 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal as="p" className="smallcaps text-xs text-brass-deep">
          Trusted by Travellers
        </Reveal>
        <Reveal as="p" delay={0.1} className="mt-5 font-display text-2xl font-light leading-snug text-charcoal sm:text-3xl text-balance">
          Rated {hotel.rating}★ on Google by guests who've stayed with us — family-run,
          800 metres from the temple.
        </Reveal>
      </div>
    </section>
  );
}
