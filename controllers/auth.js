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
        const authHeader = req.headers.authorization
        if(!authHeader || !authHeader.startsWith('Bearer')){
            throw new CustomErrorsApi('Token Not Provided!',401)
        }
        const token = authHeader.split(' ')[1]
        try {
            const decode = await jwt.verify(token,process.env.JWT_SECRET)
            const luckyNumber = Math.floor(Math.random()*100)
            const {id,username} =decode
            res.status(200).json({msg:`Hello ${username},`,secret:`Your Lucky Number Is:${luckyNumber}`})
        } catch (error) {
            throw new CustomErrorsApi('Not Valid Token',401)
        }
        
    })
}