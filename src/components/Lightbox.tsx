
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

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

export default function Lightbox({
  images,
  index,
  onClose,
  onNav,
}: LightboxProps) {
  const open = index !== null;

  useEffect(() => {
    if (!open || index === null) {
      document.body.style.overflow = '';
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (
        event.key === 'ArrowRight' &&
        index < images.length - 1
      ) {
        onNav(index + 1);
      }

      if (event.key === 'ArrowLeft' && index > 0) {
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

  const handlePrev = () => {
    if (index !== null && index > 0) {
      onNav(index - 1);
    }
  };

  const handleNext = () => {
    if (index !== null && index < images.length - 1) {
      onNav(index + 1);
    }
  };

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/90 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-20 text-ivory/80 transition-colors hover:text-ivory"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            aria-label="Close image preview"
          >
            <X size={26} strokeWidth={1.4} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handlePrev();
            }}
            disabled={index === 0}
            aria-label="Previous image"
            className={`absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 transition sm:left-5 ${
              index === 0
                ? 'cursor-not-allowed bg-black/20 text-white/30'
                : 'bg-black/50 text-white hover:bg-black/70'
            }`}
          >
            <ChevronLeft size={30} />
          </button>

          <motion.img
            key={index}
            src={images[index].image}
            alt={images[index].alt}
            className="max-h-[88vh] max-w-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleNext();
            }}
            disabled={index === images.length - 1}
            aria-label="Next image"
            className={`absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 transition sm:right-5 ${
              index === images.length - 1
                ? 'cursor-not-allowed bg-black/20 text-white/30'
                : 'bg-black/50 text-white hover:bg-black/70'
            }`}
          >
            <ChevronRight size={30} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
