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
              A family-run hotel in the old city of Varanasi — a warm, clean, quiet
              stay, steps from Kashi Vishwanath Temple and the ghats.
            </p>
          </div>

          <div className="space-y-4">
            <p className="smallcaps text-xs text-brass-deep">Explore</p>
            <ul className="space-y-2.5 text-sm text-charcoal-soft">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="transition-colors hover:text-charcoal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="smallcaps text-xs text-brass-deep">Get in touch</p>
            <address className="space-y-2.5 text-sm not-italic leading-relaxed text-charcoal-soft">
              <p>{hotel.address}</p>
              <p>
                <a href={hotel.phoneHref} className="transition-colors hover:text-charcoal">
                  {hotel.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${hotel.email}`} className="transition-colors hover:text-charcoal">
                  {hotel.email}
                </a>
              </p>
              <p className="pt-2 text-xs uppercase tracking-wider2">
                <a href={hotel.whatsappHref} className="transition-colors hover:text-charcoal">
                  WhatsApp
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-brass-line/40 pt-7 text-xs text-charcoal-soft sm:flex-row sm:items-center">
          <p>© {year} The White House Hotel, Varanasi. All rights reserved.</p>
          <p className="smallcaps">Family-run · Since 2009</p>
        </div>
      </div>
    </footer>
  );
}
