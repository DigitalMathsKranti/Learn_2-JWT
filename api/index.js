const express =require('express');
const jwt =require('jsonwebtoken')
const app=express()

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

app.post("/api/login",(req,res)=>{
    const {userName,password}=req.body;
})

app.listen(5000,()=>{console.log("Backande server is running on 5000 port")});
