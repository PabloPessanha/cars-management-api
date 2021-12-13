import { CategoriesRepository } from '../../../repositories/CategoriesRepository';
import { ListCategoryUseCase } from './ListCategoryUseCase';
import { ListCategoryController } from './ListCategoryController';

const categoriesRepository = CategoriesRepository.getInstace();
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
