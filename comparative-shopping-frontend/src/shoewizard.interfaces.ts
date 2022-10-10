export interface Product {
    _id: string;
    name: string;
    lowestPrice: number;
    imageUrl: string;
    description: string;
    colors: Array<string>;
    categories: Array<string>;
    distance: number // miles
    sources: Array<string>;
    stores: Array<string>;
}

export interface RangeSliderOptions {
    lowValue: number;
    highValue: number;
}