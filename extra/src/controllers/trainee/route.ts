//import { Router } from 'express';
import * as express from 'express'
import { default as TraineeController } from './controller';
import { default as validation } from './validation';
import{  validationHandler} from '../../libs';
import {default as authMiddleWare} from '../../libs/routes/authMiddleWare';

//const traineeRouter = new Route();


const traineeRouter =   express.Router();


traineeRouter.route('/').get(authMiddleWare('trainee','all'),TraineeController.get)
                         .post( validationHandler(validation.create),TraineeController.create)
                         .put(validationHandler(validation.update),TraineeController.update)
                         .delete(validationHandler(validation.delete),TraineeController.delete);


export default traineeRouter;