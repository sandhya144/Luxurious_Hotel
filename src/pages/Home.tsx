import { useLocation } from 'react-router-dom';
import Seo, { HotelJsonLd } from '@/components/Seo';
import Hero from '@/components/Hero';
import Glimpses from '@/sections/Glimpses';
import TrustLine from '@/sections/TrustLine';
import WelcomePillars from '@/sections/WelcomePillars';
import MeetHost from '@/sections/MeetHost';
import RoomsTeaser from '@/sections/RoomsTeaser';
import Facilities from '@/sections/Facilities';
import Nearby from '@/sections/Nearby';
import GuestNotes from '@/sections/GuestNotes';
import ByNumbers from '@/sections/ByNumbers';
import Faq from '@/sections/Faq';
import Contact from '@/sections/Contact';
import { useHashScroll } from '@/hooks/useHashScroll';

export default function Home() {
  const location = useLocation();
  useHashScroll(location.key + location.hash);

  return (
    <>
      <Seo
        title="The White House Hotel · Varanasi — A Warm Stay, Steps from Kashi"
        description="A family-run hotel 800 metres from Kashi Vishwanath Temple in Varanasi — where every guest is looked after like one of our own."
        path="/"
      />
      <HotelJsonLd />
      <Hero />
      <Glimpses />
      <TrustLine />
      <WelcomePillars />
      {/* <MeetHost /> */}
      <RoomsTeaser />
      <Facilities />
      <Nearby />
      <GuestNotes />
      {/* <ByNumbers /> */}
      <Faq />
      <Contact />
    </>
  );
}
