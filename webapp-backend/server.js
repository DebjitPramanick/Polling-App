import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'
import pollRouter from './routes/poll.js'
import userRouter from './routes/user.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 8000
app.listen(port , ()=>console.log(`Server is running at ${port}.....`))
app.get('/', (req,res) => res.send("Hurray server is running..."))


// DB Config

const connecttionURL = process.env.URL
mongoose.connect( connecttionURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// Routes

app.use('/api/auth',authRouter);
app.use('/api/users', userRouter);
app.use('/api/polls', pollRouter);


