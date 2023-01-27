import express from "express"
import {router} from "./router.js"


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

const app = new App(router)
app.InitApp()