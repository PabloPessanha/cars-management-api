import { Specification } from '../model/Specification';

class SpecificationsRepository implements ISpecifications.Repository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ISpecifications.Create) {
    const specification = new Specification();
    specification.name = name;
    specification.description = description;
    specification.created_at = new Date();

    this.specifications.push(specification);

    return specification;
  }

  list() {
    return this.specifications;
  }

  findByName(name) {
    return this.specifications.some((spec) => spec.name === name);
  }
}

export { SpecificationsRepository };
