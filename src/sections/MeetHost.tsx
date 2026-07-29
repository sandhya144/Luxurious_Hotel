import Reveal from '@/components/Reveal';
import { hotel } from '@/data/site';

const ownerPhoto =
  'https://images.unsplash.com/photo-1624797432677-6f803a98acb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww';

export default function MeetHost() {
  return (
    <section className="bg-stone/50 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-[360px_1fr] md:gap-16">
        <Reveal className="overflow-hidden">
          <div className="aspect-[4/5] overflow-hidden">
            {/* REPLACE WITH REAL OWNER PHOTO */}
            <img
              src={ownerPhoto}
              alt="The owner of The White House Hotel, Varanasi"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal as="p" className="smallcaps text-xs text-brass-deep">
            Meet Your Host
          </Reveal>
          <Reveal as="p" delay={0.1} className="text-lg font-light leading-relaxed text-charcoal-soft">
            Namaste, and welcome. I have been hosting guests in Varanasi for over fifteen
            years, and I still meet every guest personally. For me this is not a business —
            it is a way of sharing my city. Tell me what brought you here, and I will make
            sure you see Kashi the way it should be seen.
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-display text-3xl italic text-charcoal">— With warmth, the owner</p>
            <p className="mt-3 text-sm text-charcoal-soft">{hotel.yearsHosting} years hosting guests personally.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
