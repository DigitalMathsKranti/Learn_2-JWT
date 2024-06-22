const express =require('express');
const jwt =require('jsonwebtoken')
const app=express()
app.use(express.json)

const users=[
    {
        id:1,
        userName:"Ram",
        password:"Ram@123",
        isAdmin:true
    },
    {
        id:2,
        userName:"Sonu",
        password:"Sonu@123",
        isAdmin:false
    }
];
app.get("/api/login",(req,res)=>{
    console.log("hi...........")
    res.json('hi')
});

app.listen(5000,()=>{console.log("Backande server is running on 5000 port")});
