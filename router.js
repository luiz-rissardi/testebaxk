const router = require("express").Router()

router.get("/",(req,res)=>{
    let date  =new Date()
    res.json({
        date
    })
})

export {router}
