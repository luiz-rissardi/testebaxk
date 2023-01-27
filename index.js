const express  = require("express")
const router = express.Router()

const app = express()

router.get("/",(req,res)=>{
    let date  =new Date()
    res.json({
        date
    })
})

app.use("/api",router)

app.listen(3000,()=>{
    console.log("rodando")
})