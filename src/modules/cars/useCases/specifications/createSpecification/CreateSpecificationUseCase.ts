class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecifications.Repository) {}

  execute({ name, description }: ISpecifications.Create) {
    const checkSpecificationExists = this.specificationRepository.findByName(name);

    if (checkSpecificationExists) {
      throw new Error('Specification already registered!');
    }

    const newSpecification = this.specificationRepository.create({ name, description });
    return newSpecification;
  }
}

export { CreateSpecificationUseCase };
