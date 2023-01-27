import { Router  } from "express"

const router = Router()

router.get("/",(req,res)=>{
    let date  =new Date()
    res.json({
        date
    })
})

export {router}
