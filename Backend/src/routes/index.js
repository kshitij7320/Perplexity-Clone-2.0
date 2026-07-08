import {Router} from 'express'
import authRoutes from './auth.routes.js'
import chatRouter from './chat.routes.js';

export const appRouter = ()=>{
    const router = Router();

    router.use('/auth', authRoutes)
    router.use('/chats', chatRouter)
    return router
}