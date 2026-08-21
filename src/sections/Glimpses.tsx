import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import { glimpses } from '@/data/site';
import BounceCards from '@/components/BounceCard';

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
];

export default function Glimpses() {
  const images = glimpses.slice(0, 5).map((g) => g.image);
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal as="p" className=" text-center font-medium smallcaps text-xs text-brass-deep">
          A Few Glimpses
        </Reveal>

          <div className="mt-12 flex justify-center">
            <BounceCards
              className="custom-bounceCards"
              images={images}
              containerWidth={500}
              containerHeight={250}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover
            />
            </div>
             

        {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {glimpses.map((g, i) => (
             <Reveal key={i} delay={i * 0.08} className="overflow-hidden">
              <div className="aspect-[9/16] overflow-hidden  rounded-sm border border-brass-line/90 hover:border-brass-line/70 transition-colors duration-300">
                <img
                  src={g.image}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                />
              </div>
             </Reveal>
          ))}
        </div> */}


        <Reveal delay={0.2} className="mt-9 text-center">
          <Link
            to="/gallery"
            // className="text-xs font-medium uppercase tracking-wider2 text-brass-deep transition-colors hover:text-charcoal"
            className="inline-block border bg-brass px-8 py-3 text-xs uppercase tracking-wider2 text-white font-medium transition-all duration-300 hover:bg-brass hover:border-brass hover:text-ivory"
          >
            View Full Gallery →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

