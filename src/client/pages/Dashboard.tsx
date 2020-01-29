import * as React from 'react';
import { useState, useEffect } from 'react'
import Calendar from '../components/calendar'
import Navbar from '../components/navbar'
import { IEvents } from '../utils/interfaces';
import { json } from '../utils/api';
import * as moment from 'moment'


const Dashboard: React.SFC<IHomeProps> = (props) => {

    const [events, setEvents] = useState<IEvents[]>([])
    const [selectedDate, setSelectedDate]= useState(new Date)

    const getEvents = async () => {
        try {
            let events = await json('/api/events')
            setEvents(events)
        } catch (e) {
            console.log(e)
        }
    }

    // const handleDateClick=(selectedDate)=>{
     
    //     {events.map(event => {
    //     if(event.start_date === selectedDate)
    //         return (
    //             <div className="card m-3 bg-light shadow-lg border-success p-2">
    //                 <div className="card-title">{event.name}</div>
    //                 <p className="card-text">{moment(event.start_date).format('MMMM Do YYYY')}</p>
    //             </div>
    //         )
    //     })}
    // }

    useEffect(() => { getEvents() }, [])
    return (
        <main className="container-fluid m-2">
            <Navbar />
            <div className="row display-flex">
                <div className="col-sm-7">
                    <Calendar />
                </div>
                <div className="col-sm-5 my-5">
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-lg-12">
                    Footer
                </div>
            </div>
        </main>
    )
}


export interface IHomeProps { }

export interface IHomeState {

}

export default Dashboard;