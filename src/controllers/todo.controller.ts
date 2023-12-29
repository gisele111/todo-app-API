import { Request,Response } from 'express';
import {createToDo,getAll} from '../services/todo.service';

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

const getAllData = async(req:Request,res:Response)=>{
    const allData  = await getAll();
    res.status(200).json({data:allData});
}



export {
    createController,
    getAllData
}
