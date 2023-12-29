import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const createToDo = async (title:string,description:string,iscompleted:boolean) =>{
    const createdData = await prisma.todo.create({
       data:{
       
        title,
        description,
        iscompleted
       } 
    });
    return createdData
}



 const getAll = async()=> {
    const allList = await prisma.todo.findMany();
    return allList;
 }

 const getSingletask = async(singleId:number)=>{
   const singletask = await prisma.todo.findUnique({
       where:{id:singleId}
   });
   return singletask
   }

 export {
    createToDo,
    getAll,
    getSingletask
 };



