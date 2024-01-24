require('dotenv').config()
require('express-async-errors')
//express
const express = require('express')
const app = express()
//rest of the packages
const morgan = require('morgan')
//database
const connectDB = require('./db/connect')
const port = process.env.PORT || 8000

//middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//Routes
const router = require('./routes/crypt')
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend URL
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.static('./public'))

app.use('/', router)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server is listening to port ${port}`)
    })
  } catch (error) {
    console.log(error)
    console.log('could not connect to server')
  }
}

start()
