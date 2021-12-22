import CreateQuestionController from '@Question/Controllers/CreateQuestionController';
import FindAllQuestionsController from '@Question/Controllers/FindAllQuestionsController';
import FindQuestionsByUserIdController from '@Question/Controllers/FindQuestionsByUserIdController';
import authMiddleware from '@Src/Middlewares/AuthMiddleware';
import { Router } from 'express';

const questionRoutes = Router();

questionRoutes.post('/question', authMiddleware, CreateQuestionController.handle);
questionRoutes.get('/question', FindAllQuestionsController.handle);
questionRoutes.get('/questionuserid', authMiddleware, FindQuestionsByUserIdController.handle);

export default questionRoutes;
