import { Router } from 'express';
import { listSpecificationController } from '../modules/cars/useCases/specifications/listSpecification';
import { createSpecificationController } from '../modules/cars/useCases/specifications/createSpecification';

const specificationsRouter = Router();

specificationsRouter.get('/', listSpecificationController.handle);
specificationsRouter.post('/', createSpecificationController.handle);

export { specificationsRouter };
