import {Review} from './ReviewTypes';

export interface Business {
    address: string;
    cost: string;
    hours: WeekHours;
    id: number;
    imageUrls: string[] | null;
    rating: number | null;
    latlng: Coordinates | string;
    name: string;
    phone: string;
    reviews: Review[] | null;
    tag: string[] | null;
    website: string | null;
}

export interface Coordinates {
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
