const CustomErrorsApi = require('./errors')
const  {StatusCodes}  = require('http-status-codes')
class UnauthanticatedError extends CustomErrorsApi{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}
module.exports = UnauthanticatedError