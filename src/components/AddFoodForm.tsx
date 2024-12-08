import React from "react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { FoodItem } from "types";

type NewFoodData = Omit<FoodItem, 'id' | 'tried'>;

interface AddFoodFormProps {
    onAddFood: (newFood: NewFoodData) => void;
  }


  export const AddFoodForm: React.FC<AddFoodFormProps> = ({ onAddFood }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const form = useForm<NewFoodData>({
        defaultValues: {
            name: '',
            description: '',
            recommendedAge: '',
            allergenInfo: '',
            imageUrl: '/api/placeholder/150/150',
        }
    })

    const onSubmit = (data: NewFoodData) => {
        onAddFood(data);
        form.reset();
        setIsOpen(false);
      };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="w-full h-full min-h-[12rem] flex flex-col gap-2 items-center justify-center">
                    <Plus size={24} />
                    <span>Add New Food</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Food</DialogTitle>
                    <DialogDescription>
                        Add a new food to track in your baby&apos;s food journey
                    </DialogDescription>
                </DialogHeader>


                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Food Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Sweet Potato" { ...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the name of the food you want to track
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                    />
                        <FormField 
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea 
                                        placeholder="Soft nutrient-rich vegetable, perfect for first foods."
                                        {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Describe the food and related benefits to babies.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField 
                            control={form.control}
                            name="recommendedAge"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Recommended Age</FormLabel>
                                    <FormControl>
                                        <Input placeholder="6+ months" {...field}/>
                                    </FormControl>
                                    <FormDescription>
                                        When can babies typically start eating this food?
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField 
                            control={form.control}
                            name="allergenInfo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Allergen Information</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Low allergy risk" {...field}/>
                                    </FormControl>
                                    <FormDescription>
                                        Include any allergy related information.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                        <FormField 
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>imageUrl</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Image URL" {...field}/>
                                    </FormControl>
                                    <FormDescription>
                                        Provide a url for an image of the food.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        
                        <Button type="submit">Add Food</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}