class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategories.Repository) {}

  execute({ name, description }: ICategories.Create) {
    const checkCategoryExists = this.categoriesRepository.findByName(name);

    if (checkCategoryExists) {
      throw new Error('Category already registered!');
    }

    const newCategory = this.categoriesRepository.create({ name, description });
    return newCategory;
  }
}

export { CreateCategoryUseCase };
