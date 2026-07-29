import Reveal from '@/components/Reveal';

export default function Facilities() {
  return (
    <section className="bg-ivory pb-24 md:pb-32 pt-4">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal as="p" className="text-lg font-light leading-relaxed text-charcoal-soft sm:text-xl text-balance">
          Every stay includes free WiFi, 24-hour reception, room service, travel-desk
          support, on-site parking, and power backup — the essentials, done properly.
        </Reveal>
      </div>
    </section>
  );
}
