import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageItem {
  image: string;
  alt: string;
}

interface LightboxProps {
  images: ImageItem[];
  index: number | null;
  onClose: () => void;
  onNav: (index: number) => void;
}


export default function Lightbox({ images, index, onClose, onNav }: LightboxProps) {
  const open = index !== null;
   if (index === null) return null;
  const current = images[index];

const handlePrev = () => {
  if (index > 0) {
    onNav(index - 1);
  }
};
const handleNext = () => {
  if (index < images.length - 1) {
    onNav(index + 1);
  }
};


  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === "ArrowRight" && index < images.length - 1) {
  onNav(index + 1);
}

if (e.key === "ArrowLeft" && index > 0) {
  onNav(index - 1);
}
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, index, images.length, onClose, onNav]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/90 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={onClose}
        >
          <button
            type="button"
            className="absolute right-5 top-5 text-ivory/80 transition-colors hover:text-ivory"
            onClick={(e) => {
  e.stopPropagation();
  onClose();
}}
            aria-label="Close"
          >
            <X size={26} strokeWidth={1.4} />
          </button>

          <button
  onClick={(e) => {
    e.stopPropagation();
    handlePrev();
  }}
  disabled={index === 0}
  className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white"
>
  <ChevronLeft size={30} />
</button>

          <motion.img
            key={index}
            src={current.image}
            alt={current.alt}
            className="max-h-[88vh] max-w-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          />

           <button
            onClick={(e) => {
    e.stopPropagation();
    handleNext();
  }}
  disabled={index === images.length - 1}
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white"
          >
            <ChevronRight size={30} />
          </button>

        </motion.div>
      )}

    </AnimatePresence>
  );
}
