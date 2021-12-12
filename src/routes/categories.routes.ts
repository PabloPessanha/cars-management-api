import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategory';

const categoriesRouter = Router();

categoriesRouter.get('/', listCategoryController.handle);
categoriesRouter.post('/', createCategoryController.handle);

export { categoriesRouter };
