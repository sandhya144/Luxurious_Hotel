

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '@/data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const onHome = location.pathname === '/';
  const overHero = onHome && !scrolled;
  const variant = overHero ? 'ivory' : 'charcoal';
  const linkColor = overHero ? 'text-ivory/85' : 'text-charcoal/80';

  // Closes the mobile drawer for ANY link, including same-page hash links
  // (where location.pathname never changes on its own), then manually
  // scrolls to the target section once the drawer is out of the way.
  const handleNavClick = (to: string) => {
    setOpen(false);

    if (to.includes('#')) {
      const id = to.split('#')[1];
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 350); // roughly matches the drawer's exit animation duration
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          overHero
            ? 'bg-transparent'
            : 'bg-ivory/95 backdrop-blur-sm border-b border-brass-line/50'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">
          <Link to="/" aria-label="The White House Hotel — home" className="shrink-0">
            <Logo variant={variant} />
          </Link>

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  onClick={() => handleNavClick(l.to)}
                  className={`nav-link ${linkColor} hover:text-current`}
                  data-active={false}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/#contact"
              onClick={() => handleNavClick('/#contact')}
              className={`nav-link ${linkColor} border border-brass-line/60 px-5 py-2 transition-colors duration-300 hover:bg-brass hover:border-brass hover:text-ivory`}
            >
              Book Your Stay
            </Link>
          </div>

          <button
            type="button"
            className={`lg:hidden ${overHero ? 'text-ivory' : 'text-charcoal'}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-ivory lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Logo />
              <button
                type="button"
                className="text-charcoal"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-7">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
                >
                  <Link
                    to={l.to}
                    onClick={() => handleNavClick(l.to)}
                    className="font-display text-3xl text-charcoal hover:text-brass transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.07, duration: 0.4, ease: 'easeOut' }}
              >
                <Link
                  to="/#contact"
                  onClick={() => handleNavClick('/#contact')}
                  className="mt-2 inline-block border border-brass px-6 py-2.5 text-xs uppercase tracking-wider2 text-brass transition-colors hover:bg-brass hover:text-ivory"
                >
                  Book Your Stay
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



