import  express from 'express';
import {createController, getAllData, single} from "../controllers/todo.controller";

const router = express.Router();

router.post('/create',createController);
router.get('/get',getAllData);
router.get('/get/:id',single);
export default router;

