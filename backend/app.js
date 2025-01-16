import express from 'express';
import "dotenv/config"
import "./src/db/db.js"
import cors from 'cors'
import productRouter from './src/rout/pRouter.js';
const port = process.env.PORT ||5001

const app = express()
app.use(express.json())
app.use(cors())
app.use("/product", productRouter)

app.get("/", (req, res)=>{
    res.send("Salam")
})

app.listen(port, ()=>{
    console.log(port);
})