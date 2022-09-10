const express = require('express')
const app = express()
const port = process.env.BACKEND_PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Express is listening on port ${port}!`)
})