import axios from 'axios';
import { Recipe } from '../types/recipe';

const MEALDB_API_URL = process.env.MEALDB_API_URL;

export const fetchRecipes = async (ingredient?: string, country?: string, category?: string) => {
    let url = `${MEALDB_API_URL}/search.php?s=`;

    if (ingredient) {
        url = `${MEALDB_API_URL}/filter.php?i=${ingredient}`;
    } else if (country) {
        url = `${MEALDB_API_URL}/filter.php?a=${country}`;
    } else if (category) {
        url = `${MEALDB_API_URL}/filter.php?c=${category}`;
    }

    const response = await axios.get(url);
    return response.data;
};

export const fetchRecipeById = async (id: string): Promise<Recipe | null> => {
  const response = await axios.get(`${MEALDB_API_URL}/lookup.php?i=${id}`);
  return response.data.meals ? response.data.meals[0] : null;
};