const CustomErrorsApi = require('../customErrors/errors')
const  {StatusCodes}  = require('http-status-codes')
const errorsHandler = (err,req,res,next)=>{
    if( err instanceof CustomErrorsApi ){
        return res.status(err.statusCode).json({msg:err.message})
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'Somthing Went Wrong!'})
}
module.exports = errorsHandler