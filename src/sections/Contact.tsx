import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ReserveForm from '@/components/ReserveForm';
import { hotel } from '@/data/site';

export default function Contact() {
  return (
    <section id="contact" className="bg-stone/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Contact" title="Reserve Your Stay">
          Tell us your dates and we will hold a room for you. No deposit needed to enquire.
        </SectionHeading>

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-20">
          <Reveal className="space-y-8">
            <div className="space-y-3">
              <p className="smallcaps text-xs text-brass-deep">Address</p>
              <p className="text-base font-light leading-relaxed text-charcoal-soft">
                {hotel.address}
              </p>
              <p className="text-xs text-charcoal/50">[Please confirm the exact address before launch.]</p>
            </div>

            <div className="space-y-3">
              <p className="smallcaps text-xs text-brass-deep">Phone</p>
              <p>
                <a
                  href={hotel.phoneHref}
                  className="text-base text-charcoal transition-colors hover:text-brass-deep"
                >
                  {hotel.phone}
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <p className="smallcaps text-xs text-brass-deep">Email</p>
              <p>
                <a
                  href={`mailto:${hotel.email}`}
                  className="text-base text-charcoal transition-colors hover:text-brass-deep"
                >
                  {hotel.email}
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <p className="smallcaps text-xs text-brass-deep">Message us</p>
              <p className="text-sm text-charcoal-soft">
                <a href={hotel.whatsappHref} className="text-brass-deep underline-offset-4 hover:underline">
                  WhatsApp
                </a>
                <span className="mx-2 text-brass-line">·</span>
                <a href={hotel.phoneHref} className="text-brass-deep underline-offset-4 hover:underline">
                  Call
                </a>
              </p>
            </div>

            <div className="overflow-hidden border border-brass-line/40">
              <iframe
                title="Map of The White House Hotel, Varanasi"
                src={hotel.mapEmbed}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="border border-brass-line/50 bg-ivory p-7 sm:p-9">
            <ReserveForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
