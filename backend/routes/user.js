const router = require('express').Router()
const usermod = require('../models/usermod')

router.get('/', async (req,res) => {
try{  
    const findallusers = await usermod.find()
    res.json(findallusers)
}
catch(err){res.json({message : err})}

})

router.post('/add',async (req,res) => {
    const user = new usermod({
        username : req.body.username
    })
    try{
        const upuser = await user.save()
        res.json({message : "added user"})
    }catch(err){
        res.json({
            message: err
        })
    }
})





module.exports = router