import * as Router from 'express'
import eventsRouter from './events'


const router=Router()

router.use('/events', eventsRouter)

export default router