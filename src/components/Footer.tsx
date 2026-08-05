import { Link } from 'react-router-dom';
import Logo from './Logo';
import { hotel, navLinks } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();
    
  return (
    <footer className="border-t border-brass-line/50 bg-stone/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-charcoal-soft">
              A family-run homestay in the old city of Varanasi provides a warm, clean, quiet
              stay, steps from Kashi Vishwanath Temple and the ghats.
            </p>
          </div>

          <div className="space-y-4">
            <p className="smallcaps text-sm font-medium text-brass-deep">Explore</p>
            <ul className="space-y-2.5 text-sm text-charcoal-soft">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="transition-colors hover:text-brass-deep">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="smallcaps text-sm font-medium text-brass-deep">Get in touch</p>
            <address className="space-y-2.5 text-sm not-italic leading-relaxed text-charcoal-soft">
              <p>{hotel.address}</p>
      
              <p>
                <a href={`mailto:${hotel.email}`} className="transition-colors hover:text-brass-deep">
                  {hotel.email}
                </a>
              </p>
            </address>

               <div className="flex flex-wrap items-center gap-2">
    <a
      href={hotel.whatsappMsgNo}
      className="inline-flex items-center justify-center rounded-sm border border-brass-line px-3 py-1 text-sm font-medium tracking-wide text-charcoal/90 transition-all duration-300 hover:border-brass-deep hover:bg-brass-deep hover:text-ivory"
    >
      WhatsApp
    </a>

    <a
      href={hotel.phoneHref}
      className="inline-flex items-center justify-center rounded-sm border border-brass-line px-4 py-1 text-sm font-medium tracking-wide text-charcoal/90 transition-all duration-300 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
    >
      Call
    </a>
  </div>
      
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-brass-line/40 pt-7 text-xs text-charcoal-soft sm:flex-row sm:items-center">
          <p>© {year} The White House, Varanasi. All rights are reserved.</p>
          {/* <p className="smallcaps">Family-run · Since 2009</p> */}
        </div>
      </div>
    </footer>
  );
}
