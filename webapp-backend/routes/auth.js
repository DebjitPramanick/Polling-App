import express from 'express'
import jwt from 'jsonwebtoken'
import UserModel from '../models/UserModel.js'

const router = express.Router()

router.post(
    '/register',
    async(req,res,next)=>{
        try {
            const user = await UserModel.create(req.body)
            const {_id,username} = user
            const token = jwt.sign({_id,username}, process.env.SECRET)
            res.status(201).json({_id,username,token})
        } catch (error) {
            if(error.code === 11000){
                error.message = 'Sorry, that username is already taken.'
            }
            next(error)
        }
    }
)

router.post(
    '/login',
    async(req, res, next) => {
        try {
            const user = await UserModel.findOne({username: req.body.username})
            const {_id,username} = user
            const valid = await user.comparePassword(req.body.password)

            if(valid){
                const token = jwt.sign({ _id, username }, process.env.SECRET)
                res.json({_id,username,token})
                console.log("User logged in.")
            }
            else{
                res.status(400).send("Invalid username and password.")
                console.log("Invalid password.")
            }
        } catch (error) {
            res.status(400).send("Invalid username and password.")
        }
    }
)



export default router