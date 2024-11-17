import React from "react";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FoodItem } from "types";

interface FoodCardProps {
    food: FoodItem;
    onClick: () => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ food, onClick }) => {
    return (
        <Card
            className={`p-4 cursor-pointer transition-transform hover:scale-105 ${
                food.tried ? 'bg-green-50' : 'bg-white'
            }`}
            onClick={onClick}
            data-testid="food-card"
        >
            <div className="relative">
                <img
                    src={food.imageUrl}
                    alt={food.name}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                />
                {food.tried && (
                    <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1"
                    data-testId="tried-indicator">
                        <Check className="w-4 h-4 text-white"/>
                    </div>
                )}
            </div>
            <h3 className="font-semibold text-center">{food.name}</h3>
        </Card>
    );
};