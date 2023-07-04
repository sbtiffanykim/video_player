import express from 'express';
import { remove, edit, seeProfile, logout } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/:id', seeProfile);
userRouter.get('/edit', edit);
userRouter.get('/delete', remove);
userRouter.get('/logout', logout);

export default userRouter;
