import { Router, Request, Response } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryUseCase } from '../modules/cars/useCases/createaCategory/CreateCategoryUseCase';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.get('/', (req: Request, res: Response) => {
  const allCategories = categoriesRepository.list();
  return res.status(200).json(allCategories);
});

categoriesRouter.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body;
  const categoriesService = new CreateCategoryUseCase(categoriesRepository);

  const newCategory = categoriesService.execute({ name, description });
  return res.status(201).json(newCategory);
});

export { categoriesRouter };
