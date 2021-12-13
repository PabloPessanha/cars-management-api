import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/categories/createCategory';
import { listCategoryController } from '../modules/cars/useCases/categories/listCategory';

const categoriesRouter = Router();

categoriesRouter.get('/', listCategoryController.handle);
categoriesRouter.post('/', createCategoryController.handle);

export { categoriesRouter };
