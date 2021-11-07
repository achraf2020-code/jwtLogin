const CustomErrorsApi = require('../customErrors/errors')
const {UnauthanticatedError} = require('../customErrors')
const jwt = require('jsonwebtoken')
const authMiddleware = async (req,res,next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new CustomErrorsApi('Token Not Provided!',401)
    }
    const token = authHeader.split(' ')[1]
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const {id,username} = decode
        req.user = {id,username}
        next()
    } catch (error) {
        throw new UnauthanticatedError('unauthorized access to this route')
    }
  
}
module.exports = authMiddleware