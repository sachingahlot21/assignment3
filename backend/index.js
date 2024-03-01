const express = require('express')
const {connectToMongoDB} = require('./connection')
const app = express()
const cors = require('cors')
const PORT = 8000
const empRoute = require('./routes/index')
app.use(cors())
connectToMongoDB('mongodb://127.0.0.1:27017/empmanage')
.then(()=> console.log("mongodb connected"))
.catch((err) => console.log("error..." , err))


app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use('/emp' , empRoute)

app.listen(PORT , () => console.log("APP STARTED AT PORT : " , PORT))