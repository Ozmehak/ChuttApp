const express = require('express')
const userRouter = require("./userRouter");
const router = express.Router()
const uuid = require('node:crypto').randomUUID

const messages = [{
    id: uuid(),
    text: "My first message",
    userId: 'fdkldfjh',
    timestamp: new Date().toISOString()
}]

router.get('/', (req, res) => {
    res.send(messages)
})

router.post('/', (req, res) => {
    // Create a new message object from req.body

    // Push object on to array
    if (!req.body.text || !req.body.userId) {
        // !text => Check that text is not a falsy value: null, undefined, false, 0
        // text != null => Check that text is not a nullish value: null, undefined
        // TODO: Expand this to not accept non-string values or empty strings
        // !text || typeof text !== 'string' || text.trim().length() === 0
        // TODO: When/if you have users, check that userId exists
        // TODO: When/if you have authentication, check that the authenticated user matches the user ID
        //   OR just fetch user ID from auth data
        return res.status(406).send('must contain userId and text')
    }

    const message = {
        id: uuid(),
        text: req.body.text,
        userId: req.body.userId,
        timestamp: new Date().toISOString()
    }
    messages.push(message)

    res.sendStatus(204)
})

const roomRouter = express.Router()

roomRouter.get('/', (req, res) => {
    res.send(['Public', 'Off-topic'])
})
router.use('/users', userRouter)
router.use('/rooms', roomRouter)


module.exports = router
