import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import { testimonials } from '@/data/site';

export default function GuestNotes() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(id);
  }, [reduce]);

  const t = testimonials[index];

  return (
    <section id="reviews" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal as="p" className="smallcaps text-xs text-brass-deep">
          Guest Notes
        </Reveal>

        <div className="relative mt-10 min-h-[260px] sm:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="font-display text-2xl font-light italic leading-snug text-charcoal sm:text-[1.7rem] text-balance">
                “{t.quote}”
              </p>
              <footer className="mt-7 text-sm text-charcoal-soft">
                <span className="text-charcoal">{t.name}</span>
                <span className="mx-2 text-brass-line">·</span>
                {t.trip}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
