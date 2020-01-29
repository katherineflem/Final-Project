
import * as React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interaction from '@fullcalendar/interaction'
import timeGridDay from '@fullcalendar/timegrid'
import timeGridWeek from '@fullcalendar/timegrid'
import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { json } from '../utils/api'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import { IEvents } from '../utils/interfaces'

const Calendar: React.SFC<ICalendarProps> = (props) => {

    const calendarRef = useRef()

    const [events, setEvents] = useState<IEvents[]>([])

    const getEvents = async () => {
        try {
            let events = await json('/api/events')
            setEvents(events)
            console.log(events)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => { getEvents() }, [])




    const handleDateClick = (date) => {
        events.map(event => {
            return(
                console.log(event.start_date)

            )

        }
        )
    }





    return (
        <main className="container my-5 shadow-lg">
            <FullCalendar
                themeSystem='bootstrap'
                defaultView='dayGridMonth'
                plugins={[dayGridPlugin, bootstrapPlugin, interaction, timeGridDay, timeGridWeek]}
                events={events}
                ref={calendarRef}
                dateClick={handleDateClick}
            />

        </main>
    )
}


export interface ICalendarProps { }


export default Calendar;

