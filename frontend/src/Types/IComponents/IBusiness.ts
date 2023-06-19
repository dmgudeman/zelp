import { Business } from "../BusinessTypes";

export interface IBusinessCardProps {
    business: Business;
    rating: number;
}

export interface IBuisnessDisplayProps {
    businesses: Business[]; 
    // cardTotal: number;
}

export interface IBackgroundBannerProps {
    businesses: Business[];
}


export interface IBusinessShowDisplayProps {
    business: Business;
}