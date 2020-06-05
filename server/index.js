require("dotenv").config()
const massive = require("massive")
const express = require("express")
const app = express()
const ctrl = require("./controller")

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())
    
massive({
        connectionString: CONNECTION_STRING,
        ssl: {rejectUnauthorized: false}
    })
    .then(db => {
        app.set("db", db)
        console.log("db connected")
        app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
    })
    .catch(err => console.log(err))
