import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

type LightboxProps = {
  images: { image: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onNav: (i: number) => void;
};

export default function Lightbox({ images, index, onClose, onNav }: LightboxProps) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav(((index as number) + 1) % images.length);
      if (e.key === 'ArrowLeft') onNav(((index as number) - 1 + images.length) % images.length);
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
            onClick={onClose}
            aria-label="Close"
          >
            <X size={26} strokeWidth={1.4} />
          </button>

          <motion.img
            key={index}
            src={images[index as number].image}
            alt={images[index as number].alt}
            className="max-h-[88vh] max-w-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
