import { Tour } from '../types';

export const TOURS: Tour[] = [
  {
    id: 'sigiriya-day',
    title: 'Sigiriya Ancient Citadel Day Experience',
    subtitle: 'Colombo → Dambulla Cave Temples → Sigiriya Rock Fortress',
    tag: '1 DAY INTENSIVE',
    category: 'day-trip',
    durationDays: 1,
    durationLabel: '1 Day Intensive',
    route: ['Colombo / Negombo', 'Dambulla Cave Temples', 'Sigiriya Rock Fortress', 'Return Transfer'],
    startingPriceUSD: 180,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLaWTSsTqHdYNNMwIeiC2iQYZLN-_Ot72RrVyoOxrfn0GbMha5rJeWZ46xJ92FS4NYDSuTgCLQSAKu-wTZ0hdsRrIPwcrG1YQ9vmoMaPx4ka_0A4mM2z2Jhd6dPnquDumeOCvez-p4csioqRYcX0neVcj-9_XDQtq2u5kZ0Qo-S4KEM6y9KRtFTPtA9vJbjxqswywcBPW1z9HOtOSgLvZ1ilq825Sz3FhmN8PbQ7talS2xza5ET0RhRg',
    overview: 'Depart before dawn in your private executive Mercedes or Toyota Prado. Ascend the 5th-century UNESCO rock citadel before the tropical heat peaks and discover the sacred cave sanctuaries of Dambulla with your private archaeologist-guide.',
    vehicleType: 'Executive Sedan / Toyota Prado 4x4',
    inclusions: [
      'Private air-conditioned luxury vehicle with English chauffeur-guide',
      'VIP fast-track entrance tickets to Sigiriya & Dambulla',
      'Gourmet Sri Lankan estate lunch with king coconut refreshments',
      'Bottled mineral water, cold hand towels, and mobile Wi-Fi onboard',
      'Door-to-door hotel pickup and drop-off in Colombo or Negombo'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dawn Journey to the Sky Citadel & Royal Caves',
        description: 'Depart at 05:30 AM in supreme comfort. Arrive at Sigiriya to ascend the fortress under morning golden light. Explore King Kashyapa’s water gardens, fresco gallery, and summit palace. Enjoy an organic farm lunch followed by a guided tour through the 2,000-year-old painted rock cave temples of Dambulla.',
        meals: 'Breakfast basket, Traditional Village Lunch',
        stay: 'Day Tour (Return to Colombo hotel)',
        highlights: ['Private early-access ascent of Sigiriya', 'Ancient Sigiriya Frescoes', 'Dambulla Golden Caves', 'Spiced Ceylon Lunch']
      }
    ]
  },
  {
    id: 'hill-country-mist',
    title: 'Hill Country & Tea Mist Escape',
    subtitle: 'Kandy → Nuwara Eliya → Nine Arches Ella',
    tag: '3 DAYS / 2 NIGHTS',
    category: 'highland',
    durationDays: 3,
    durationLabel: '3 Days / 2 Nights',
    route: ['Kandy', 'Ramboda Waterfalls', 'Nuwara Eliya', 'Colonial Blue Train', 'Ella'],
    startingPriceUSD: 650,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjEg9ASdDDWw7gjlxzVRm51Zgtw1HYzIHvRXdQWyWXELNHvuD2ZWwvAJmnN6pGl6gvg3qGm7OeE1JwTn70oIwr82J7WBf5kcAywWtmTk3CbmaXnZ9vyEAGPESDyIfMpkWBEpKcm875pzT6gGZqSNdiBCiEILOitWCELp8cqb9PospXhh7kR8fCl54ueSNmYg0jCxE_xEL2Sh-Fr2owwoUYIcNRc9LNN5dNRg9oasw42Pi071MFDd5Kzg',
    overview: 'Traverse misty high-altitude winding roads, stay in heritage colonial tea planter estates, and board the iconic scenic observation carriage through mountain passes.',
    vehicleType: 'Luxury Mercedes Sprinter / Land Cruiser Prado',
    inclusions: [
      '2 Nights accommodation in 5-star boutique tea planter bungalows',
      'Dedicated private chauffeur-guide throughout the journey',
      'First-Class reserved seats on the scenic high-mountain railway',
      'Private sommelier-led single-estate Ceylon tea tasting session',
      'Breakfast and 4-course dinners at selected heritage estates'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kandy Kingdom to Nuwara Eliya Highlands',
        description: 'Morning private visit to Dalada Maligawa (Temple of the Tooth Relic). Ascend through verdant highland passes past Ramboda Falls. Check into your colonial tea estate bungalow and enjoy high tea on the lawn overlooking misty peaks.',
        meals: 'Breakfast, Gourmet High Tea, Candlelight Dinner',
        stay: 'Heritance Tea Factory or Ceylon Tea Trails Bungalow',
        highlights: ['Temple of the Tooth VIP visit', 'Ramboda Falls overlook', 'Colonial High Tea']
      },
      {
        day: 2,
        title: 'The Iconic Mountain Blue Train to Ella',
        description: 'Board the legendary mountain train at Nanu Oya. Watch endless green carpets of tea roll past your observation window over dramatic gorges. Arrive in Ella and walk to the Nine Arches Viaduct at sunset.',
        meals: 'Breakfast, Estate Lunch, Dinner',
        stay: '98 Acres Resort & Spa / Boutique Mountain Villa',
        highlights: ['First-Class Train Journey', 'Nine Arches Bridge at sunset', "Little Adam's Peak viewpoint"]
      },
      {
        day: 3,
        title: 'Ella Peaks & Scenic Descent',
        description: 'Sunrise trek up Little Adam’s Peak followed by a revitalizing Ayurvedic spa massage. Tour Ravana Falls before a private scenic transfer onward to Colombo or the Southern Beaches.',
        meals: 'Breakfast, Farmhouse Lunch',
        stay: 'Tour Conclusion',
        highlights: ['Morning ridge walk', 'Ravana Falls cascade', 'Ayurvedic wellness']
      }
    ]
  },
  {
    id: 'wildlife-coastal-odyssey',
    title: 'Wildlife & Coastal Wilderness Odyssey',
    subtitle: 'Ella → Yala National Park → Mirissa & Galle',
    tag: '4 DAYS / 3 NIGHTS',
    category: 'wildlife',
    durationDays: 4,
    durationLabel: '4 Days / 3 Nights',
    route: ['Ella', 'Yala National Park', 'Tangalle Beach', 'Mirissa Whale Bay', 'Galle Fort'],
    startingPriceUSD: 890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIBv-RQWhhGbmCbcaM90dAwyClYpoHcsSlikNAONyZu1BmAHybqt7QGJY3LFGSlL_jvOyS4YdrsqHBcWUn3iRb3YANEPkHGnV5g2t-seyjSFBeA2-OKZyo54XTM-MpKkB0QRPQTxYZKwhY9D2UBaZiTfTm9DgetJWDtM3oxxYHlVgrLyaDpOwP0CwioAKn10ys1bJYpQ-_K7BYrRfjoxkQfJvT2wQZH9ynMkB5uNzb279bbOAIQXnpAA',
    overview: 'Private open-top 4x4 safaris tracking leopards and wild elephant herds in Yala, ending with seaside champagne dinners and whale-watching in Mirissa bay.',
    vehicleType: 'Custom Safari 4x4 & Executive Touring Luxury SUV',
    inclusions: [
      '2 Nights at luxury glamping tented camp in Yala with private plunge pool',
      '1 Night beachfront luxury suite along the southern oceanfront',
      'Two private game drives in Yala with expert senior naturalist',
      'Private sunrise catamaran yacht charter for whale observation',
      'All park entrance permits, tracker fees, and all daily meals'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Descent to Yala Jungle Frontiers',
        description: 'Drive from Ella downwards through southern dry plains. Check in to your ultra-luxury tented safari camp. Embark on your first late-afternoon private game drive tracking leopards and sloth bears.',
        meals: 'Lunch, Sundowner Cocktails, Bush Barbecue Dinner',
        stay: 'Wild Coast Tented Lodge or Chena Huts',
        highlights: ['Wild Coast Luxury Check-in', 'Evening Safari Game Drive', 'Starlight Bush Dinner']
      },
      {
        day: 2,
        title: 'Dawn Safari & Secret Lagoon Wildlife',
        description: 'Enter the national park gates at first light. Track elephant families bathing in coastal lagoons and search for elusive birdlife. Afternoon leisure by your plunge pool, followed by evening nature walk.',
        meals: 'Breakfast basket in bush, Gourmet Lunch, Dinner',
        stay: 'Wild Coast Tented Lodge',
        highlights: ['Sunrise Leopard Tracking', 'Birdwatching at coastal wetlands', 'Naturalist lecture']
      },
      {
        day: 3,
        title: 'Ocean Coastal Drive to Galle Fort',
        description: 'Traverse the picturesque southern coastal road. Stop at Mawella and Tangalle bays. Arrive at UNESCO Galle Dutch Fort for an architectural walking tour with a local historian.',
        meals: 'Breakfast, Seafood Lunch, Fort Terrace Dinner',
        stay: 'Amangalla or The Fort Printers',
        highlights: ['Scenic southern coast drive', 'Historic Galle Fort ramparts walk', 'Sunset lighthouse cocktails']
      },
      {
        day: 4,
        title: 'Whale Watching & Sunset Shoreline',
        description: 'Board a private chartered catamaran at dawn into the Indian Ocean to observe majestic blue whales and spinner dolphins. Afternoon leisure before onward departure.',
        meals: 'Breakfast onboard, Coastal Farewell Lunch',
        stay: 'Tour Conclusion',
        highlights: ['Blue whale observation cruise', 'Mirissa coastline', 'Return transfer']
      }
    ]
  },
  {
    id: 'sri-lanka-highlights-grand',
    title: 'Sri Lanka Highlights Grand Expedition',
    subtitle: 'Colombo → Sigiriya → Kandy → Ella → Yala → Galle',
    tag: '7 DAYS / 6 NIGHTS',
    category: 'grand',
    durationDays: 7,
    durationLabel: '7 Days / 6 Nights',
    route: ['Colombo', 'Sigiriya', 'Kandy', 'Ella', 'Yala National Park', 'Galle Fort'],
    startingPriceUSD: 1650,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAanu-Nab3jvZw4J-IjO_Xfcd1rOi-s0hL9mGBlao_NHFt0UmpsLl9tp0kZUuTmbDoZkCGzY2JAxRfYLfYnvbpB8v4T8gv7gVOhj__IkQKXDkmXzPJx0xySGQJ-oW807gQffoZnpAuM5rhO7zDzFGuKwWiQ69_yaGjvYiB5--uD5YKdo3urDpZP0nxXUZtZqXpipq527Y6jV7OZ-c-dInX2pkOt39_HqdSVcYrbW2Z27INyzm-NaplZGA',
    overview: 'The quintessential island masterpiece. Unlocks ancient royalty, jungle wildlife, highland cloud forests, and colonial ramparts in seamless private luxury.',
    vehicleType: 'Executive Mercedes Benz / Toyota Prado VIP Fleet',
    inclusions: [
      '6 Nights luxury 5-star handpicked boutique properties across Sri Lanka',
      '24/7 dedicated senior chauffeur-concierge and private vehicle',
      'Unknown Studio Media Pass with personal drone pilot & photographer session',
      'All national park safaris, private guides, and fast-track entrance tickets',
      'Full breakfast daily, selected fine dining experiences, and welcome gifts'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Colombo & Transfer to the Cultural Triangle',
        description: 'VIP airport greeting at Bandaranaike International. Journey in executive comfort to your jungle villa sanctuary near Sigiriya.',
        meals: 'Welcome Refreshments, Dinner',
        stay: 'Water Garden Sigiriya or Jetwing Vil Uyana',
        highlights: ['VIP Arrival Concierge', 'Scenic interior drive', 'Jungle resort spa']
      },
      {
        day: 2,
        title: 'Sigiriya Sky Fortress & Dambulla Golden Caves',
        description: 'Climb Sigiriya Fortress early in the day. Savor a chef-prepared organic lunch followed by the sacred golden caverns of Dambulla.',
        meals: 'Breakfast, Farm-to-Table Lunch, Dinner',
        stay: 'Water Garden Sigiriya',
        highlights: ['Sigiriya Fortress Summit', 'Dambulla Caves', 'Ayurvedic oil massage']
      },
      {
        day: 3,
        title: 'Royal City of Kandy & Temple of the Tooth',
        description: 'Travel south to Kandy. Visit Peradeniya Royal Botanic Gardens and attend the sacred evening drum ritual at Dalada Maligawa.',
        meals: 'Breakfast, Traditional Lunch, Dinner',
        stay: 'The Kandy House / Earl’s Regency',
        highlights: ['Peradeniya Orchid Houses', 'Temple of the Tooth Relic', 'Kandyan Dance Troupe']
      },
      {
        day: 4,
        title: 'Scenic Highlands & The Ella Mountain Train',
        description: 'Drive through verdant Nuwara Eliya tea hills. Board the colonial blue train over the mountain spine into Ella.',
        meals: 'Breakfast, Tea Estate High Tea, Dinner',
        stay: '98 Acres Resort & Spa',
        highlights: ['Nuwara Eliya Tea Estate', 'Highland Blue Train', 'Sunset at Nine Arches']
      },
      {
        day: 5,
        title: 'Yala Wilderness Safari & Leopard Tracking',
        description: 'Descend to the dry wildlife savanna of Yala. Embark on a private 4x4 open-top safari expedition with your naturalist.',
        meals: 'Breakfast, Bush Lunch, Firepit BBQ Dinner',
        stay: 'Wild Coast Tented Lodge',
        highlights: ['Ravana Falls', 'Private 4x4 Safari', 'Leopard & Elephant watching']
      },
      {
        day: 6,
        title: 'Colonial Galle Fort & Southern Ocean Coastline',
        description: 'Drive along the turquoise south coast. Explore the cobbled alleys, gems, and ramparts of 17th-century Galle Fort.',
        meals: 'Breakfast, Fresh Catch Seafood Lunch, Galle Terrace Dinner',
        stay: 'Amangalla or Fort Bazaar',
        highlights: ['Galle Fort Walking Tour', 'Stilt Fishermen', 'Sunset at Flag Rock']
      },
      {
        day: 7,
        title: 'Colombo Farewell & Airport Departure',
        description: 'Morning leisure by the beach or pool. Leisurely transfer via the Southern Expressway to Colombo or BIA Airport.',
        meals: 'Breakfast, Farewell Lunch',
        stay: 'Departure',
        highlights: ['Express highway transfer', 'Duty free assistance', 'Island farewell gift']
      }
    ]
  }
];
