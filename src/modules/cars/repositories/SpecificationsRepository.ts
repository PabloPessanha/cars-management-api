import { v4 as uuidV4 } from 'uuid';

class SpecificationsRepository implements Specifications.Repository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: Specifications.Create) {
    const specification: Specification = {
      id: uuidV4(),
      name,
      description,
      created_at: new Date(),
    };
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
