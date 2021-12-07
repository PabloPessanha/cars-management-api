declare namespace ISpecifications {
  type Specification = import('../../modules/cars/model/Specification');
  interface Repository {
    findByName(name: string): boolean;
    list(): Category[];
    create({ name, description }: ISpecifications.Create): Specification;
  }
}
