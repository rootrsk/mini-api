const express = require('express')
const sendMail = require('./mailSender')
const router = new express.Router()


router.get('/portfolio',async(req,res)=>{
    try {
        res.send("Sending Portfoli pdf")
        // res.sendFile('userRouter.js')
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})
router.post('/send-mail', async (req, res) => {
    try {
        const {name,email,subject,message} = req.body
        if(!name){
            return res.json({
                status:'failed',
                error:'name is required'
            })
        }
        if(!email) {
            return res.json({
                status: 'failed',
                error: 'email is required'
            })
        }
        if(!message) {
            return res.json({
                status: 'failed',
                error: 'massage is required'
            })
        }
        const mail = await sendMail({name,email,subject,message})
        console.log(mail)
        res.json({
            status:'success',name,email,subject,message
        })
    } catch (error) {
        console.log(error)
        res.json({
            error: error.message
        })
    }
})

module.exports = router