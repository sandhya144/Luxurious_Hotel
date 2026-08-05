import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const pillars = [
  {
    title: 'Airport pickup',
    body: 'Smooth pickup, right on arrival.',
  },
  {
    title: '24 x 7 Reception',
    body: 'Always here, day or night.',
  },
  {
    title: 'Food',
    body: 'Home-cooked meals, made with love.',
  },
  {
    title: 'Laundry',
    body: 'Fast, reliable laundry service.',
  },
  {
    title: 'Parking',
    body: 'Free, secure parking on-site.',
  },
  {
    title: 'Local tour and travel guide',
    body: 'Expert tips for exploring Varanasi.',
  },
];


export default function Facilities() {
  return (
        <section id="facilities" className="border-y border-brass-line/40 bg-ivory scroll-mt-18 py-24 md:py-32">
              <div className="mx-auto max-w-3xl px-6 text-center">

               <SectionHeading align="center" eyebrow="Amenties" title="Every Detail, Taken Care Of">
                  Comfortable rooms, caring staff, and quiet conveniences — everything provided for an effortless stay.
                </SectionHeading>

         <div className="mt-16 space-y-12">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.12}
              className="grid gap-3 border-t border-brass-line/40 pt-7 sm:grid-cols-[180px_1fr] sm:gap-8"
            >
              <h3 className="font-display text-2xl font-light text-charcoal">{p.title}</h3>
              <p className="max-w-xl text-base font-light leading-relaxed text-charcoal-soft">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
