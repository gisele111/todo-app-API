import { json } from 'body-parser';
import express from 'express';

const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('hello world');
});

app.listen(3000,()=>console.log('app is running on port 3000'));