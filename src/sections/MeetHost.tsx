import Reveal from '@/components/Reveal';
import { hotel } from '@/data/site';
import hostImg from "../assets/host 1.jpeg"

  
export default function MeetHost() {
  return (
    <section className="bg-stone/50 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-[360px_1fr] md:gap-16">
         <Reveal as="p" className="smallcaps text-center text-sm font-normal text-brass-deep">
            Meet Your Host
          </Reveal>
        <Reveal className="overflow-hidden">
          <div className="aspect-[4/5] overflow-hidden rounded-sm border border-brass-line/90">
            {/* REPLACE WITH REAL OWNER PHOTO */}
            <img
              src={hostImg}
              alt="The owner of The White House Hotel, Varanasi"
              loading="lazy"
              className="h-full w-full object-cover rounded-sm transition-transform duration-[1200ms] ease-out hover:scale-[1.04] "
            />
          </div>
        </Reveal>

        <div className="space-y-6">
         
          <Reveal as="p" delay={0.1} className="text-lg font-light leading-relaxed text-charcoal-soft">
            Namaste, and welcome. For the years, I have been welcoming travellers and pilgrims with heartfelt hospitality in the Kashi, and I still meet every guest personally. For me this is not a business —
            it is a way of sharing my city. Tell me what brought you here, and I will make
            sure you see Kashi the way it should be seen.
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-display text-3xl italic text-charcoal">— With warmth, the owner</p>
            <p className="mt-3 text-sm text-charcoal-soft"> Host Name ---</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
