import { Request,Response } from 'express';
import {createToDo} from '../services/todo.service';

const createController = async (req:Request,res:Response)=>{
    const {title,description,iscompleted} = req.body;
    try {
    const data =  await createToDo(title,description,iscompleted);
    res.status(201).json({message:'data sent succusfully',data})
    } catch (error) {
        console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
    }
}
export {
    createController,
}
