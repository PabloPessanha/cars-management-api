import { Router, Request, Response } from 'express';
import { categoriesRepository, createCategoriesController } from '../modules/cars/useCases/createaCategory';

const categoriesRouter = Router();

categoriesRouter.get('/', (req: Request, res: Response) => {
  const allCategories = categoriesRepository.list();
  return res.status(200).json(allCategories);
});

categoriesRouter.post('/', createCategoriesController.handle);

export { categoriesRouter };
