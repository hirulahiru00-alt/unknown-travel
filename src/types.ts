export type Currency = 'USD' | 'LKR';

export interface Destination {
  id: string;
  name: string;
  category: string;
  elevation: string;
  shortDesc: string;
  description: string;
  image: string;
  highlights: string[];
  bestSeason: string;
  recommendedDays: string;
  attractions: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals: string;
  stay: string;
  highlights: string[];
}

export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  category: 'day-trip' | 'highland' | 'wildlife' | 'grand';
  durationDays: number;
  durationLabel: string;
  route: string[];
  startingPriceUSD: number;
  image: string;
  overview: string;
  inclusions: string[];
  vehicleType: string;
  itinerary: ItineraryDay[];
}

export interface PhotoItem {
  id: string;
  title: string;
  location: string;
  category: 'Aerial' | 'Wildlife' | 'Heritage' | 'Coast' | 'Highlands';
  image: string;
  caption: string;
  gear: string;
  resolution: string;
}

export interface Review {
  id: string;
  author: string;
  origin: string;
  tour: string;
  rating: number;
  quote: string;
  date: string;
}

export interface BookingSubmission {
  id: string;
  tourTitle: string;
  duration: string;
  style: string;
  highlights: string[];
  guests: number;
  date: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
  currency: Currency;
  estimatedPrice: number;
  includePhotography: boolean;
  hotelTier: 'ultra-luxury' | 'boutique' | 'curated';
}
