import CreateQuestionController from '@Question/Controllers/CreateQuestionController';
import FindAllQuestionsController from '@Question/Controllers/FindAllQuestionsController';
import FindNextQuestionController from '@Question/Controllers/FindNextQuestionController';
import FindQuestionsByUserIdController from '@Question/Controllers/FindQuestionsByUserIdController';
import VerifyAnswerQuestionController from '@Question/Controllers/VerifyAnswerQuestionController';
import authMiddleware from '@Src/Middlewares/AuthMiddleware';
import { Router } from 'express';

const questionRoutes = Router();

questionRoutes.post('/question', authMiddleware, CreateQuestionController.handle);
questionRoutes.get('/question', authMiddleware, FindAllQuestionsController.handle);
questionRoutes.get('/nextquestion', authMiddleware, FindNextQuestionController.handle);
questionRoutes.post('/verifyanswer', authMiddleware, VerifyAnswerQuestionController.handle);
questionRoutes.get('/questionuserid', authMiddleware, FindQuestionsByUserIdController.handle);

export default questionRoutes;
