const express = require('express')
const router = new express.Router()
const Admin = require('../models/admin')
router.get('/',async(req,res)=>{
    try {
        res.json({
            device:req.useragent
        })
    } catch (e) {
        console.log(e.message)
        res.json({
            message:'failed',
            error:e,
        })
    }
})
router.post('/login',async(req,res)=>{
    try {
        const user = await Admin.findByCredentials(req.body.email, req.body.password)
        const token = user.genAuthToken()
        user.tokens = user.tokens.concat({
            token: token,
            browser: req.useragent.browser,
            device: req.useragent.os
        })

        res.cookie('auth_token', token, options)
        res.send({
            status: 200,
            success: true,
            message: 'fetched successfully',
            user: user,
            token,
        })
    } catch (e) {
        res.send({
            message: 'failed',
            error,
            status,
            success: false
        })
    }
})

router.post('/signup', async (req, res) => {
    try {
        res.json({

        })
    } catch (e) {
        res.json({

        })
    }
})
module.exports = router