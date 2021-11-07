const notFound = (req,res)=>{
    res.status(404).send('Error 404 This Route Not Exist!')
}
module.exports = notFound