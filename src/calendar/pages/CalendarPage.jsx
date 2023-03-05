import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Navbar } from '../';

import {  addHours } from 'date-fns';
import { localizer, getMessagesEs } from '../../helpers';

const events = [{
  title: 'Infancia Misionera',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours( new Date(),2 ),
  bgColor:'#fafafa',
  user:{
    _id:'123',
    name:'Gabrieeeel'
  }
}];

export const CalendarPage = () => {
  return (
    <>
      <Navbar />
      <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc( 100vh - 80px )' }}
      messages={ getMessagesEs() }
      />
    </>
  )
}
