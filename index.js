const express=require("express")
const cors=require("cors")
const http=require("http")
const morgan=require("morgan")
const dotenv=require("dotenv")

const userRoute=require("./routes/user")

dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
const server=http.createServer(app)

app.use("/user",userRoute)

const port=process.env.PORT
server.listen(port,()=>{
    console.log(`Your Server is running on port ${port}`);
})