import { SpecificationsRepository } from '../../../repositories/SpecificationsRepository';
import { ListSpecificationController } from './ListSpecificationController';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

const specificationRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new ListSpecificationUseCase(specificationRepository);
const createSpecificationController = new ListSpecificationController(createSpecificationUseCase);

export { createSpecificationController };
