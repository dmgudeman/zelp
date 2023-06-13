import {Review} from './ReviewTypes';

export interface Business {
    address: string;
    cost: string;
    hours: WeekHours;
    id: number;
    imageUrls: string[] | null;
    latlng: Coordinates;
    name: string;
    phone: string;
    reviews: Review[] | null;
    tag: string[] | null;
    website: string | null;
}

interface Coordinates {
    lat: number;
    lng: number;
  }

  interface DayHours {
    time: string;
  }
  
  interface WeekHours {
    mon: DayHours;
    tue: DayHours;
    wed: DayHours;
    thu: DayHours;
    fri: DayHours;
    sat: DayHours;
    sun: DayHours;
  }
