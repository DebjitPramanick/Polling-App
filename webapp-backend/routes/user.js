import express from 'express'
import UserModel from '../models/UserModel.js'
import PollModel from '../models/PollModel.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get(
    '/user',
    auth,
    async (req, res, next) => {
        try {
            const { _id } = req.decoded
            const user = await UserModel.findById(_id)
            .populate('polls')
            res.status(200).json(user.polls);
            console.log("Found the polls.")

        } catch (error) {
            error.status = 400;
            next(error)
        }
    }
)


export default router