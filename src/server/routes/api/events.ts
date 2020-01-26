import {Router} from 'express'
import db from '../../db'



const router=Router()

router.get('/', async (req, res)=>{
    try{
        let events= await db.Events.allEvents()
        res.json(events)
        console.log(events)
    }catch(e){
        console.log(e)
        res.sendStatus(500)

    }
})

router.get('/:id', async (req, res)=>{
    try{
        let id= req.params.id
        let [event]:any= await db.Events.oneEvent(id)
        res.json(event)
        console.log(event)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

export default router