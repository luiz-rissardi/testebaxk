import express from "express"
import routers from "./router"


class App {
    app
    constructor(routes) {
        this.app = express()
        this.app.use("/api", routes)
    }

    InitApp() {
        this.app.listen(3000, () => {
            console.log("rodando")
        })
    }
}

const app = new App(routers)
app.InitApp()