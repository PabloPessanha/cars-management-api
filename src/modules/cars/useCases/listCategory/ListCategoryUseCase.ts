class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategories.Repository) {}

  execute() {
    const allCategories = this.categoriesRepository.list();

    return allCategories;
  }
}

export { ListCategoryUseCase };
