
import {Query} from '../index'

const allEvents = async ()=>Query('select events.*, users.first_name, users.last_name from events JOIN users on events.user_id = users.id')

const oneEvent = async (id:number)=>Query('select events.*, users.first_name, users.last_name from events JOIN users on events.user_id = users.id WHERE events.id=?', [id])


export default{
    allEvents,
    oneEvent
}