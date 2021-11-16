import { v4 as uuidV4 } from 'uuid';

class CategoriesRepository implements Categories.Repository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: Categories.Create) {
    const category: Category = {
      id: uuidV4(),
      name,
      description,
      created_at: new Date(),
    };
    this.categories.push(category);

    return category;
  }

  list() {
    return this.categories;
  }

  findByName(name) {
    return this.categories.some((category) => category.name === name);
  }
}

export { CategoriesRepository };
