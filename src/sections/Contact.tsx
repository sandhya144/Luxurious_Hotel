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
              <p className="smallcaps text-sm font-medium text-brass-deep">Address</p>
              <p className="text-base font-light leading-relaxed text-charcoal/90">
                {hotel.address}
              </p>
              <p className="text-xs text-charcoal/60">Located near - Dashashwamedh Police Station</p>
            </div>

            <div className="space-y-3">
              <p className="smallcaps text-sm font-medium text-brass-deep">Phone</p>
              <p>
                <a
                  href={hotel.phoneHref}
                  className="text-base font-light text-charcoal/90 transition-colors hover:text-brass-deep"
                >
                  {hotel.phone}
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <p className="smallcaps text-sm font-medium text-brass-deep">Email</p>
              <p>
                <a
                  href={`mailto:${hotel.email}`}
                  className="text-base font-light text-charcoal/90 transition-colors hover:text-brass-deep"
                >
                  {hotel.email}
                </a>
              </p>
            </div>


            <div className="space-y-3">
  <p className="smallcaps text-sm font-medium text-brass-deep">
    Connect with us
  </p>

  <div className="flex flex-wrap items-center gap-3">
    <a
      href={hotel.whatsappMsgNo}
      className="inline-flex items-center justify-center rounded-sm border border-brass-line px-5 py-2 text-sm font-medium tracking-wide text-charcoal/90 transition-all duration-300 hover:border-brass-deep hover:bg-brass-deep hover:text-ivory"
    >
      WhatsApp
    </a>

    <a
      href={hotel.phoneHref}
      className="inline-flex items-center justify-center rounded-sm border border-brass-line px-5 py-2 text-sm font-medium tracking-wide text-charcoal/90 transition-all duration-300 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
    >
      Call
    </a>
  </div>
</div>

            <div className="overflow-hidden border border-brass-line/70">
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
