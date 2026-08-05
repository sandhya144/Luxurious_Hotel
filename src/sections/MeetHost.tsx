import Reveal from '@/components/Reveal';
import { hotel } from '@/data/site';
import hostImg from "../assets/host 5.jpeg"

  
export default function MeetHost() {
  return (
    <section className="bg-stone/50 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-[360px_1fr] md:gap-16">

        {/* <Reveal className="overflow-hidden">
          <div className="aspect-[4/5] overflow-hidden rounded-sm border border-brass-line/90">
            .....
          </div>
        </Reveal> */}

        <Reveal className="flex justify-center">
  <div className="w-full max-w-[350px] aspect-[4/3] md:max-w-none md:aspect-[4/5] overflow-hidden rounded-sm border border-brass-line/90">
    <img
      src={hostImg}
      alt="The owner of The White House Hotel, Varanasi"
      loading="lazy"
      className="h-full w-full object-cover rounded-sm transition-transform duration-[1200ms] ease-out "
    />
  </div>
</Reveal>

       

        <div className="space-y-6">
             <Reveal as="p" className="smallcaps text-center text-sm font-normal text-brass-deep">
            Meet Your Host
        </Reveal>
          <Reveal as="p" delay={0.1} className="text-lg font-light leading-relaxed text-charcoal-soft">
           Namaste, and welcome. For years, I've welcomed travellers to Kashi myself, because to me this has always been about sharing my city, not just running a business. Tell me what brought you here — I'll help you see Kashi as it should be seen.
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-display text-3xl italic text-charcoal">— With warmth, the owner</p>
            <p className="mt-3 text-sm text-charcoal-soft">Shamsher Sheikh</p>
          </Reveal>
         </div>
        </div> 

      


   
        
    </section>
  );
}
