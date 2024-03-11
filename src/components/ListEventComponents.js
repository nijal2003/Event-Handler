import React ,{useEffect, useState}from 'react'
import { deleteEvent, listEvents } from '../services/EventService'
import "bootstrap/dist/css/bootstrap.css"; 
import { useNavigate } from 'react-router-dom';


const ListEventComponents = ()=>{
  const navigator=useNavigate();

  const [events,setEvents] = useState([])

  useEffect(()=>{
    getAllEvents();
  },[])

  function getAllEvents(){
    listEvents().then((response)=>{
      setEvents(response.data);
      console.log(response.data);
    }).catch(error=>{
      console.error(error);
    })
  }

  function updateEvent(id){
    navigator(`/admin/${id}`)
  }

  function removeEvent(id){
    console.log(id);

    deleteEvent(id).then((response)=>{
      getAllEvents();
    }).catch(error=>{

    })
  }

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
            <th>Actions</th>
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
              <td>
                <button className='' onClick={()=>updateEvent(event.id)}>Update</button>
                <button className='' onClick={()=>removeEvent(event.id)}>Delete</button>

              </td>

            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListEventComponents