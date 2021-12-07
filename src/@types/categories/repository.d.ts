declare namespace ICategories {
  interface Repository {
    findByName(name: string): boolean;
    list(): Category[];
    create({ name, description }: Categories.Create): Category;
  }
}
