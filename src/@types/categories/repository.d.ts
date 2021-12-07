declare namespace ICategories {
  type Category = import('../../modules/cars/model/Category');
  interface Repository {
    findByName(name: string): boolean;
    list(): Category[];
    create({ name, description }: Categories.Create): Category;
  }
}
