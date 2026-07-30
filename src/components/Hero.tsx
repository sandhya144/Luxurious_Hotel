import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { heroSlides, heroPoster } from '@/data/site';
import herovideo from "../assets/HeroVideo.mp4"

export default function Hero() {
  const reduce = useReducedMotion();
  // const [slide, setSlide] = useState(0);

  // useEffect(() => {
  //   if (reduce) return;
  //   const id = setInterval(() => {
  //     setSlide((s) => (s + 1) % heroSlides.length);
  //   }, 5000);
  //   return () => clearInterval(id);
  // }, [reduce]);

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      {/* Self-running hotel montage — building, deluxe room, reception, breakfast, room detail */}
      {/* {heroSlides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
          style={{ opacity: i === slide ? 1 : 0, zIndex: i === slide ? 1 : 0 }}
          aria-hidden={i !== slide}
        >
          <img
            src={s.image}
            alt=""
            className="h-full w-full object-cover"
            style={{
              animation: i === slide && !reduce ? 'kenburns 7s ease-out forwards' : 'none',
            }}
            loading={i === 0 ? 'eager' : 'lazy'}
            // poster used as a hint for the first paint
            {...(i === 0 ? { 'data-poster': heroPoster } : {})}
          />
        </div>
      ))} */}

      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src={herovideo} type="video/mp4" />
  Your browser 
</video>

      {/* Legibility scrim */}
      <div className="absolute inset-0 z-[2] bg-charcoal/40" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8"
        >
          <Logo variant="ivory" />
        </motion.div>

        <motion.h1
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="max-w-4xl font-display text-5xl font-light leading-[1.05] text-ivory text-balance sm:text-6xl md:text-7xl"
        >
          A Warm Stay, Steps from Kashi
        </motion.h1>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.55 }}
          className="mt-7 max-w-2xl text-base font-light leading-relaxed text-ivory/90 sm:text-lg"
        >
          A family-run hotel 800 metres from Kashi Vishwanath Temple — where every guest
          is looked after like one of our own.
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
          className="mt-10"
        >
          <Link
            to="/#contact"
            className="inline-block border border-brass-line/80 px-9 py-3.5 text-xs uppercase tracking-wider2 text-ivory transition-all duration-300 hover:bg-brass hover:border-brass"
          >
            Book Your Stay
          </Link>
        </motion.div>
      </div>

      {/* Down chevron */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1.4 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown size={22} strokeWidth={1.2} className="text-ivory" />
      </motion.div>
    </section>
  );
}
