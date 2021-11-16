class CreateCategoryService {
  constructor(private categoriesRepository: Categories.Repository) {}

  execute({ name, description }: Categories.Create) {
    const checkCategoryExists = this.categoriesRepository.findByName(name);

    if (checkCategoryExists) {
      throw new Error('Category alread registered!');
    }

    const newCategory = this.categoriesRepository.create({ name, description });
    return newCategory;
  }
}

export { CreateCategoryService };
