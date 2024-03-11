import React ,{useEffect, useState}from 'react'
import { listEvents } from '../services/EventService'

const ListEventComponents = ()=>{

  const [events,setEvents] = useState([])

  useEffect(()=>{
    listEvents().then((response)=>{
      setEvents(response.data);
    }).catch(error=>{
      console.error(error);
    })
  },[])

  return(
    <div>
      <h2>List of events</h2>
      <table>
        <thead>
          <tr>
            <th>Event Id</th>
            <th>Event Title</th>
            <th>Event Description</th>
            <th>Event Date</th>
          </tr>
        </thead>
        <tbody>
          {
            events.map(event=>
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.date}</td>

            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListEventComponents