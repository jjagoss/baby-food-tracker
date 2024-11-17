export interface FoodItem {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    recommendedAge: string;
    allergenInfo: string;
    tried: boolean;
    dateTried?: string;
    notes?: string;
}