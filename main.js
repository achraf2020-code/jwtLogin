const express = require('express')
const dotenv = require('dotenv')

//app required
const appRoutes = require('./routes/index')
const notFound = require('./middlewares/404')
const errorsHandler = require('./middlewares/errorsHandler')
//app config

dotenv.config()
const app = express()
const port = process.env.PORT || 3000
//app middleware
app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use('/api/v1',appRoutes)
app.use(notFound)
app.use(errorsHandler)
//app routes
app.get('wellcome to app')
//app db Connect
//app listen 
app.listen(port,()=>{
    console.log(`Server Start At Port ${port}`)
})
