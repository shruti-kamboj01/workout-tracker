import React from 'react'
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction"
import { MdArrowBackIos } from "react-icons/md";
import '../App.css'
import { useNavigate } from 'react-router-dom';



const Schedule = () => {

     const navigate = useNavigate()
    const handleDateClick = (arg) => {
        alert(arg.dateStr)
      }
     
  return (
    <div className='w-11/12 mx-auto'>
    <div className='mt-10 rounded-md bg-gray-100 w-fit p-2' onClick={() => navigate('/goals')}> <MdArrowBackIos/>  </div>
 <h1 className='text-center mt-8 font-semibold text-[20px]'>Workout Schedule</h1>
     <div className='relative'>
     <FullCalendar
        plugins={[timeGridPlugin , interactionPlugin]}
        initialView="timeGridWeek"
        dateClick={handleDateClick}
        slotDuration="00:30:00" // Each time slot is 30 minutes
        slotLabelInterval="01:00:00" 
        dayCount={4}
        
        events={[
          { title: 'Ab Workout', date: '2024-04-16', start: '2024-04-16T06:00:00', end: '2024-04-16T07:00:00'},
          { title: 'UpperBody Workout', data:'2024-04-14', start: '2024-04-15T10:00:00', end: '2024-04-15T11:00:00' },
          { title: 'LowerBody Workout', data:'2024-04-18', start: '2024-04-18T13:00:00', end: '2024-04-18T14:00:00' },
          // Add more events as needed
        ]}
      />

      <button className='block fixed right-10  bottom-16 rounded-full lg:bottom-10 p-3 px-5 z-10 bg-gradient-to-b from-[#7B91FF]  to-[#95BEFF] text-4xl'
      onClick={() => navigate('/workout')}>+</button>
     </div>
   </div>
  )
}



export default Schedule