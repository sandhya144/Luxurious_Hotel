import gallery1 from '../assets/WhatsApp Image 1.jpeg';
import gallery2 from '../assets/WhatsApp Image 2.jpeg';
import gallery3 from '../assets/WhatsApp Image 3.jpeg';
import gallery4 from '../assets/WhatsApp Image 4.jpeg';
import gallery5 from '../assets/WhatsApp Image 5.jpeg';
import gallery6 from '../assets/WhatsApp Image 6.jpeg';
import gallery7 from '../assets/WhatsApp Image 7.jpeg';
import gallery8 from '../assets/WhatsApp Image 8.jpeg';
import gallery9 from '../assets/WhatsApp Image 9.jpeg';
import gallery10 from '../assets/WhatsApp Image 10.jpeg';
import gallery11 from '../assets/WhatsApp Image 11.jpeg';
import gallery12 from '../assets/WhatsApp Image 12.jpeg';
import gallery13 from '../assets/WhatsApp Image 13.jpeg';
import gallery14 from '../assets/WhatsApp Image 14.jpeg';
import gallery17 from '../assets/WhatsApp Image 17.jpeg'
import gallery16 from '../assets/WhatsApp Image 16.jpeg'
import gallery18 from '../assets/WhatsApp Image 18.jpeg'
import building2 from '../assets/Buildingg.png'
import food1 from '../assets/food 1.jpeg';
import parking from '../assets/vehicles.jpeg'
// import building3 from '../assets/wh newbuilding.jpeg';
import building3 from '../assets/Homestay.jpeg';
import aarati from '../assets/ghats aarti.jpg';
import gangadwar from '../assets/gangadwar.jpg';



import momento1 from '../assets/momento1.jpeg'
import momento2 from '../assets/momento2.jpeg'
import momento3 from '../assets/momento3.jpeg'
import momento4 from '../assets/momento4.jpeg'
import momento5 from '../assets/momento5.jpeg'
import momento6 from '../assets/momento 6.jpeg'
import momento7 from '../assets/momento7.jpeg'
import momento8 from '../assets/momento8.jpeg'


import temple from '../assets/v corridor.jpg'
import ghat from '../assets/ghat.jpg'
import ganga from '../assets/ganga.jpg'
import sarnath from '../assets/sarnath.jpg'
import corridor from '../assets/gangadwar.jpg'
import street from '../assets/street.jpg'



export type Room = {
  id: string;
  name: string;
  priceFrom: number;
  size: string;
  guests: number;
  blurb: string;
  amenitiesInline: string;
  image: string;
  alt: string;
};

export const rooms: Room[] = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    priceFrom: 2500,
    size: '200 sq ft',
    guests: 2,
    blurb:
      'A calm, light-filled room with a comfortable queen bed and everything you need to settle in after a day at the temple. Quiet by design, with daily housekeeping that keeps things spotless.',
    amenitiesInline: 'AC, free WiFi, hot water, daily housekeeping',
    image: gallery6,
    alt: 'Deluxe room interior with a neatly made bed and warm ambient lighting',
  },
  {
    id: 'super-deluxe',
    name: 'Super Deluxe Room',
    priceFrom: 3200,
    size: '260 sq ft',
    guests: 2,
    blurb:
      'More room to breathe, with a generous bed, a flat-screen TV, and a window that opens onto the city. Room service runs late, so an evening chai or a light dinner is always a call away.',
    amenitiesInline: 'Flat-screen TV, room service, city view',
    image: gallery8,
    alt: 'Super Deluxe room with plush bedding and soft ambient lighting',
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    priceFrom: 4800,
    size: '400 sq ft',
    guests: 4,
    blurb:
      'Two connecting rooms built for families travelling together — parents on one side, children on the other, with a door between for peace of mind. Extra beds are available, and the kitchenette access makes mornings easier.',
    amenitiesInline: 'Two connecting rooms, extra beds available, kitchenette access',
    image: gallery10,
    alt: 'Family suite with two comfortable beds and warm decor',
  },
  {
    id: 'executive',
    name: 'Executive Room',
    priceFrom: 3800,
    size: '280 sq ft',
    guests: 2,
    blurb:
      'A thoughtful room for guests who need to work or stay connected — a proper desk, fast WiFi, and premium toiletries. Quiet, well-lit, and set up so you can take a call and then walk to the temple in minutes.',
    amenitiesInline: 'Work desk, fast WiFi, premium toiletries',
    image: gallery5,
    alt: 'Executive room with a wooden desk, warm lamp and comfortable bed',
  },
  // {
  //   id: 'temple-view',
  //   name: 'Temple View Room',
  //   priceFrom: 4200,
  //   size: '240 sq ft',
  //   guests: 2,
  //   blurb:
  //     'Our most-requested room — a partial view toward the temple side, with morning light that makes the whole stay feel special. Breakfast is included, served fresh, so you can head out to the ghats already looked after.',
  //   amenitiesInline: 'Partial temple-side view, breakfast included',
  //   image:
  //     'https://images.pexels.com/photos/3755590/pexels-photo-3755590.jpeg?auto=compress&cs=tinysrgb&w=1400',
  //   alt: 'Temple View room with elegant white linen and soft pillows',
  // },
];


export const heroPoster =
  'https://images.pexels.com/photos/8112552/pexels-photo-8112552.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const glimpses = [
  {
    image: building3,
    alt: "Exterior",
  },
   {
    image: gallery5,
    alt: "Room",
  },
  {
    image: gallery16,
    alt: "Restaurant",
  },
  {
    image: gallery6,
    alt: "Lobby",
  },
  
];

export const galleryImages = [
  {
    image: building3,
    alt: "Exterior",
  },
  {
    image: gallery5,
    alt: "Exterior",
  },
  {
    image: gallery6,
    alt: "Exterior",
  },
  {
    image: gallery8,
    alt: "Exterior",
  },
  {
    image: gallery14,
    alt: "Reception",
  },
  {
    image: gallery16,
    alt: "Exterior",
  },
  {
    image: gallery10,
    alt: "Exterior",
  },
  {
    image: gallery17,
    alt: "Washroom",
  },
  {
    image: gallery11,
    alt: "Exterior",
  },
  {
    image: food1,
    alt: "Exterior",
  },
  {
    image: parking,
    alt: "Exterior",
  },
  
];

export const momento = [
  
  {
    image: momento7,
    alt: "Exterior",
  },
  {
    image: momento5,
    alt: "Exterior",
  },
  {
    image: momento1,
    alt: "Exterior",
  },
  {
    image: momento2,
    alt: "Exterior",
  },
  {
    image: momento3,
    alt: "Exterior",
  },
   {
    image: momento6,
    alt: "Exterior",
  },
  {
    image: momento4,
    alt: "Exterior",
  },
  {
    image:momento8,
    alt: "Exterior",
  },
];

export const nearby = [
  {
    name: 'Kashi Vishwanath Temple',
    distance: '~400m',
    note: 'One of the holiest Shiva temples in India.',
    image: temple,
    alt: 'Carved stone facade of a Hindu temple',
  },
  {
    name: 'Dashashwamedh Ghat',
    distance: '~900m',
    note: "The city's most iconic ghat.",
    image: ghat,
    alt: 'Historic Varanasi ghat with boats on the Ganges',
  },
  {
    name: 'Ganga Aarti',
    distance: '~1 km',
    note: 'The evening fire ceremony on the riverbank.',
    image: ganga,
    alt: 'Ganga Aarti ceremony with fire lamps along the Ganges',
  },
  {
    name: 'Vishwanath Corridor',
    distance: '~600m',
    note: 'The temple-to-ghat pilgrim walkway.',
    image: corridor,
    alt: 'Ancient temple architecture at sunset',
  },
  {
    name: 'Sarnath',
    distance: '~10 km',
    note: 'Where Buddha gave his first sermon.',
    image: sarnath,
    alt: 'Ancient sandstone temple complex',
  },
  {
    name: 'Banaras ancient streets',
    distance: '~1.2 km',
    note: "The taste of Varanasi, chilled in tradition",
    image: street,
    alt: 'A vibrant Varanasi market street with vendors and shoppers',
  },
];

export const testimonials = [
  {
    quote:
      'The owner treated us like family. We arrived tired from the train and within minutes there was hot chai, a clean room, and a real plan for our temple visit the next morning.',
    name: 'Aarthi & Venkat',
    trip: 'Couples trip · Bengaluru',
  },
  {
    quote:
      'The staff went far beyond what you would expect. They arranged our airport pickup, helped with the aarti boat, and remembered every small thing we asked for. Spotless rooms too.',
    name: 'Rohit Mehta',
    trip: 'Solo pilgrimage · Delhi',
  },
  {
    quote:
      'We travelled with two young children and the family suite was perfect — two connecting rooms, extra beds ready, and the kids were made to feel completely welcome.',
    name: 'The Khan family',
    trip: 'Family stay · Lucknow',
  },
  {
    quote:
      'The location is the thing. Eight minutes walking and you are at Kashi Vishwanath, and the ghats are just a little further. Coming back to a quiet, clean room each evening made all the difference.',
    name: 'Priya Nair',
    trip: 'Temple visit · Kochi',
  },
];

export const faqs = [
  {
    q: 'How far is the hotel from Kashi Vishwanath Temple?',
    a: 'About 400 metres — an easy eight to ten minute walk through the old city lanes. We are happy to walk first-time guests over so you know the way.',
  },
  {
    q: 'Is parking available?',
    a: 'Yes, we have on-site parking for guests. Let us know your vehicle details when you book so we can keep a space ready.',
  },
  {
    q: 'What are check-in and check-out times?',
    a: 'Check-in is from 12:00 noon and check-out is by 11:00 am. Early check-in and late check-out can usually be arranged on request, subject to availability.',
  },
  {
    q: 'Can you accommodate families with children or extra beds?',
    a: 'Absolutely. Our Family Suite has two connecting rooms, and we can add extra beds to most rooms. Mention the ages and number of children when you enquire and we will suggest the best fit.',
  },
  {
    q: 'Do you help arrange airport pickup?',
    a: 'Yes. We arrange airport and railway-station pickups on request — share your arrival details and we will have a trusted driver waiting for you.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Cancellations made at least 48 hours before check-in are free of charge. Within 48 hours a charge may apply for the first night. Group and peak-season bookings may have separate terms, which we share upfront.',
  },
];

export const navLinks = [
  { label: 'Home', to: '/', section: 'top' },
  { label: 'Rooms', to: '/rooms', section: 'rooms' },
  { label: 'Gallery', to: '/gallery', section: 'gallery' },
  { label: 'Amenties', to: '/#facilities', section: 'facilities' },
  { label: 'Reviews', to: '/#reviews', section: 'reviews' },
  { label: 'Contact', to: '/#contact', section: 'contact' },
];

export const hotel = {
  name: 'The White House Hotel',
  tagline: 'Varanasi',
  address: 'D 39/20-21, Kodai Chowki, Nai Sarak, Varanasi, Uttar Pradesh 221001',
  phone: '+91 7398722222',
  phoneHref: 'tel:+917398722222',
  whatsappHref: 'https://wa.me/917398722222',
  email: 'thewhitehouse1511@gmail.com',
  rating: '4.8',
  reviewsCount: '675+',
  guestsHosted: '5,000+',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.7817280661775!2d83.00288567484115!3d25.31153652706101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2f7b42a60cf1%3A0x4fc2c0fa999de345!2sThe%20White%20House%20-%20Hotel%20near%20Kashi%20Vishwanath%20temple!5e0!3m2!1sen!2sin!4v1785937950409!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',
};
