import CreateQuestionController from '@Question/Controllers/CreateQuestionController';
import { Router } from 'express';

const questionRoutes = Router();

questionRoutes.post('/question', CreateQuestionController.handle);
