const express = require('express')

const connection = require('./helpers/config/config')
const { routerMovies, authRouter } = require('./routers/All.routes')
const { TvData, importData } = require('./sendData/sendData')


const app = express()

TvData()
importData()

connection()
app.use(express.json())

app.use(routerMovies ,authRouter)



const port = process.env.PORT
app.listen(port || 5000, () => console.log(`Example app listening on port ${port}!`))