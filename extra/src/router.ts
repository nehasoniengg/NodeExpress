import { Router } from 'Express';
import {default as TraineeController} from './controllers/trainee/controller';
import { traineeRouter } from './controllers/trainee';
export const router: Router = Router();
 
router.use('/trainee', traineeRouter);

export default router;
