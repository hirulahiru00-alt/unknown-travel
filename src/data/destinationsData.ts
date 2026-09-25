import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    category: 'Cultural Triangle',
    elevation: '349m Elevation',
    shortDesc: 'Ancient kingdom, UNESCO palace fortress, 5th-century water gardens, and breathtaking 360° jungle vistas.',
    description: 'Rising dramatically 200 meters above the central jungle plains, Sigiriya is an ancient citadel built in the 5th century AD by King Kashyapa. Renowned for its monumental Lion Gate, exquisite cliff-face frescoes, and ancient landscaped water gardens, it stands as one of the best-preserved examples of ancient Asian urban planning.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLaWTSsTqHdYNNMwIeiC2iQYZLN-_Ot72RrVyoOxrfn0GbMha5rJeWZ46xJ92FS4NYDSuTgCLQSAKu-wTZ0hdsRrIPwcrG1YQ9vmoMaPx4ka_0A4mM2z2Jhd6dPnquDumeOCvez-p4csioqRYcX0neVcj-9_XDQtq2u5kZ0Qo-S4KEM6y9KRtFTPtA9vJbjxqswywcBPW1z9HOtOSgLvZ1ilq825Sz3FhmN8PbQ7talS2xza5ET0RhRg',
    highlights: ['5th-Century Water Gardens', 'Fresco Gallery & Mirror Wall', 'Lion Claw Gateway & Summit Citadel', 'Sunrise Hot Air Ballooning'],
    bestSeason: 'December to April, July to September',
    recommendedDays: '1 - 2 Days',
    attractions: ['Sigiriya Rock Fortress', 'Pidurangala Rock', 'Dambulla Golden Rock Caves', 'Minneriya Elephant Gathering']
  },
  {
    id: 'ella',
    name: 'Ella',
    category: 'Highlands',
    elevation: '1,041m Elevation',
    shortDesc: 'Mist-covered peaks, Nine Arches stone viaduct, emerald tea plantations, and legendary colonial rail journeys.',
    description: 'Tucked into the lush southern highlands of Sri Lanka, Ella is a tranquil mountain enclave famed for its dramatic gap valley, roaring Ravana waterfalls, and the historic Nine Arches Bridge. Here, the legendary blue train winds through high-altitude tea valleys amidst morning mist.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjEg9ASdDDWw7gjlxzVRm51Zgtw1HYzIHvRXdQWyWXELNHvuD2ZWwvAJmnN6pGl6gvg3qGm7OeE1JwTn70oIwr82J7WBf5kcAywWtmTk3CbmaXnZ9vyEAGPESDyIfMpkWBEpKcm875pzT6gGZqSNdiBCiEILOitWCELp8cqb9PospXhh7kR8fCl54ueSNmYg0jCxE_xEL2Sh-Fr2owwoUYIcNRc9LNN5dNRg9oasw42Pi071MFDd5Kzg',
    highlights: ['Nine Arches Bridge Viaduct', "Little Adam's Peak Ridge Walk", 'Ravana Falls & Secret Pools', 'Scenic Colonial Blue Train Route'],
    bestSeason: 'January to May, August to September',
    recommendedDays: '2 - 3 Days',
    attractions: ['Demodara Loop', "Ella Rock Trail", 'Uva Halpewatte Tea Factory', 'Ravana Pool Club & Flying Ravana']
  },
  {
    id: 'kandy',
    name: 'Kandy',
    category: 'Royal Kingdom',
    elevation: '500m Elevation',
    shortDesc: 'Sacred Temple of the Tooth Relic, royal botanical sanctuaries, Kandyan ceremonial arts, and lake promenades.',
    description: 'The last royal capital of ancient Sri Lanka, nestled in picturesque mist-shrouded forested hills around a scenic central lake. Kandy houses the sacred relic of the tooth of Buddha at Sri Dalada Maligawa and preserves timeless Kandyan drummer dances and royal craftsmanship.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzmlJ2ZcOO0dgRBGL8PvQ36B2THgCURi6J9X5Ni-0iwUEFN9AC_tt4rNOuQimi7GTHUm--Y2x0lzxWdW_9y0hAivne8giQtmls5mg0grCdBtUq_jyNsSJsaLTuihOPNX5r7dqshM71ufQRzayP90Hop8Sg_oZF-4PGIo9yBSLJhqN62E2xd7cEfS3rS0YqKCrHEfdsQnGd4eUzDuG4HHsols_51QeMJ7luIQjKrFfjrA_6Tyq8H7HIrQ',
    highlights: ['Temple of the Sacred Tooth Relic (Dalada Maligawa)', 'Royal Botanical Gardens Peradeniya', 'Kandyan Cultural Drum & Fire Ceremony', 'Udawatta Kele Royal Forest Sanctuary'],
    bestSeason: 'December to April (Esala Perahera in July/August)',
    recommendedDays: '1 - 2 Days',
    attractions: ['Kandy Lake Promenade', 'Ceylon Tea Museum Hantana', 'Bahirawakanda Vihara Buddha', 'Ambuluwawa Biodiversity Tower']
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    category: 'Tea Country',
    elevation: '1,868m Elevation',
    shortDesc: "'Little England', high-altitude cool mist, historic tea master bungalows, and artisanal high-grown Ceylon tasting.",
    description: 'Set amidst undulating green hills blanketed in world-renowned Ceylon tea bushes, Nuwara Eliya is perched at nearly 1,900 meters above sea level. With its cool alpine climate, Tudor-style heritage residences, championship golf course, and roaring waterfalls, it evokes an era of grand colonial charm.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2QDSVyAfvLkR-VV4rG9oO-mSUXTRMKtrkfG-rS_W2ZRA1XqlYaZzKvYdU2YqQINORV4Hb-ziemvL0azpFOi2pZUZjvXbZzSshSIfDaQ3oZAa1_9MLcqiyYB6jjKfsFLf_8J0cbCEg7bTNUIfYFmO_0WEI8OOOpokKC5YWW21KBHPO0KKMXgwI4NphbLfYTQgJQ5W8YFCIs157z3SlS3lhZVG058zu5mXWwz5caw5kX3_KYiqJe8ir1w',
    highlights: ['Artisanal Single-Estate Tea Tastings', 'Horton Plains National Park & World’s End', 'Gregory Lake Waterways', 'Centuries-Old Colonial Planter Bungalows'],
    bestSeason: 'February to May (Spring Bloom)',
    recommendedDays: '2 Days',
    attractions: ['Pedro Tea Estate', 'Nuwara Eliya Golf Club', 'Victoria Park', 'Ramboda Falls & Pass']
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    category: 'Safari Wilds',
    elevation: 'Coastal Savanna',
    shortDesc: 'Untamed wildlife sanctuary, elusive Ceylon leopards, majestic Asian elephant herds, and coastal freshwater lagoons.',
    description: 'Bordering the Indian Ocean along Sri Lanka’s wild southeastern coastline, Yala boasts one of the highest leopard densities in the world. Its mosaic of scrub jungle, coastal lagoons, and granite rocky outcrops supports sloth bears, marsh crocodiles, and hundreds of bird species.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIBv-RQWhhGbmCbcaM90dAwyClYpoHcsSlikNAONyZu1BmAHybqt7QGJY3LFGSlL_jvOyS4YdrsqHBcWUn3iRb3YANEPkHGnV5g2t-seyjSFBeA2-OKZyo54XTM-MpKkB0QRPQTxYZKwhY9D2UBaZiTfTm9DgetJWDtM3oxxYHlVgrLyaDpOwP0CwioAKn10ys1bJYpQ-_K7BYrRfjoxkQfJvT2wQZH9ynMkB5uNzb279bbOAIQXnpAA',
    highlights: ['Private 4x4 Safari with Master Naturalist', 'High-Density Panthera Pardus Kotiya (Leopard) Tracking', 'Wild Elephant Herds at Watering Lagoons', 'Luxury Tented Wilderness Camps under the Stars'],
    bestSeason: 'February to July (Dry wildlife viewing season)',
    recommendedDays: '2 Days',
    attractions: ['Yala Block 1 & 5', 'Kataragama Sacred Sanctuary', 'Kumana Bird Wetlands', 'Kirinda Ocean Temple']
  },
  {
    id: 'south-coast',
    name: 'South Coast & Galle',
    category: 'Coastal Haven',
    elevation: 'Sea Level',
    shortDesc: 'Golden crescent bays, 17th-century Galle Dutch Fort ramparts, private sunset catamaran sails, and stilt fishermen.',
    description: 'Where the turquoise waves of the Indian Ocean lap against UNESCO-listed 17th-century Dutch colonial ramparts, the southern coastline of Sri Lanka offers a blend of boutique art galleries, oceanfront fine dining, private catamaran whale-watching sails, and palm-fringed sandy bays.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAanu-Nab3jvZw4J-IjO_Xfcd1rOi-s0hL9mGBlao_NHFt0UmpsLl9tp0kZUuTmbDoZkCGzY2JAxRfYLfYnvbpB8v4T8gv7gVOhj__IkQKXDkmXzPJx0xySGQJ-oW807gQffoZnpAuM5rhO7zDzFGuKwWiQ69_yaGjvYiB5--uD5YKdo3urDpZP0nxXUZtZqXpipq527Y6jV7OZ-c-dInX2pkOt39_HqdSVcYrbW2Z27INyzm-NaplZGA',
    highlights: ['UNESCO Galle Dutch Fort Historical Walking Tour', 'Mirissa Blue Whale Private Catamaran Charter', 'Traditional Stilt Fishermen at Golden Hour', 'Oceanfront Dining & Beachfront Boutique Stays'],
    bestSeason: 'November to April (Calm blue sea season)',
    recommendedDays: '3 - 4 Days',
    attractions: ['Galle Lighthouse', 'Unawatuna & Mirissa Bay', 'Weligama Surf Point', 'Kosgoda Turtle Sanctuary']
  }
];
