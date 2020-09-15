const router = require('express').Router()
const exermod = require('../models/exercisemod')

router.get('/', async (req,res) => {
    try{  
        const findallexer = await exermod.find()
        res.json(findallexer)
    }
    catch(err){res.json({message : err})}
    
    })

router.get('/specexer/:id' , async (req,res) => {
    try{
        const specexer = await exermod.findById({ _id : req.params.id })
        res.json(specexer)
    }catch(err){res.json({message : err})}
})
    
router.post('/add',async (req,res) => {
    const exer = new exermod({
        username : req.body.username,
        description : req.body.description,
        duration : req.body.duration,
        date : req.body.date
    })
    try{
        const upexer = await exer.save()
        res.json({message: "exer added"})
    }catch(err){
        res.json({
            message: err
        })
    }
})

router.delete('/delete/:id', async (req,res) => {
    try{
    const remexer = await exermod.remove({_id : req.params.id})
    res.json(remexer)
    }catch(err){
        res.json({ message : err })
    }
})

router.get('/spec/:name' , async (req,res) => {
    try{
    const specuser = await exermod.find({ username : req.params.name })
    res.json(specuser)
}catch(err){res.json({message : err})}

})

router.patch('/patch/:name', async (req,res) => {
    try{
        const patcheddet = await exermod.updateOne({username : req.params.name }, 
        {$set : {username : req.body.username,
        description : req.body.description},
        duration : req.body.duration,
        date : req.body.date
        
    })
    res.json(patcheddet)
}catch(err){
    res.json({
        message : err
    })
}
})





    
    
module.exports = router