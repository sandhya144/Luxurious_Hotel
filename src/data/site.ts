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
    image:
      'https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=1400',
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
    image:
      'https://images.pexels.com/photos/8135248/pexels-photo-8135248.jpeg?auto=compress&cs=tinysrgb&w=1400',
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
    image:
      'https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg?auto=compress&cs=tinysrgb&w=1400',
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
    image:
      'https://images.pexels.com/photos/6585619/pexels-photo-6585619.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Executive room with a wooden desk, warm lamp and comfortable bed',
  },
  {
    id: 'temple-view',
    name: 'Temple View Room',
    priceFrom: 4200,
    size: '240 sq ft',
    guests: 2,
    blurb:
      'Our most-requested room — a partial view toward the temple side, with morning light that makes the whole stay feel special. Breakfast is included, served fresh, so you can head out to the ghats already looked after.',
    amenitiesInline: 'Partial temple-side view, breakfast included',
    image:
      'https://images.pexels.com/photos/3755590/pexels-photo-3755590.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Temple View room with elegant white linen and soft pillows',
  },
];

export const heroSlides = [
  {
    image:
      'https://images.pexels.com/photos/8011069/pexels-photo-8011069.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Hotel exterior facade in warm afternoon light',
  },
  {
    image:
      'https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Deluxe room interior with a comfortable bed and ambient lighting',
  },
  {
    image:
      'https://images.pexels.com/photos/14036251/pexels-photo-14036251.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Hotel reception desk with warm, welcoming lighting',
  },
  {
    image:
      'https://images.pexels.com/photos/9089767/pexels-photo-9089767.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'A plated breakfast of fresh fruit, eggs and warm bread',
  },
  {
    image:
      'https://images.pexels.com/photos/33803745/pexels-photo-33803745.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Heritage hotel corridor with elegant arched architecture',
  },
];

export const heroPoster =
  'https://images.pexels.com/photos/8112552/pexels-photo-8112552.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const glimpses = [
  {
    image:
      'https://images.pexels.com/photos/2736384/pexels-photo-2736384.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'A hotel room detail with soft white linen and a bedside lamp',
  },
  {
    image:
      'https://images.pexels.com/photos/5865690/pexels-photo-5865690.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'A fresh breakfast spread on a wooden table',
  },
  {
    image:
      'https://images.pexels.com/photos/38023850/pexels-photo-38023850.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Boats on the Ganges with the Varanasi ghats behind them',
  },
  {
    image:
      'https://images.pexels.com/photos/7821349/pexels-photo-7821349.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Hotel reception area with warm lighting and decor',
  },
];

export const galleryImages = [
  {
    image:
      'https://images.pexels.com/photos/8011069/pexels-photo-8011069.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Hotel exterior facade in the afternoon',
  },
  {
    image:
      'https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Deluxe room with a comfortable bed',
  },
  {
    image:
      'https://images.pexels.com/photos/14036251/pexels-photo-14036251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Hotel reception desk',
  },
  {
    image:
      'https://images.pexels.com/photos/9089767/pexels-photo-9089767.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Plated breakfast with fresh fruit and eggs',
  },
  {
    image:
      'https://images.pexels.com/photos/8112552/pexels-photo-8112552.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Varanasi waterfront along the Ganges at twilight',
  },
  {
    image:
      'https://images.pexels.com/photos/36613136/pexels-photo-36613136.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Ganga Aarti ritual with fire lamps at the Varanasi ghats',
  },
  {
    image:
      'https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Family suite with two comfortable beds',
  },
  {
    image:
      'https://images.pexels.com/photos/7166637/pexels-photo-7166637.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Elegant bathroom with marble walls and modern fixtures',
  },
  {
    image:
      'https://images.pexels.com/photos/33803745/pexels-photo-33803745.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Heritage hotel corridor with arched architecture',
  },
  {
    image:
      'https://images.pexels.com/photos/31149148/pexels-photo-31149148.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'A narrow Varanasi alley with colourful street art',
  },
  {
    image:
      'https://images.pexels.com/photos/6585619/pexels-photo-6585619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Executive room with a wooden desk and warm lamp',
  },
  {
    image:
      'https://images.pexels.com/photos/3755590/pexels-photo-3755590.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Temple View room with elegant white linen',
  },
];

export const nearby = [
  {
    name: 'Kashi Vishwanath Temple',
    distance: '800m',
    note: 'One of the holiest Shiva temples in India.',
    image:
      'https://images.pexels.com/photos/5103732/pexels-photo-5103732.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Carved stone facade of a Hindu temple',
  },
  {
    name: 'Dashashwamedh Ghat',
    distance: '~1 km',
    note: "The city's most iconic ghat.",
    image:
      'https://images.pexels.com/photos/17869844/pexels-photo-17869844.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Historic Varanasi ghat with boats on the Ganges',
  },
  {
    name: 'Ganga Aarti',
    distance: '~1 km',
    note: 'The evening fire ceremony on the riverbank.',
    image:
      'https://images.pexels.com/photos/35345039/pexels-photo-35345039.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ganga Aarti ceremony with fire lamps along the Ganges',
  },
  {
    name: 'Vishwanath Corridor',
    distance: '~900m',
    note: 'The temple-to-ghat pilgrim walkway.',
    image:
      'https://images.pexels.com/photos/37626184/pexels-photo-37626184.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ancient temple architecture at sunset',
  },
  {
    name: 'Sarnath',
    distance: '~10 km',
    note: 'Where Buddha gave his first sermon.',
    image:
      'https://images.pexels.com/photos/31969428/pexels-photo-31969428.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ancient sandstone temple complex',
  },
  {
    name: 'Banaras shopping streets',
    distance: '~1.2 km',
    note: "Silk, handicrafts, and the old city's lanes.",
    image:
      'https://images.pexels.com/photos/34968073/pexels-photo-34968073.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    a: 'About 800 metres — an easy eight to ten minute walk through the old city lanes. We are happy to walk first-time guests over so you know the way.',
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
  { label: 'Reviews', to: '/#reviews', section: 'reviews' },
  { label: 'FAQ', to: '/#faq', section: 'faq' },
  { label: 'Contact', to: '/#contact', section: 'contact' },
];

export const hotel = {
  name: 'The White House Hotel',
  tagline: 'Varanasi',
  address: 'D 39/20-21, Kodai Chowki, Nai Sarak, Varanasi, Uttar Pradesh 221001',
  phone: '+91 90000 00000',
  phoneHref: 'tel:+919000000000',
  whatsappHref: 'https://wa.me/919000000000',
  email: 'stay@thewhitehousevaranasi.in',
  rating: '4.9',
  reviewsCount: '673',
  guestsHosted: '5,000+',
  yearsHosting: '15+',
  mapEmbed:
    'https://www.google.com/maps?q=D+39%2F20-21%2C+Kodai+Chowki%2C+Nai+Sarak%2C+Varanasi%2C+Uttar+Pradesh+221001&output=embed',
};
