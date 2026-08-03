import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const pillars = [
  {
    title: 'Hospitality',
    body: 'Attentive, personal care from the owner and staff — the kind where someone remembers your morning tea without being asked.',
  },
  {
    title: 'Location',
    body: 'A pleasant walk from Kashi Vishwanath Temple and the ghats. You step out of our door and into the heart of the old city.',
  },
  {
    title: 'Comfort & Cleanliness',
    body: 'Hygienic rooms, daily housekeeping, free WiFi, and a peaceful night — the essentials, done with real care.',
  },
];

export default function WelcomePillars() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading align="center" eyebrow="A Welcome Note" title="The Stay, in Our Words">
          We are a small, family-run homestay and we have always believed that hospitality is
          a personal thing. When you stay with us, you are not a room number — you are a
          guest in our home. Clean, comfortable rooms, a short walk to Kashi Vishwanath
          Temple, and people who genuinely want your trip to go well. That is the whole of it.
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
