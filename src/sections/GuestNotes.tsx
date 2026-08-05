// // import { useEffect, useState } from 'react';
// // import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
// // import Reveal from '@/components/Reveal';
// // import { testimonials } from '@/data/site';
// // import { ChevronLeft, ChevronRight } from 'lucide-react';

// // export default function GuestNotes() {
// //   const reduce = useReducedMotion();
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     if (reduce) return;
// //     const id = setInterval(() => {
// //       setIndex((i) => (i + 1) % testimonials.length);
// //     }, 9000);
// //     return () => clearInterval(id);
// //   }, [reduce]);


// // const handlePrev = () => {
// //   if (index > 0) {
// //     setIndex(index - 1);
// //   }
// // };

// // const handleNext = () => {
// //   if (index < testimonials.length - 1) {
// //     setIndex(index + 1);
// //   }
// // };

// //   const t = testimonials[index];

// //   return (
// //     <section id="reviews" className="bg-ivory py-24 md:py-32">
// //       <div className="mx-auto max-w-3xl px-6 text-center">
// //         <Reveal as="p" className="smallcaps text-xs text-brass-deep">
// //           Guest Notes
// //         </Reveal>

// //         <div className="relative mt-10 min-h-[260px] sm:min-h-[220px]">
// //           <AnimatePresence mode="wait">
// //             <motion.blockquote
// //               key={index}
// //               initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
// //               transition={{ duration: 0.8, ease: 'easeOut' }}
// //             >
// //               <p className="font-display text-2xl font-light italic leading-snug text-charcoal sm:text-[1.7rem] text-balance">
// //                 “{t.quote}”
// //               </p>
// //               <footer className="mt-7 text-sm text-charcoal-soft">
// //                 <span className="text-charcoal">{t.name}</span>
// //                 <span className="mx-2 text-brass-line">·</span>
// //                 {t.trip}
// //               </footer>
// //             </motion.blockquote>
// //           </AnimatePresence>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import { useEffect, useState } from 'react';
// import {
//   AnimatePresence,
//   motion,
//   useReducedMotion,
// } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// import Reveal from '@/components/Reveal';
// import { testimonials } from '@/data/site';


// function GoogleIcon({ className = 'h-4 w-4' }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
//       <path
//         fill="#4285F4"
//         d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v2.98h3.86c2.26-2.08 3.56-5.14 3.56-8.8z"
//       />
//       <path
//         fill="#34A853"
//         d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.98c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
//       />
//       <path
//         fill="#FBBC05"
//         d="M5.27 14.3c-.25-.72-.38-1.49-.38-2.3s.14-1.58.38-2.3V6.61H1.29A11.96 11.96 0 000 12c0 1.93.46 3.76 1.29 5.39l3.98-3.09z"
//       />
//       <path
//         fill="#EA4335"
//         d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
//       />
//     </svg>
//   );
// }

// export default function GuestNotes() {
//   const reduce = useReducedMotion();
//   const [index, setIndex] = useState(0);

//   // useEffect(() => {
//   //   if (reduce || testimonials.length <= 1) return;

//   //   const id = window.setInterval(() => {
//   //     setIndex((currentIndex) => {
//   //       // Continue automatic looping
//   //       return (currentIndex + 1) % testimonials.length;
//   //     });
//   //   }, 9000);

//   //   return () => window.clearInterval(id);
//   // }, [reduce]);

  
//   const handlePrev = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//     }
//   };

//   const handleNext = () => {
//     if (index < testimonials.length - 1) {
//       setIndex(index + 1);
//     }
//   };

//   const t = testimonials[index];

//   return (
//     <section
//       id="reviews"
//       className="bg-ivory py-24 md:py-32"
//     >
//       <div className="mx-auto max-w-5xl px-6 text-center">
//         <Reveal
//           as="p"
//           className="smallcaps text-xs text-brass-deep"
//         >
//           Guest Notes
//         </Reveal>

//         {/* <div className="relative mt-10 flex min-h-[260px] items-center justify-center px-12 sm:min-h-[220px] sm:px-20"> */}
          
//           <div className="relative mt-10 flex min-h-[260px] items-center justify-center px-16 md:px-24">

//           {/* Previous button */}
//          <button
//   type="button"
//   onClick={handlePrev}
//   disabled={index === 0}
//   aria-label="Previous guest note"
//   className={`
//     absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20
//     flex h-12 w-12 items-center justify-center
//     rounded-full
//     border border-brass-line/40
//     bg-ivory/95
//     shadow-sm
//     transition-all duration-300
//     ${
//       index === 0
//         ? "cursor-not-allowed opacity-35"
//         : "hover:bg-white hover:shadow-md hover:scale-105"
//     }
//   `}
// >
//   <ChevronLeft
//     size={22}
//     strokeWidth={1.6}
//     className="text-charcoal"
//   />
// </button>

//           {/* Testimonial */}
//           <div className="w-full max-w-3xl">
//             <AnimatePresence mode="wait">
//               <motion.blockquote
//                 key={index}
//                 initial={
//                   reduce
//                     ? { opacity: 0 }
//                     : { opacity: 0, y: 10 }
//                 }
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={
//                   reduce
//                     ? { opacity: 0 }
//                     : { opacity: 0, y: -10 }
//                 }
//                 transition={{
//                   duration: 0.8,
//                   ease: 'easeOut',
//                 }}
//               >
//                 <p className="text-balance font-display text-2xl font-light italic leading-snug text-charcoal sm:text-[1.7rem]">
//                   “{t.quote}”
//                 </p>

//                 <footer className="mt-7 text-sm text-charcoal-soft">
//                   <span className="text-charcoal">
//                     {t.name}
//                   </span>

//                   <span className="mx-2 text-brass-line">
//                     ·
//                   </span>

//                   {t.trip}
//                 </footer>
//               </motion.blockquote>
//             </AnimatePresence>
//           </div>

//           {/* Next button */}
//           <button
//   type="button"
//   onClick={handleNext}
//   disabled={index === testimonials.length - 1}
//   aria-label="Next guest note"
//   className={`
//     absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20
//     flex h-12 w-12 items-center justify-center
//     rounded-full
//     border border-brass-line/40
//     bg-ivory/95
//     shadow-sm
//     transition-all duration-300
//     ${
//       index === testimonials.length - 1
//         ? "cursor-not-allowed opacity-35"
//         : "hover:bg-white hover:shadow-md hover:scale-105"
//     }
//   `}
// >
//   <ChevronRight
//     size={22}
//     strokeWidth={1.6}
//     className="text-charcoal"
//   />
// </button>

//         </div>
//         {/* Current testimonial indicator */}
//         <p className="mt-5 text-xs tracking-[0.2em] text-charcoal-soft">
//           {index + 1} / {testimonials.length}
//         </p>
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

function GoogleIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v2.98h3.86c2.26-2.08 3.56-5.14 3.56-8.8z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.98c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.3c-.25-.72-.38-1.49-.38-2.3s.14-1.58.38-2.3V6.61H1.29A11.96 11.96 0 000 12c0 1.93.46 3.76 1.29 5.39l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

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
    <section id="reviews" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal as="p" className="smallcaps text-xs text-brass-deep">
          Guest Notes
        </Reveal>

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
                  ? 'cursor-not-allowed opacity-35'
                  : 'hover:bg-white hover:shadow-md hover:scale-105'
              }
            `}
          >
            <ChevronLeft size={22} strokeWidth={1.6} className="text-charcoal" />
          </button>

          {/* Testimonial */}
          <div className="w-full max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <p className="text-balance font-display text-2xl font-light italic leading-snug text-charcoal sm:text-[1.7rem]">
                  “{t.quote}”
                </p>

                <footer className="mt-7 flex flex-wrap items-center justify-center gap-1 text-sm text-charcoal-soft">
                  <span className="text-charcoal">{t.name}</span>
                  <span className="mx-2 text-brass-line">·</span>
                  {t.trip}

                  {t.reviewLink && (
                      <a
                      href={t.reviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 inline-flex items-center gap-1.5 text-xs text-charcoal-soft transition-colors hover:text-charcoal"
                    >
                      <GoogleIcon className="h-3.5 w-3.5" />
                      Read on Google
                    </a>
                  )}
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
                  ? 'cursor-not-allowed opacity-35'
                  : 'hover:bg-white hover:shadow-md hover:scale-105'
              }
            `}
          >
            <ChevronRight size={22} strokeWidth={1.6} className="text-charcoal" />
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