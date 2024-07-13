const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const Person=require('./models/Person');

console.log("Person",Person)
app.get('/',function (req,res){
    res.send("welcome to my hotel")
})

app.post('/person',async (req,res)=>{
    try{
const data=req.body;

const newPerson=new Person(data);

const response = await newPerson.save();
console.log("data saved");
res.status(200).json(response);
    }
    catch(err){
console.log(err);
res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }

})

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("listening to port 3000")
})