import { Router, Request, Response } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.get('/', (req: Request, res: Response) => {
  const allCategories = categoriesRepository.list();
  return res.status(200).json(allCategories);
});

categoriesRouter.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body;
  const categoriesService = new CreateCategoryService(categoriesRepository);

  const newCategory = categoriesService.execute({ name, description });
  return res.status(201).json(newCategory);
});

export { categoriesRouter };
