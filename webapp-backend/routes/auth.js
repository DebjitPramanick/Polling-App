import express from 'express'

import UserModel from '../models/UserModel.js'

const router = express.Router()

router.post(
    '/register',
    async(req,res,next)=>{
        try {
            const user = await UserModel.create(req.body)
            const {_id,username} = user
            res.json({_id,username})
        } catch (error) {
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
                res.json({_id,username})
                console.log("User logged in.")
            }
            else{
                res.send("Invalid username and password.")
                console.log("Invalid password.")
            }
        } catch (error) {}
    }
)



export default router