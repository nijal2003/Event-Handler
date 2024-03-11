import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"; 
import Container from "react-bootstrap/Container"; 
import '../design/all.css';
import ListEventComponents from '../components/ListEventComponents.js';
// import { useNavigate } from 'react-router-dom';
import { createEvent } from '../services/EventService.js';

export default function Admin() {

  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  // const navigator = useNavigate();

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function handleSubmit(event){
    event.preventDefault();
    const newEvent = { title, description, date };
    setEvents([...events, JSON.stringify(newEvent)]);
    console.log("submit");
    setShowOutput(true);
    setTitle('');
    setDescription('');
    setDate('');

    createEvent(newEvent).then((response)=>{
      console.log(response.data);
    })

    //navigator('/add-event');
  }

  function removeEvent(index) {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  }

  function updateEvent(index) {
    const updatedEvent = events[index];
    setTitle(updatedEvent.title);
    setDescription(updatedEvent.description);
    setDate(updatedEvent.date);
    removeEvent(index);
  }
  
  return (
    <>
		<Container>
      <div>
        <div className='headOfAdmin'>
          <h2>Admin Panel</h2>
        </div>
        <hr/>
        <div className='buttonForAdd'>
          <button type="button" className="btn btn-outline-primary" onClick={openForm}>Add Event</button>
        </div>

        <div className="form-popup" id="myForm">
          <form className="form-container">
            <h2>Add New Event</h2>
            <hr/>
            <label for="title"><b>Title</b></label>
            <input type="text" placeholder="Enter Title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>

            <label for="description"><b>Description</b></label>
            <input type="text" placeholder="Enter Description" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} required/>

            <label for="date"><b>Date</b></label>
            <input type='date' name='date' value={date} onChange={(e)=>setDate(e.target.value)} required/>

            <button type="submit" className="btn" onClick={handleSubmit}>Add</button>
            <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
          </form>
        </div>

        <div className='addedEvent'>
          {showOutput && (
            <div>
              <h3>Events</h3>
              {events.map((event, index) => (
                <div key={index}>
                  <p><strong>Title:</strong>{event.title}</p>
                  <p><strong>Description:</strong>{event.description}</p>
                  <p><strong>Date:</strong>{event.date}</p>
                  <button className="btn btn-danger" onClick={() => removeEvent(index)}>Remove</button>
                  <button className="btn btn-primary" onClick={() => updateEvent(index)}>Update</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
		</Container>
    <ListEventComponents/>
    </>
  );
}

