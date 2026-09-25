import { PhotoItem, Review } from '../types';

export const PHOTO_ITEMS: PhotoItem[] = [
  {
    id: 'p-1',
    title: 'Sigiriya Ancient Citadel at First Light',
    location: 'Sigiriya Cultural Triangle',
    category: 'Aerial',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLaWTSsTqHdYNNMwIeiC2iQYZLN-_Ot72RrVyoOxrfn0GbMha5rJeWZ46xJ92FS4NYDSuTgCLQSAKu-wTZ0hdsRrIPwcrG1YQ9vmoMaPx4ka_0A4mM2z2Jhd6dPnquDumeOCvez-p4csioqRYcX0neVcj-9_XDQtq2u5kZ0Qo-S4KEM6y9KRtFTPtA9vJbjxqswywcBPW1z9HOtOSgLvZ1ilq825Sz3FhmN8PbQ7talS2xza5ET0RhRg',
    caption: 'Captured at 06:14 AM above the ancient moat and water gardens as dawn mist lifts over the lion rock.',
    gear: 'DJI Inspire 3 Cinema RAW / Zenmuse X9-8K Air',
    resolution: '8K Ultra Cinema DCI'
  },
  {
    id: 'p-2',
    title: 'Nine Arches Viaduct Highland Train',
    location: 'Ella Mountain Pass',
    category: 'Highlands',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjEg9ASdDDWw7gjlxzVRm51Zgtw1HYzIHvRXdQWyWXELNHvuD2ZWwvAJmnN6pGl6gvg3qGm7OeE1JwTn70oIwr82J7WBf5kcAywWtmTk3CbmaXnZ9vyEAGPESDyIfMpkWBEpKcm875pzT6gGZqSNdiBCiEILOitWCELp8cqb9PospXhh7kR8fCl54ueSNmYg0jCxE_xEL2Sh-Fr2owwoUYIcNRc9LNN5dNRg9oasw42Pi071MFDd5Kzg',
    caption: 'The colonial stone viaduct framed by emerald tea slopes as the midday locomotive glides over the gorge.',
    gear: 'Sony FX3 Cinema Line / 24-70mm GM II f/2.8',
    resolution: '4K 120fps HDR'
  },
  {
    id: 'p-3',
    title: 'Solitary Tusker at Yala Lagoon',
    location: 'Yala National Park Block 1',
    category: 'Wildlife',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIBv-RQWhhGbmCbcaM90dAwyClYpoHcsSlikNAONyZu1BmAHybqt7QGJY3LFGSlL_jvOyS4YdrsqHBcWUn3iRb3YANEPkHGnV5g2t-seyjSFBeA2-OKZyo54XTM-MpKkB0QRPQTxYZKwhY9D2UBaZiTfTm9DgetJWDtM3oxxYHlVgrLyaDpOwP0CwioAKn10ys1bJYpQ-_K7BYrRfjoxkQfJvT2wQZH9ynMkB5uNzb279bbOAIQXnpAA',
    caption: 'A magnificent wild tusker emerging at dusk to drink by the freshwater dunes fringing the Indian Ocean.',
    gear: 'Sony Alpha 1 / FE 600mm f/4 GM OSS',
    resolution: '50.1 MP RAW'
  },
  {
    id: 'p-4',
    title: 'Sunset Champagne Toast on South Coast Cove',
    location: 'Mirissa Coastal Haven',
    category: 'Coast',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAanu-Nab3jvZw4J-IjO_Xfcd1rOi-s0hL9mGBlao_NHFt0UmpsLl9tp0kZUuTmbDoZkCGzY2JAxRfYLfYnvbpB8v4T8gv7gVOhj__IkQKXDkmXzPJx0xySGQJ-oW807gQffoZnpAuM5rhO7zDzFGuKwWiQ69_yaGjvYiB5--uD5YKdo3urDpZP0nxXUZtZqXpipq527Y6jV7OZ-c-dInX2pkOt39_HqdSVcYrbW2Z27INyzm-NaplZGA',
    caption: 'Golden hour luxury portraiture session during a private couple honeymoon cruise off the southern shoreline.',
    gear: 'Leica SL2 / Leica Summilux-SL 50mm f/1.4 ASPH',
    resolution: '47.3 MP Fine Art'
  },
  {
    id: 'p-5',
    title: 'High-Grown Ceylon Tea Estate Mist',
    location: 'Nuwara Eliya Hills',
    category: 'Highlands',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2QDSVyAfvLkR-VV4rG9oO-mSUXTRMKtrkfG-rS_W2ZRA1XqlYaZzKvYdU2YqQINORV4Hb-ziemvL0azpFOi2pZUZjvXbZzSshSIfDaQ3oZAa1_9MLcqiyYB6jjKfsFLf_8J0cbCEg7bTNUIfYFmO_0WEI8OOOpokKC5YWW21KBHPO0KKMXgwI4NphbLfYTQgJQ5W8YFCIs157z3SlS3lhZVG058zu5mXWwz5caw5kX3_KYiqJe8ir1w',
    caption: 'Centuries-old colonial tea estate enveloped in morning highland clouds at 1,800m altitude.',
    gear: 'Hasselblad X2D 100C / XCD 55mm f/2.5',
    resolution: '100 MP Medium Format'
  },
  {
    id: 'p-6',
    title: 'Sacred Royal Sanctum of Kandy Lake',
    location: 'Kandy Royal Kingdom',
    category: 'Heritage',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzmlJ2ZcOO0dgRBGL8PvQ36B2THgCURi6J9X5Ni-0iwUEFN9AC_tt4rNOuQimi7GTHUm--Y2x0lzxWdW_9y0hAivne8giQtmls5mg0grCdBtUq_jyNsSJsaLTuihOPNX5r7dqshM71ufQRzayP90Hop8Sg_oZF-4PGIo9yBSLJhqN62E2xd7cEfS3rS0YqKCrHEfdsQnGd4eUzDuG4HHsols_51QeMJ7luIQjKrFfjrA_6Tyq8H7HIrQ',
    caption: 'Golden-roofed temple sanctuary mirrored across the nocturnal waters of Bogambara Lake.',
    gear: 'Sony FX6 Cinema Line / Cine 35mm T1.5',
    resolution: 'Cinema DCI 4K'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r-1',
    author: 'Elena & Marcus V.',
    origin: 'Zurich, Switzerland',
    tour: 'Bespoke 10-Day Private Expedition',
    rating: 5,
    quote: 'An unforgettable journey through Sri Lanka. Everything was organized around what we wanted to see, and having our private guide made every temple and tea estate feel deeply personal and luxurious.',
    date: 'February 2026'
  },
  {
    id: 'r-2',
    author: 'Sarah K.',
    origin: 'London, United Kingdom',
    tour: 'Honeymoon Expedition with Unknown Studio',
    rating: 5,
    quote: 'The photography package was worth every penny. We returned home not just with memories, but with magazine-worthy drone films and fine-art photos of Sigiriya and the train in Ella. Absolute magic.',
    date: 'January 2026'
  },
  {
    id: 'r-3',
    author: 'David & Catherine T.',
    origin: 'Sydney, Australia',
    tour: 'Family Wildlife & Coastal Tour',
    rating: 5,
    quote: 'Punctual, luxurious, and completely stress-free. Traveling with kids in Sri Lanka was effortless thanks to Unknown Traveler’s patient chauffeur team and pristine Mercedes vehicles.',
    date: 'December 2025'
  },
  {
    id: 'r-4',
    author: 'Laurent M.',
    origin: 'Paris, France',
    tour: 'Hill Country Tea Escape',
    rating: 5,
    quote: 'Staying in private tea master bungalows, sipping rare single-estate flushes with our guide, and watching mist roll over Nuwara Eliya was an unmatched experience.',
    date: 'November 2025'
  }
];

export const PHOTOGRAPHY_PACKAGES = [
  {
    id: 'photo-silver',
    title: 'Fine-Art Travel Memoirs',
    priceUSD: 450,
    features: [
      'Half-day private professional portrait session',
      '50+ High-resolution retouched master frames',
      'Digital cloud delivery within 48 hours',
      'Curated locations (Sigiriya sunrise or Galle Fort)'
    ]
  },
  {
    id: 'photo-gold',
    title: 'Cinematic Drone & Reels Package',
    priceUSD: 850,
    popular: true,
    features: [
      'Full-day licensed drone cinematographer & photographer',
      '100+ Master photographic portraits & landscape art',
      'Three edited cinematic 4K video reels for social & memoirs',
      'Raw footage archive access on private encrypted drive'
    ]
  },
  {
    id: 'photo-platinum',
    title: 'Full Expedition Documentary Film',
    priceUSD: 1600,
    features: [
      'Dedicated photographer & videographer accompanying tour',
      'Comprehensive 5-8 minute 4K mini-documentary with custom score',
      'Handcrafted Italian leatherbound heirloom album printed & shipped',
      'Complete raw aerial and camera footage archive'
    ]
  }
];
