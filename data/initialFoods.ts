import { FoodItem } from "../types";
import { getImageUrl } from '../utils/imageUtils'

// data/initialFoods.ts
export const InitialFoods: FoodItem[] = [
  // Fruits
  {
    id: 1,
    name: "Avocado",
    imageUrl: getImageUrl("avocado"),
    description: "Creamy, nutrient-rich fruit perfect for first foods. High in healthy fats and fiber.",
    recommendedAge: "6+ months",
    allergenInfo: "Low allergy risk",
    tried: false
  },
  {
    id: 2,
    name: "Banana",
    imageUrl: getImageUrl("banana"),
    description: "Naturally sweet, easy to mash. Rich in potassium and vitamin B6.",
    recommendedAge: "6+ months",
    allergenInfo: "Low allergy risk",
    tried: false
  },
  {
    id: 3,
    name: "Pear",
    imageUrl: getImageUrl("pear"),
    description: "Gentle on digestion, can help with constipation. Good source of fiber.",
    recommendedAge: "6+ months",
    allergenInfo: "Low allergy risk",
    tried: false
  },
  {
    id: 4,
    name: "Apple (Cooked)",
    imageUrl: getImageUrl("apple"),
    description: "Steam or cook until soft. Rich in fiber and vitamin C.",
    recommendedAge: "6+ months",
    allergenInfo: "Low allergy risk",
    tried: false
  },

  // Vegetables
  {
    id: 5,
    name: "Sweet Potato",
    imageUrl: getImageUrl("sweet-potato"),
    description: "Natural sweetness, packed with vitamin A and beta-carotene.",
    recommendedAge: "6+ months",
    allergenInfo: "Low allergy risk",
    tried: false
  },
  {
    id: 6,
    name: "Carrots",
    imageUrl: getImageUrl("carrot"),
    description: "Cook until very soft. Rich in vitamin A and beta-carotene.",
    recommendedAge: "6+ months",
    allergenInfo: "Low allergy risk",
    tried: false
  },
  {
    id: 7,
    name: "Green Peas",
    imageUrl: "/api/placeholder/150/150",
    description: "Mild flavor, good source of protein and iron.",
    recommendedAge: "6+ months",
    allergenInfo: "Low allergy risk",
    tried: false
  },
  {
    id: 8,
    name: "Butternut Squash",
    imageUrl: "/api/placeholder/150/150",
    description: "Natural sweetness, smooth texture. High in vitamins A and C.",
    recommendedAge: "6+ months",
    allergenInfo: "Low allergy risk",
    tried: false
  },

  // Grains
  {
    id: 9,
    name: "Oatmeal",
    imageUrl: "/api/placeholder/150/150",
    description: "Iron-fortified, smooth texture. Good source of fiber.",
    recommendedAge: "6+ months",
    allergenInfo: "Introduce gradually to check for gluten sensitivity",
    tried: false
  },
  {
    id: 10,
    name: "Rice Cereal",
    imageUrl: "/api/placeholder/150/150",
    description: "Traditional first food, iron-fortified.",
    recommendedAge: "6+ months",
    allergenInfo: "Low allergy risk",
    tried: false
  },

  // Proteins
  {
    id: 11,
    name: "Eggs",
    imageUrl: "/api/placeholder/150/150",
    description: "Excellent source of protein and healthy fats. Well-cooked only.",
    recommendedAge: "6+ months",
    allergenInfo: "Common allergen - introduce carefully and monitor",
    tried: false
  },
  {
    id: 12,
    name: "Lentils",
    imageUrl: "/api/placeholder/150/150",
    description: "High in iron and protein. Cook until very soft.",
    recommendedAge: "6-8 months",
    allergenInfo: "Low allergy risk",
    tried: false
  },
  {
    id: 13,
    name: "Greek Yogurt",
    imageUrl: "/api/placeholder/150/150",
    description: "Rich in protein and calcium. Choose plain, full-fat varieties.",
    recommendedAge: "6+ months",
    allergenInfo: "Contains dairy - introduce carefully",
    tried: false
  },

  // More Vegetables
  {
    id: 14,
    name: "Green Beans",
    imageUrl: "/api/placeholder/150/150",
    description: "Mild flavor, good source of vitamins. Steam until very soft.",
    recommendedAge: "6+ months",
    allergenInfo: "Low allergy risk",
    tried: false
  },
  {
    id: 15,
    name: "Spinach",
    imageUrl: "/api/placeholder/150/150",
    description: "Iron-rich leafy green. Cook well and puree smooth.",
    recommendedAge: "6-8 months",
    allergenInfo: "Low allergy risk",
    tried: false
  },

  // More Fruits
  {
    id: 16,
    name: "Mango",
    imageUrl: "/api/placeholder/150/150",
    description: "Sweet tropical fruit rich in vitamins A and C.",
    recommendedAge: "6+ months",
    allergenInfo: "Low allergy risk",
    tried: false
  },
  {
    id: 17,
    name: "Peach",
    imageUrl: "/api/placeholder/150/150",
    description: "Soft texture when ripe, rich in vitamins. Cook if needed.",
    recommendedAge: "6+ months",
    allergenInfo: "Low allergy risk",
    tried: false
  },

  // Additional Proteins
  {
    id: 18,
    name: "Chicken",
    imageUrl: "/api/placeholder/150/150",
    description: "Excellent source of protein and iron. Puree well with liquid.",
    recommendedAge: "7-8 months",
    allergenInfo: "Low allergy risk",
    tried: false
  },
  {
    id: 19,
    name: "White Fish",
    imageUrl: "/api/placeholder/150/150",
    description: "Mild flavor, good source of protein. Remove all bones carefully.",
    recommendedAge: "7-8 months",
    allergenInfo: "Common allergen - introduce carefully",
    tried: false
  },
  {
    id: 20,
    name: "Tofu",
    imageUrl: "/api/placeholder/150/150",
    description: "Soft texture, rich in protein. Choose firm variety and cook well.",
    recommendedAge: "6+ months",
    allergenInfo: "Soy is a common allergen - introduce carefully",
    tried: false
  }
];