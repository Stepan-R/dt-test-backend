import { Router } from 'express';
import { getRecipeById, getRecipes } from '../controllers/recipesController';

const router = Router();

router.get('/', getRecipes);

router.get('/:id', getRecipeById);

export default router;