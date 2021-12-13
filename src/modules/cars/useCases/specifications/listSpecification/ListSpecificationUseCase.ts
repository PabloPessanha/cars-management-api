class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecifications.Repository) {}

  execute() {
    const allSpecifications = this.specificationRepository.list();

    return allSpecifications;
  }
}

export { ListSpecificationUseCase };
