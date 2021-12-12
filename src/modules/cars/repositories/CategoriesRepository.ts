import { Category } from '../model/Category';

class CategoriesRepository implements ICategories.Repository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICategories.Create) {
    const category = new Category();
    category.name = name;
    category.description = description;
    category.created_at = new Date();

    this.categories.push(category);

    return category;
  }

  list() {
    return this.categories;
  }

  findByName(name: string) {
    return this.categories.some((category) => category.name === name);
  }
}

export { CategoriesRepository };
