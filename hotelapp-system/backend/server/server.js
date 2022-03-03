import express from 'express'
import cors from 'cors'
import hotels from './routes/hotelRoutes.js'
import http from 'http'
import dotenv from 'dotenv'


const app = express()
dotenv.config()
const port = process.env.PORT || 3000
const server = http.createServer(app)


app.use(cors())
app.use(express.json())
app.use(express.json({limit:"8000mb",extended:true}))
app.use(express.urlencoded({limit:"8000mb",extended:true}))

app.use("/api/v1/hotels",hotels)
app.use("*",(req,res)=>res.status(404).json({error:"not found"}))

server.listen(port,()=>{
    console.log(`Connected to port ${port}`)
}
)
export default app

