import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import Seo from '@/components/Seo';
import Lightbox from '@/components/Lightbox';
import { galleryImages } from '@/data/site';
import { momento } from '@/data/site';
import { useHashScroll } from '@/hooks/useHashScroll';
import { ChevronLeft, ChevronRight, X } from "lucide-react";



export default function Gallery() {
  const location = useLocation();
  useHashScroll(location.key);
  
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [momentoIndex, setMomentoIndex] = useState<number | null>(null);
  

  return (
    <main className="bg-ivory pt-28 md:pt-32">
      <Seo
        title="Gallery · The White House Hotel, Varanasi"
        description="Photographs of our rooms, breakfast, the reception, and the ghats and lanes of Varanasi around the hotel."
        path="/gallery"
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Gallery" title="A Look Around">
            Our rooms, our food, our corner of Varanasi — a sense of what your stay will feel like.
          </SectionHeading>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {galleryImages.map((g, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setGalleryIndex(i)}
                  
                  className="group block w-full overflow-hidden"
                  aria-label={`Open image: ${g.alt}`}
                >
                  <img
                    src={g.image}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={galleryImages}
        index={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onNav={setGalleryIndex}
      />

        <section id="momento" className="border-t border-brass-line/40 bg-ivory scroll-mt-24 py-24 md:py-32">
  <div className="mx-auto max-w-3xl px-6 text-center">
    <SectionHeading align="center" eyebrow="Momento" title="A Small Token of Home">
      Every guest takes home a small memento — our heartfelt thankyou for being part of our family.
    </SectionHeading>
      </div>
       </section>
      

    <section className=" pb-28 md:pb-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {momento.map((g, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setMomentoIndex(i)}
                  className="group block w-full overflow-hidden"
                  aria-label={`Open image: ${g.alt}`}
                >
                  <img
                    src={g.image}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

       
      <Lightbox
        images={momento}
        index={momentoIndex}
        onClose={() => setMomentoIndex(null)}
        onNav={setMomentoIndex}
      />

    </main>
  );
}
