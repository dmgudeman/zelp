export interface Review {
    id: number;
    authorId: number;
    authorName: string;
    body: string;
    businessId: number;
    photoUrl: string;
    rating: number;
    updatedAt: string;
}

export interface Business {
    address: string;
    cost: string;
    hours: WeekHours;
    id: number;
    imageUrls: string[];
    latlng: Coordinates;
    name: string;
    phone: string;
    reviews: Review[];
    tag: string[];
    website: string;
    // other properties here
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
