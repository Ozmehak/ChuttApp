const userRouter = require('express').Router()

userRouter.get('/', (req, res) => {
    res.send(['Calle', 'Anna'])
})

module.exports = userRouter
