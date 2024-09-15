import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
var corsOptions = {
    origin: process.env.CORSE_ORIGIN,
    credentials:true
}
app.use(cors(corsOptions))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



export {app}