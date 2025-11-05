const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

console.log('JWT_SECRET:', process.env.JWT_SECRET);
console.log('JWT_EXPIRES_IN:', process.env.JWT_EXPIRES_IN);

const User = require('../models/User');
const isEduEmail = (email) =>{ return email.toLowerCase().endsWith('.edu');}

router.post('/signup',async (req,res)  =>{
   
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({error:'Email and Password are required.'});
    }
    
    
    if(!isEduEmail(email)){
        return res.status(400).json({error:'Email has to be .edu'});
    }
    const existingUser = User.findOne({email:email.toLowerCase()});
    if(existingUser){
        return res.status(409).json({error:'User Already Exists Sign in Please.'});
    }
    const passwordHash = await bcrypt.hash(password,10);
    const user = await User.create({
        email: email.toLowerCase(),
        password: passwordHash
    })
 
    const token = jwt.sign(
        {sub:user._id.toString() , email:user.email},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_IN}
        
    )
   
    res.status(201).json({message:"User created",token})
    if (err.code === 11000) {
         return res.status(409).json({ error: 'User already exists' });
        }



})

router.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({error:"Email and password requried."});
    }
    const user = await User.findOne({email: email.toLowerCase()});
    if(!user){
        return res.status(400).json({error:"invalid credentials"})
    }
    const match = await bcrypt.compare(password,user.password);
    
    if(!match){
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
        {sub: user.id, email: user.email },
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_IN}
    )
    res.status(200).json({message:"Login Successful", token});

})


module.exports= router;