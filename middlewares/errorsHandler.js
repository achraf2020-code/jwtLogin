const CustomErrorsApi = require('../customErrors/errors')
const errorsHandler = (err,req,res,next)=>{
    if( err instanceof CustomErrorsApi ){
        return res.status(err.statusCode).json({msg:err.message})
    }
    res.json(500).res.json({msg:'Somthing Went Wrong!'})
}
module.exports = errorsHandler