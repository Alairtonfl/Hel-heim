import CreateQuestionController from '@Question/Controllers/CreateQuestionController';
import FindAllQuestionsController from '@Question/Controllers/FindAllQuestionsController';
import FindQuestionsByUserIdController from '@Question/Controllers/FindQuestionsByUserIdController';
import { Router } from 'express';
import authMiddleware from 'src/Middlewares/AuthMiddleware';

const questionRoutes = Router();

questionRoutes.post('/question', authMiddleware, CreateQuestionController.handle);
questionRoutes.get('/question', FindAllQuestionsController.handle);
questionRoutes.get('/questionuserid', authMiddleware, FindQuestionsByUserIdController.handle);

export default questionRoutes;
