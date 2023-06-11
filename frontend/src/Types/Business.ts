export interface Business {
    id: number;
    name: string; 
    phone: string;  
    address: string;  
    website: string;  
    cost: string;  
    latlng: string; 
    hours: BusinessHours; 
    imgUrls: string[];
    reviews: any[]
}

export interface BusinessesState {
    [id: string]: Business;
}


type BusinessHours = {
    [day: string]: {
      time: string;
    };
  };