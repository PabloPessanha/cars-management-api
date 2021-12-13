import { CategoriesRepository } from '../../../repositories/CategoriesRepository';
import { CreateCategoryController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const categoriesRepository = CategoriesRepository.getInstace();
const createCategoryUseCase = new CreateSpecificationUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };
