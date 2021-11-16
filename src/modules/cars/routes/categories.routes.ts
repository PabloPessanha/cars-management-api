import { Router, Request, Response } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoute = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoute.get('/categories', (req: Request, res: Response) => {
  const allCategories = categoriesRepository.list();
  return res.status(200).json(allCategories);
});

categoriesRoute.post('/categories', (req: Request, res: Response) => {
  const { name, description } = req.body;
  const categoriesService = new CreateCategoryService(categoriesRepository);

  const newCategory = categoriesService.execute({ name, description });
  return res.status(201).json(newCategory);
});

export default categoriesRoute;
