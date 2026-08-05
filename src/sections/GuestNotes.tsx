// import { useEffect, useState } from 'react';
// import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
// import Reveal from '@/components/Reveal';
// import { testimonials } from '@/data/site';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// export default function GuestNotes() {
//   const reduce = useReducedMotion();
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (reduce) return;
//     const id = setInterval(() => {
//       setIndex((i) => (i + 1) % testimonials.length);
//     }, 9000);
//     return () => clearInterval(id);
//   }, [reduce]);


// const handlePrev = () => {
//   if (index > 0) {
//     setIndex(index - 1);
//   }
// };

// const handleNext = () => {
//   if (index < testimonials.length - 1) {
//     setIndex(index + 1);
//   }
// };

//   const t = testimonials[index];

//   return (
//     <section id="reviews" className="bg-ivory py-24 md:py-32">
//       <div className="mx-auto max-w-3xl px-6 text-center">
//         <Reveal as="p" className="smallcaps text-xs text-brass-deep">
//           Guest Notes
//         </Reveal>

//         <div className="relative mt-10 min-h-[260px] sm:min-h-[220px]">
//           <AnimatePresence mode="wait">
//             <motion.blockquote
//               key={index}
//               initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
//               transition={{ duration: 0.8, ease: 'easeOut' }}
//             >
//               <p className="font-display text-2xl font-light italic leading-snug text-charcoal sm:text-[1.7rem] text-balance">
//                 “{t.quote}”
//               </p>
//               <footer className="mt-7 text-sm text-charcoal-soft">
//                 <span className="text-charcoal">{t.name}</span>
//                 <span className="mx-2 text-brass-line">·</span>
//                 {t.trip}
//               </footer>
//             </motion.blockquote>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Reveal from '@/components/Reveal';
import { testimonials } from '@/data/site';

export default function GuestNotes() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   if (reduce || testimonials.length <= 1) return;

  //   const id = window.setInterval(() => {
  //     setIndex((currentIndex) => {
  //       // Continue automatic looping
  //       return (currentIndex + 1) % testimonials.length;
  //     });
  //   }, 9000);

  //   return () => window.clearInterval(id);
  // }, [reduce]);

  
  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < testimonials.length - 1) {
      setIndex(index + 1);
    }
  };

  const t = testimonials[index];

  return (
    <section
      id="reviews"
      className="bg-ivory py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal
          as="p"
          className="smallcaps text-xs text-brass-deep"
        >
          Guest Notes
        </Reveal>

        {/* <div className="relative mt-10 flex min-h-[260px] items-center justify-center px-12 sm:min-h-[220px] sm:px-20"> */}
          
          <div className="relative mt-10 flex min-h-[260px] items-center justify-center px-16 md:px-24">

          {/* Previous button */}
         <button
  type="button"
  onClick={handlePrev}
  disabled={index === 0}
  aria-label="Previous guest note"
  className={`
    absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20
    flex h-12 w-12 items-center justify-center
    rounded-full
    border border-brass-line/40
    bg-ivory/95
    shadow-sm
    transition-all duration-300
    ${
      index === 0
        ? "cursor-not-allowed opacity-35"
        : "hover:bg-white hover:shadow-md hover:scale-105"
    }
  `}
>
  <ChevronLeft
    size={22}
    strokeWidth={1.6}
    className="text-charcoal"
  />
</button>

          {/* Testimonial */}
          <div className="w-full max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={
                  reduce
                    ? { opacity: 0 }
                    : { opacity: 0, y: 10 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  reduce
                    ? { opacity: 0 }
                    : { opacity: 0, y: -10 }
                }
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              >
                <p className="text-balance font-display text-2xl font-light italic leading-snug text-charcoal sm:text-[1.7rem]">
                  “{t.quote}”
                </p>

                <footer className="mt-7 text-sm text-charcoal-soft">
                  <span className="text-charcoal">
                    {t.name}
                  </span>

                  <span className="mx-2 text-brass-line">
                    ·
                  </span>

                  {t.trip}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
  type="button"
  onClick={handleNext}
  disabled={index === testimonials.length - 1}
  aria-label="Next guest note"
  className={`
    absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20
    flex h-12 w-12 items-center justify-center
    rounded-full
    border border-brass-line/40
    bg-ivory/95
    shadow-sm
    transition-all duration-300
    ${
      index === testimonials.length - 1
        ? "cursor-not-allowed opacity-35"
        : "hover:bg-white hover:shadow-md hover:scale-105"
    }
  `}
>
  <ChevronRight
    size={22}
    strokeWidth={1.6}
    className="text-charcoal"
  />
</button>

        </div>

        {/* Current testimonial indicator */}
        <p className="mt-5 text-xs tracking-[0.2em] text-charcoal-soft">
          {index + 1} / {testimonials.length}
        </p>
      </div>
    </section>
  );
}