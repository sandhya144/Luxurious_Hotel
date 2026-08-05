
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

          {/* Image + controls, stacked in a column so nothing sits on top of the photo */}
          <div
            className="flex max-h-[92vh] w-full max-w-4xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <motion.img
              key={index}
              src={images[index].image}
              alt={images[index].alt}
              className="max-h-[75vh] w-full object-contain sm:max-h-[78vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />

            {/* Control row, below the image */}
            <div className="mt-6 flex items-center gap-6">
              <button
                type="button"
                onClick={handlePrev}
                disabled={index === 0}
                aria-label="Previous image"
                className={`
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-ivory/25 bg-ivory/10
                  shadow-sm backdrop-blur-sm
                  transition-all duration-300
                  ${
                    index === 0
                      ? 'cursor-not-allowed opacity-30'
                      : 'hover:bg-ivory/20 hover:scale-105'
                  }
                `}
              >
                <ChevronLeft size={20} strokeWidth={1.6} className="text-ivory" />
              </button>

              <span className="text-xs tracking-[0.2em] text-ivory/70">
                {index + 1} / {images.length}
              </span>

              <button
                type="button"
                onClick={handleNext}
                disabled={index === images.length - 1}
                aria-label="Next image"
                className={`
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-ivory/25 bg-ivory/10
                  shadow-sm backdrop-blur-sm
                  transition-all duration-300
                  ${
                    index === images.length - 1
                      ? 'cursor-not-allowed opacity-30'
                      : 'hover:bg-ivory/20 hover:scale-105'
                  }
                `}
              >
                <ChevronRight size={20} strokeWidth={1.6} className="text-ivory" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
