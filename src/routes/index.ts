import  express from 'express';
import {createController} from "../controllers/todo.controller";

const router = express.Router();

router.post('/create',createController);
export default router;
