import { Router } from "express";
import Io from '../helper/Io.js'
import users from 'D:/beckend/15/db/users.json'
import {tokenHelper} from '../utils/token.js'

const writer = new Io('D:/beckend/15/db/users.json')

const authRoute = Router()

authRoute.post('/signup',(req,res)=>{
    const newUser = [
        {
            id: users.length + 1,
            email: req.body.email,
            password: req.body.password
        }
    ]
    const token = tokenHelper.sign(newUser, process.env.SECRET_KEY)
    writer.write(newUser)
    res.status(201).json({token, msg: "successfully created"})
    // res.redirect('http://localhost:4000/users')
})

export default authRoute