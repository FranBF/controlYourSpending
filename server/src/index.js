import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/userRoutes.js'
import subRouter from './routes/subRoutes.js'
import dotenv from 'dotenv'

const app = express()
const PORT = 3000
const DB_URI = 'mongodb+srv://FranDB:2xTYsYCxJnSD7u6m@franscluster.9v62tw8.mongodb.net/?retryWrites=true&w=majority'
dotenv.config()

app.use(cors({ credentials: true, origin: true }))
app.use(cookieParser())
app.use(express.json())

app.use('/api', userRouter)
app.use('/api', subRouter)

app.get('/', (req, res) => {
  res.send('ping pong fuera')
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})

const connect = async () => {
  try {
    await mongoose.connect(DB_URI)
    console.log('DB connected')
  } catch (error) {
    console.log(error)
  }
}

connect().then(() => console.log('funciona')).catch(err => console.log(err))
