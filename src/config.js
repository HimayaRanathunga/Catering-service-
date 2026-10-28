// Change these to the real details.
export const SITE = {
  whatsapp: '94770000000', // country code + number, no "+" or spaces
  phoneDisplay: '077 000 0000',
  email: 'info@example.com',
  facebook: 'https://www.facebook.com/share/1BwGC9W55a/?mibextid=wwXIfr',
  mapQuery: 'Bandarawela, Sri Lanka',
  // PLACEHOLDER numbers: replace with the real figures before launch.
  stats: { events: 500, guests: 50000, years: 8 },
  areas: ['Bandarawela', 'Badulla', 'Welimada', 'Haputale', 'Ella', 'Nuwara Eliya', 'Diyatalawa', 'Hali-Ela'],
}

const p = (n) => `/photos/photo-${String(n).padStart(2, '0')}.jpeg`

export const IMG = {
  hero: [p(7), p(16), p(2)],
  catering: p(21),
  party: p(4),
  rental: p(15),
  events: {
    wedding: p(27),
    concert: p(10),
    award: p(23),
    graduation: '/photos/graduation.jpg',
    launch: p(1),
    birthday: p(5),
    religious: '/photos/alms.jpg',
    corporate: '/photos/flowers.jpg',
  },
  rentals: {
    chairs: p(17),
    tents: p(16),
    stage: p(13),
    sound: p(10),
    cooking: p(25),
    decor: '/photos/flowers.jpg',
    crockery: p(24),
  },
  food: {
    rice: p(27),
    curry: p(21),
    shortEats: p(26),
    mains: p(20),
    dessert: '/photos/graduation.jpg',
    buffet: '/photos/alms.jpg',
  },
  // Every photo in /public/photos; the first four also show on the home page.
  gallery: [
    [6, 'events'], [16, 'rentals'], [23, 'weddings'], [20, 'food'],
    [1, 'events'], [2, 'events'], [3, 'events'], [4, 'events'], [5, 'events'],
    [7, 'rentals'], [8, 'rentals'], [15, 'rentals'], [17, 'rentals'], [24, 'rentals'],
    [9, 'weddings'], [10, 'weddings'], [11, 'weddings'], [12, 'weddings'], [13, 'weddings'],
    [14, 'weddings'], [18, 'weddings'], [19, 'weddings'],
    [21, 'food'], [22, 'food'], [25, 'food'], [26, 'food'], [27, 'food'],
  ].map(([n, cat]) => ({ src: p(n), cat })).concat([
    { src: '/photos/alms.jpg', cat: 'food' },
    { src: '/photos/graduation.jpg', cat: 'events' },
    { src: '/photos/flowers.jpg', cat: 'events' },
  ]),
}
