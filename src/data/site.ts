import gallery1 from '../assets/WhatsApp Image 21.jpeg';
import gallery2 from '../assets/WhatsApp Image 22.jpeg';
import gallery3 from '../assets/WhatsApp Image 23.jpeg';
import gallery4 from '../assets/WhatsApp Image 24.jpeg';
import gallery5 from '../assets/WhatsApp Image 25.jpeg';
import gallery6 from '../assets/WhatsApp Image 33.jpeg';
import gallery7 from '../assets/WhatsApp Image 34.jpeg';
import gallery8 from '../assets/WhatsApp Image 26.jpeg';
import gallery9 from '../assets/WhatsApp Image 27.jpeg';
import gallery10 from '../assets/WhatsApp Image 28.jpeg';
import gallery11 from '../assets/WhatsApp Image 29.jpeg';
import gallery12 from '../assets/WhatsApp Image 30.jpeg';
import gallery13 from '../assets/WhatsApp Image 31.jpeg';
import gallery14 from '../assets/WhatsApp Image 14.jpeg';
import gallery17 from '../assets/WhatsApp Image 17.jpeg';
import gallery18 from '../assets/WhatsApp Image 18.jpeg';
import gallery19 from '../assets/WhatsApp Image 31.jpeg';
import gallery20 from '../assets/WhatsApp Image 32.jpeg';
import gallery21 from '../assets/WhatsApp Image 33.jpeg';
import gallery22 from '../assets/WhatsApp Image 34.jpeg';
import gallery23 from '../assets/WhatsApp Image 35.jpeg';



import food1 from '../assets/food 1.jpeg';
import parking from '../assets/vehicles.jpeg'
import building3 from '../assets/finalBuilding.jpeg';



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
    id: 'double-occupancy',
    name: 'Double Occupancy AC Room',
    priceFrom: 2500,
    size: '180 sq ft',
    guests: 2,
    blurb:
      'A comfortable, air-conditioned room built for two, with everything settled and ready after a day of darshan. Includes complimentary breakfast, and our staff is on hand to help plan your temple visits and sightseeing at no extra charge.',
    amenitiesInline: 'AC, Complimentary breakfast, Darshan assistance',
    image: gallery21,
    alt: 'Double occupancy AC room with a neatly made bed and warm ambient lighting',
  },
  {
    id: 'triple-occupancy',
    name: 'Triple Occupancy AC Room',
    priceFrom: 3000,
    size: '220 sq ft',
    guests: 3,
    blurb:
      'A little extra room for three, with cool air, a restful bed setup, and breakfast included every morning. Our staff offers complimentary help with darshan and sightseeing, so your day is sorted before it even begins.',
    amenitiesInline: 'AC, Complimentary breakfast, Darshan assistance',
    image: gallery22,
    alt: 'Triple occupancy AC room with comfortable bedding and soft lighting',
  },
  {
    id: 'four-occupancy',
    name: 'Four Occupancy AC Room',
    priceFrom: 3500,
    size: '260 sq ft',
    guests: 4,
    blurb:
      'A spacious, air-conditioned room made for families or groups of four travelling together, with complimentary breakfast to start the day right. Lunch and dinner can be arranged on request, and our staff is always ready to help with darshan and sightseeing plans.',
    amenitiesInline: 'AC, Complimentary breakfast, Darshan assistance, Meals on request',
    image: gallery5,
    alt: 'Four occupancy AC room with multiple beds and warm decor',
  },
];


export const heroPoster =
  'https://images.pexels.com/photos/8112552/pexels-photo-8112552.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const glimpses = [
  {
    image: building3,
    alt: "Our Stay",
  },
   {
    image: gallery7,
    alt: "Rooms",
  },
  {
    image: gallery6,
    alt: "Rooms",
  },
  {
    image: gallery5,
    alt: "Rooms",
  },
  {
    image: gallery14,
    alt: "Reception",
  },
  {
    image: food1,
    alt: "Foods",
  },
  {
    image: gallery9,
    alt: "Rooms",
  },

  
  
];

export const galleryImages = [
  {
    image: building3,
    alt: "Exterior",
  },
   {
    image: gallery7,
    alt: "img1",
  },
   {
    image: gallery5,
    alt: "img2",
  },
   
  {
    image: gallery9,
    alt: "img3",
  },
  {
    image: gallery4,
    alt: "img4",
  },
   {
    image: gallery6,
    alt: "img5",
  },
  {
    image: gallery8,
    alt: "img6",
  },

  {
    image: gallery2,
    alt: "img7",
  },
  
  {
    image: gallery14,
    alt: "Reception",
  },
  {
    image: gallery23,
    alt: "Jhoomar",
  },
  {
    image: gallery20,
    alt: "Exterior",
  },
  {
    image: gallery18,
    alt: "gallery",
  },
  {
    image: gallery3,
    alt: "yellow",
  },
  
   {
    image: gallery11,
    alt: "Exterior",
  },
  
  {
    image: gallery19,
    alt: "Washroom1",
  },
  {
    image: gallery1,
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

// export const testimonials = [
//   {
//     quote:
//       'The owner treated us like family. We arrived tired from the train and within minutes there was hot chai, a clean room, and a real plan for our temple visit the next morning.',
//     name: 'Aarthi & Venkat',
//     trip: 'Couples trip · Bengaluru',
//   },
//   {
//     quote:
//       'The staff went far beyond what you would expect. They arranged our airport pickup, helped with the aarti boat, and remembered every small thing we asked for. Spotless rooms too.',
//     name: 'Rohit Mehta',
//     trip: 'Solo pilgrimage · Delhi',
//   },
//   {
//     quote:
//       'We travelled with two young children and the family suite was perfect — two connecting rooms, extra beds ready, and the kids were made to feel completely welcome.',
//     name: 'The Khan family',
//     trip: 'Family stay · Lucknow',
//   },
//   {
//     quote:
//       'The location is the thing. Eight minutes walking and you are at Kashi Vishwanath, and the ghats are just a little further. Coming back to a quiet, clean room each evening made all the difference.',
//     name: 'Priya Nair',
//     trip: 'Temple visit · Kochi',
//   },
// ];

export const testimonials = [
  {
    quote:
      'The care we received from the staff was the real highlight — they made us feel like family, and the owner personally checked in on us throughout our stay. Service like this is hard to find even at five-star hotels, and being so close to Kashi Vishwanath Temple made everything easy.',
    name: 'Subhojeet Chanda',
    trip: 'Family vacation · 5 nights',
    reviewLink: 'https://www.google.com/maps/contrib/101244932756386689498/reviews/@24.4885741,84.5760095,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D', // paste URL here
  },
  {
    quote:
      'As first-time visitors we couldn\u2019t have asked for a smoother trip. The guide the hotel arranged made all the difference, and we still smile thinking about the small Kashi Vishwanath frame they gave us as a parting gift.',
    name: 'Shubhneet Kashyap',
    trip: 'First-time visit · Family',
    reviewLink: 'https://www.google.com/maps/contrib/116690958990479901469/reviews/@26.9770489,80.040667,7z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D', // paste URL here
  },
  {
    quote:
      'At 74 and 71, my wife and I weren\u2019t sure what to expect, but the owner\u2019s assurance on the phone was matched by everything that followed — airport pickup, a guide for a four-hour darshan across several temples, and food made with real care for older guests.',
    name: 'Krishnan Unny Menon',
    trip: 'Senior travellers · Kerala',
    reviewLink: 'https://www.google.com/maps/contrib/114967651409851598963/reviews/@17.9114587,78.8887883,6z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D', // paste URL here
  },
  {
    quote:
      'Just a short walk from Kashi Vishwanath Temple and the Ganga Aarti, and the care here rivals hotels with far more stars. Travelling with a toddler, I was relieved at how welcoming and accommodating everyone was.',
    name: 'Charu Sharma',
    trip: 'Family with toddler',
    reviewLink: 'https://www.google.com/maps/contrib/113112188753923004715/reviews/@26.9798608,80.0475261,7z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D', // paste URL here
  },
  
  {
    quote:
      'Every room was spotless and thoughtfully kept, and the staff made sure every part of our stay felt effortless. Being close to the ghats while still having a peaceful place to return to made this one of the best stays I\u2019ve had in Varanasi.',
    name: 'Manju M S',
    trip: 'Solo traveller',
    reviewLink: 'https://www.google.com/maps/contrib/110416292985090117114/reviews/@21.8183676,78.3828667,5z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D', // paste URL here
  },
  {
    quote:
      'I\u2019ve stayed here almost ten times now, and the hospitality is what keeps me coming back. The owner\u2019s personal attention makes you feel valued every visit, and if anything, the service keeps getting better.',
    name: 'Subodh Rajora',
    trip: 'Returning guest · 10 visits',
    reviewLink: 'https://www.google.com/maps/contrib/105545083742427776251/reviews/@27.0081109,80.1448697,7z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D', // paste URL here
  },
  {
    quote:
      'Compact rooms, but spotless and comfortable, with reliable AC and hot water. What really stood out was the owner himself — always around, always ready to help with directions, food tips, and transport — and the thoughtful memento we were given at checkout.',
    name: 'Prashant Pandya',
    trip: 'Couples trip',
    reviewLink: 'https://www.google.com/maps/contrib/101816800891597274179/reviews/@22.2715409,77.9266559,7z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D', // paste URL here
  },
  {
    quote:
      'The rooms were clean and spacious, and breakfast was genuinely satisfying. When we asked for a different room, the owner arranged it immediately without any fuss — that kind of flexibility says a lot about how guests are treated here.',
    name: 'Rajiv Biswal',
    trip: 'Family stay',
    reviewLink: 'https://www.google.com/maps/contrib/116461581537102591426/reviews/@19.9352068,80.7611677,6z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D', // paste URL here
  },
  {
    quote:
      'Travelling as a group of 11, we were looked after like family — a station pickup, a warm welcome, and even a Pandit Ji arranged for our temple darshan. It genuinely felt like a home away from home.',
    name: 'Aditi Saxena',
    trip: 'Group trip · 11 guests',
    reviewLink: 'https://www.google.com/maps/contrib/109896312022782558751/reviews/@26.9796666,80.189352,7z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D', // paste URL here
  },
  {
    quote:
      'The reception team welcomed us warmly from the start — polite, professional, and always ready to help, which made checking in effortless.',
    name: 'Abhishek Mishra',
    trip: 'Leisure visit',
    reviewLink: 'https://www.google.com/maps/contrib/116602928575887580936/reviews/@27.0041495,80.0483,7z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D', // paste URL here
  },
  {
    quote:
      'Right in the middle of old-town Varanasi, close to the ghats and the markets, with genuinely good service throughout our stay.',
    name: 'Blake Pech',
    trip: 'Traveller',
    reviewLink: 'https://www.tripadvisor.com/ShowUserReviews-g297685-d28544167-r1035955176-The_White_House-Varanasi_Varanasi_District_Uttar_Pradesh.html', // paste URL here
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
  whatsappMsgNo: "https://wa.me/917398722222?text=Hi%20there!%20I%20came%20through%20your%20website.%20I%27d%20like%20to%20inquire%20about%20room%20availability%20and%20book%20a%20stay.%20Could%20you%20please%20share%20the%20details%3F%20Thank%20you!",
  email: 'thewhitehouse1511@gmail.com',
  rating: '4.9',
  reviewsCount: '675+',
  guestsHosted: '5,000+',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.7817280661775!2d83.00288567484115!3d25.31153652706101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2f7b42a60cf1%3A0x4fc2c0fa999de345!2sThe%20White%20House%20-%20Hotel%20near%20Kashi%20Vishwanath%20temple!5e0!3m2!1sen!2sin!4v1785937950409!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',
};
