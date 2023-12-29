import  express from 'express';
import {createController, getAllData} from "../controllers/todo.controller";

const router = express.Router();

router.post('/create',createController);
router.get('/get',getAllData);

export default router;

