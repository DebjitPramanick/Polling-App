import express from 'express'
import PollModel from '../models/PollModel.js'
import auth from '../middleware/auth.js'
import UserModel from '../models/UserModel.js'

const router = express.Router()




router.post(
    '/create',
    auth,
    async(req,res,next) => {
        try {
            console.log(req.decoded)
            const {_id} = req.decoded
            const user = await UserModel.findById(_id)

            const {question, options} = req.body
            const poll = await PollModel.create({
                user,
                question,
                options: options.map(option => ({
                    option,
                    votes: 0
                }))
            })

            user.polls.push(poll._id)
            await user.save()

            res.status(201).json({...poll._doc, user: user._id})
        
        } catch (error) {
            error.status = 400
            next(error)
        }
    }
)


router.get(
    '/',
    async (req, res, next) => {
        try {
            const polls = await PollModel.find()
            res.status(201).json(polls)
            console.log('Polls fetched.')
        } catch (error) {
            if (error.code === 11000) {
                error.message = 'Sorry, that username is already taken.'
            }
            next(error)
        }
    }
)

export default router