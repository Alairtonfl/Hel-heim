import { Router } from 'express';

import authMiddleware from '@Src/Middlewares/AuthMiddleware';
import UpdateUserStatsController from '@UserStats/Controllers/UpdateUserStatsController';

const userStatsRoutes = Router();

userStatsRoutes.put('/userStats', authMiddleware, UpdateUserStatsController.handle);

export default userStatsRoutes;