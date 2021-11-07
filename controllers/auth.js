require('express-async-errors');
const asyncWrapper = require('../middlewares/asyncWrapper')
const jwt = require('jsonwebtoken')
const CustomErrorsApi = require('../customErrors/errors')

module.exports={
    getLogin:asyncWrapper(async(req,res,next)=>{
        res.redirect('/login.html')
    }),
    login:asyncWrapper(async(req,res,next)=>{
        const {username,password} = req.body
        if(!username || !password){
          throw new CustomErrorsApi('Please Provide Username And Password!',400)
        }
        const id = new Date().getDate()
        const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'3d'})
        res.status(200).json({msg:'You Get the Token',token})

    }),
    dashboard:asyncWrapper(async (req,res,next)=>{
        const luckyNumber = Math.floor(Math.random()*100)        
        res.status(200).json({msg:`Hello ${req.user.username},`,secret:`Your Lucky Number Is:${luckyNumber}`})
        
    })
}