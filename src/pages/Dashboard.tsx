import * as React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../client/scss/app.scss'
import { useState, useEffect } from 'react'
import Calendar from '../components/calendar'
import Navbar from '../components/navbar'


const Dashboard: React.SFC<IHomeProps> = (props) => {

    return (
        <main className="container-fluid m-2">
            <Navbar />
            <div className="row display-flex">
                <div className="col-sm-7">
                    <Calendar  />
                </div>
                <div className="col-sm-5 my-5">
                    Event Details
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