/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';
import { fetchRecipeById, fetchRecipes } from '../services/recipesService';
import { Recipe } from '../types/recipe';

export const getRecipes = async (req: Request, res: Response, next: NextFunction) => {
    const ingredient = req.query.ingredient as string | undefined;
    const country = req.query.country as string | undefined;
    const category = req.query.category as string | undefined;

    try {
        const recipes = await fetchRecipes(ingredient, country, category);
        res.json(recipes);
    } catch (error) {
        next(error);
    }
};

export const getRecipeById = async (req: Request, res: any, next: NextFunction): Promise<any> => {
  const { id } = req.params;

  try {
      const recipe: Recipe | null = await fetchRecipeById(id);
      if (!recipe) {
          return res.status(404).json({ error: 'Recipe not found' });
      }
      return res.json(recipe);
  } catch (error) {
      next(error)
  }
};