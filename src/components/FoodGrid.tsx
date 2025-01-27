import React from 'react';
import { FoodItem } from 'types';
import { FoodCard } from './FoodCard';
import { AddFoodForm } from './AddFoodForm';

interface FoodGridProps {
    foods: FoodItem[];
    onFoodSelect: (food: FoodItem) => void;
    onAddFood: (newFood: Omit<FoodItem, 'id' | 'tried'>) => void;
}

export const FoodGrid: React.FC<FoodGridProps> = ({ foods, onFoodSelect, onAddFood }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {foods.map(food => (
                <FoodCard
                    key={food.id}
                    food={food}
                    onClick={() => onFoodSelect(food)}
                />
            ))}
            <AddFoodForm onAddFood={onAddFood}/>
        </div>
    )
}