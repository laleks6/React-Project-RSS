export type Recipe = {
  caloriesPerServing: number;
  cookTimeMinutes: number;
  cuisine: string;
  difficulty: string;
  id: number;
  image: string;
  ingredients: Record<number, string>[];
  instructions: Record<number, string>[];
  mealType: Record<number, string>[];
  name: string;
  prepTimeMinutes: number;
  rating: number;
  reviewCount: number;
  servings: number;
  tags: Record<number, string>[];
  userId: number;
};
export type Recipes = Record<number, Recipe>;
export type Data = {
  limit: number;
  recipes: Recipe[];
  skip: number;
  total: number;
};
