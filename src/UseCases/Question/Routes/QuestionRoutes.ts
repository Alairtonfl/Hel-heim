import CreateQuestionController from '@Question/Controllers/CreateQuestionController';
import FindAllQuestionsController from '@Question/Controllers/FindAllQuestionsController';
import { Router } from 'express';

const questionRoutes = Router();

questionRoutes.post('/question', CreateQuestionController.handle);
questionRoutes.get('/question', FindAllQuestionsController.handle);

export default questionRoutes;
