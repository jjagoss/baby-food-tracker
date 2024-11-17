import { useState } from 'react';
import { FoodGrid } from './components/FoodGrid';
import { FoodDialog } from './components/FoodDialog';
import { FoodItem } from 'types';
import { InitialFoods } from '../data/initialFoods';

const App = () => {
  const [foods, setFoods] = useState<FoodItem[]>(InitialFoods);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFoodSelect = (food: FoodItem) => {
    setSelectedFood(food);
    setIsDialogOpen(true);
  };

  const handleUpdateStatus = (tried: boolean) => {
    if (!selectedFood) return;

    const updatedFoods = foods.map(food => {
      if (food.id === selectedFood.id) {
        return {
          ...food,
          tried,
          dateTried: tried ? new Date().toISOString().split('T')[0]: undefined
        };
      }
      return food;
    });

    setFoods(updatedFoods);
    setIsDialogOpen(false);
  };

  const handleUpdateNotes = (notes: string) => {
    if (!selectedFood) return;

    const updatedFoods = foods.map(food => {
      if (food.id === selectedFood.id) {
        return {
          ...food,
          notes
        };
      }
      return food;
    });

    setFoods(updatedFoods);
  };

  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Baby Food Tracker</h1>

      <FoodGrid
        foods={foods}
        onFoodSelect={handleFoodSelect}
      />

      <FoodDialog
        food={selectedFood}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onUpdateStatus={handleUpdateStatus}
        onUpdateNotes={handleUpdateNotes}
        />
    </div>
  );
};

export default App;