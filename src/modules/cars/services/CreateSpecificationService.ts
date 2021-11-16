class CreateSpecificationService {
  constructor(private specificationRepository: Specifications.Repository) {}

  execute({ name, description }: Categories.Create) {
    const checkSpecExists = this.specificationRepository.findByName(name);

    if (checkSpecExists) {
      throw new Error('Specification already registered!');
    }

    const newSpecification = this.specificationRepository.create({ name, description });
    return newSpecification;
  }
}

export { CreateSpecificationService };
