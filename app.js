require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const db = require('./models')

const boardRouter = require('./routes/board-router')
const userRouter = require('./routes/user-router')

app.listen(3000, () => {
	console.log('http://127.0.0.1:3000')
})



app.use('/board', boardRouter)
app.use('/user', userRouter)

app.use((err, req, res, next) => {
	console.log(err)
})