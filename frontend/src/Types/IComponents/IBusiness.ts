import { Business } from "../BusinessTypes";

export interface IBusinessCardProps {
    business: Business;
}

export interface IBuisnessDisplayProps {
    businesses: Business[]; 
    cardTotal: number;
}

export interface IBackgroundBannerProps {
    businesses: Business[];
}


export interface IBusinessShowDisplayProps {
    business: Business;
}