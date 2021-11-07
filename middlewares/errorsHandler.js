const CustomErrorsApi = require('../customErrors/errors')
const errorsHandler = (err,req,res,next)=>{
    if( err instanceof CustomErrorsApi ){
        return res.status(err.statusCode).json({msg:err.message})
    }
    res.status(500).json({msg:'Somthing Went Wrong!'})
}
module.exports = errorsHandler