import React from "react";
import { Calendar, Info, Check, X } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FoodItem } from "types";

interface FoodDialogProps {
    food: FoodItem | null;
    isOpen: boolean;
    onClose: () => void;
    onUpdateStatus: (tried: boolean) => void;
    onUpdateNotes: (notes: string) => void;
}

export const FoodDialog: React.FC<FoodDialogProps> = ({
    food,
    isOpen,
    onClose,
    onUpdateStatus,
    onUpdateNotes,
}) => {
    if (!food) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{food.name}</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <img
                        src={food.imageUrl}
                        alt={food.name}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    
                    <div className="space-y-2">
                        <p className="flex items-center gap-2">
                            <Calendar className="w-4 h-4"/>
                            Recommened age: {food.recommendedAge}
                        </p>
                        <p className="flex items-center gap-2">
                            <Info className="w-4 h-4"/>
                            {food.description}
                        </p>
                        <p className="text-amber-600">
                            {food.allergenInfo}
                        </p>
                    </div>

                    {food.tried ? (
                        <div className="space-y-2">
                         <p className="font-semibold">Tried on: {food.dateTried}</p>
                         <Textarea
                            placeholder="Add notes about reactions or preferences."
                            value={food.notes || ''}
                            onChange={(e) => onUpdateNotes(e.target.value)}
                            className="w-full"
                            />
                        <Button
                            variant="destructive"
                            onClick={() => onUpdateStatus(false)}
                            className="w-full"
                            >
                             <X className="w-4 h-4 mr-2"/>
                             Mark as Not Tried
                        </Button>
                    </div>
                    ) : (
                        <Button
                         onClick={() => onUpdateStatus(true)}
                         className="w-full"
                         >
                            <Check className="w-4 h-4 mr-2"/>
                            Mark as tried
                         </Button>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};