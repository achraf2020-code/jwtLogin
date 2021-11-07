const CustomErrorsApi = require('./errors')
const  {StatusCodes}  = require('http-status-codes')
class BadRequetError extends CustomErrorsApi{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}
module.exports = BadRequetError