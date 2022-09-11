const express = require('express')
const app = express()
const port = process.env.BACKEND_PORT || 5000
const router = require('./routes')
const cors = require("cors");

app.use(express.json())
// npm install cors -D
app.use(cors())

app.use('/', router)

//sist

app.listen(port, () => {
    console.log(`Express is listening on port ${port}!`)
})


