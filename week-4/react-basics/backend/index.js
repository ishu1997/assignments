const express = require('express');
const {createTodo,updateTodo} = require('./type');
const cors = require('cors');
const {Todo} = require('./db');


const app = express();

app.use(express.json());

app.use(cors());
const PORT=3000;



app.get('/todos',async function(req,res){


    const response = await Todo.find({});

    res.status(200).json({
        todos: response
    })

});

app.post('/todo',async function(req,res){

   const createPayload = req.body;
   const parsedPayload = createTodo.safeParse(createPayload);
   
   if(!parsedPayload.success){
     res.status(411).json(
        {
            msg: 'wrong input'
        }
    );
    return;
   }

   // put it in mongoDB

    await Todo.create({
        title: createPayload.title,
        description:createPayload.description,
        completed:false
    })

    res.json({
        msg:'todo added'
    })

    
});

app.put('/completed',async function(req,res){
    
    const updatePayload = req.body;
   const parsedPayload = updateTodo.safeParse(updatePayload);
   
   if(!parsedPayload.success){
     res.json(
        {
            msg: 'wrong input'
        }
    );
    return;
   }

   // update in mongo

   await Todo.updateOne({
    _id:updatePayload.id
   },{
    completed:true
   })

   res.json({
    msg:'todo marked as completed'
   })

});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});