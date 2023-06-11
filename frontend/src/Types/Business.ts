export interface Business {
    id: string;
    name: string; 
    phone: string;  
    address: string;  
    website: string;  
    cost: string;  
    latlng: string; 
    hours: any; 
}

export interface BusinessesState {
    [id: string]: Business;
}
