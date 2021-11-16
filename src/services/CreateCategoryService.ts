import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest) {
    const checkCategoryExists = this.categoriesRepository.findByName(name);

    if (checkCategoryExists) {
      throw new Error('Category alread registered!');
    }

    const newCategory = this.categoriesRepository.create({ name, description });
    return newCategory;
  }
}

export { CreateCategoryService };
