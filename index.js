const express = require("express")
const routers = require("./router")


class App {
    app
    constructor(routes) {
        this.app = express()
        this.app.use("/api", routes)
    }

    InitApp() {
        this.app.get("/",(req,res)=>{
            res.send("ola mundo")
        })
        this.app.listen(process.env.PORT || 3000, () => {
            console.log("rodando")
        })
    }
}

const app = new App(routers)
app.InitApp()