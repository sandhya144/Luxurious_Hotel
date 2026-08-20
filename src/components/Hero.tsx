import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';
import herovideo from "../assets/New Video.mp4"
import { Volume2, VolumeX } from "lucide-react";



export default function Hero() {
const reduce = useReducedMotion();

const videoRef = useRef<HTMLVideoElement>(null);
const [isMuted, setIsMuted] = useState(false);


  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay-with-sound was blocked by the browser.
        // Fall back to muted autoplay, but reflect that in state
        // so the button shows the correct (muted) icon.
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {
        });
      });
    }
  }, []);

  const toggleAudio = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };


  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <video
  ref={videoRef}
  autoPlay
  muted={isMuted}
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src={herovideo} type="video/mp4" />
  Your browser 
</video>


<button
  onClick={toggleAudio}
  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
  className="absolute bottom-7 right-7 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md text-white hover:bg-black/30 transition"
>
  {isMuted ? (
    <VolumeX className="h-5 w-5" />
  ) : (
    <Volume2 className="h-5 w-5" />
  )}
</button>

      {/* Legibility scrim */}
      <div className="absolute inset-0 z-[2] bg-charcoal/40" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-charcoal/10 via-transparent to-charcoal/50" />

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
          className="mt-4 max-w-2xl text-base font-light leading-relaxed text-ivory/90 sm:text-lg"
        >
          Located a 5-minute walk from Kashi Vishwanath Temple, our property in Varanasi blends heartfelt hospitality with the comfort of home — so close to devotion, yet so far from the noise.
          </motion.p>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
          className="mt-10"
        >
          <Link
            to="/#contact"
            className="inline-block  rounded-l-sm border border-brass-line/80 px-9 py-3.5 text-xs uppercase tracking-wider2 text-ivory transition-all duration-300 hover:bg-brass hover:border-brass"
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
