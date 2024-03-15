import React, { useEffect, useState } from 'react';
import './UpdateEventForm.css';
import { useNavigate, useParams } from 'react-router-dom';
import { createEvent, getEvent, updateEvent } from '../services/EventService.js';

const UpdateEventForm = ({ onSubmit }) => {
  const navigator = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState(''); // State for managing the selected category

  const saveOrUpdateEvent = (e) => {
    e.preventDefault();

    const event = { title, description, date, category };
    console.log(event);

    if (id) {
      console.log("Update is calling");
      updateEvent(id, event)
        .then((response) => {
          console.log(response.data);
          navigator('/admin');
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      console.log("Create is calling");
      createEvent(event)
        .then((response) => {
          console.log(response.data);
          navigator('/admin');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, date, category });
    // Optionally, clear the form fields after submission
  };

  useEffect(() => {
    if (id) {
      getEvent(id)
        .then((response) => {
          setTitle(response.data.title);
          setDescription(response.data.description);
          setDate(response.data.date);
          setCategory(response.data.category); // Set the category from the retrieved event data
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  return (
    <form className="update-event-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="College">College Event</option>
              <option value="School">School Event</option>
              <option value="Sports">Sports Event</option>
              <option value="Fest">Fest</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <button type="submit" onClick={saveOrUpdateEvent}>Update Event</button>
    </form>
  );
};

export default UpdateEventForm;


// import React, { useEffect, useState } from 'react';
// import './UpdateEventForm.css';
// import { useNavigate,useParams } from 'react-router-dom';
// import { createEvent, getEvent, updateEvent } from '../services/EventService.js';




// const UpdateEventForm = ({ onSubmit }) => {

//   const navigator=useNavigate();

//   function saveOrUpdateEvent(e){
//     e.preventDefault();

//     const event = {title,description,date}
//     console.log(event);

//     if(id){
//       console.log("Update is calling");
//       updateEvent(id,event).then((response)=>{
//         console.log(response.data);
//         navigator('/admin');
//       }).catch(error=>{
//         console.error(error);
//       })
//     }else{
//       console.log("Create is calling")
//       createEvent(event).then((response)=>{
//         console.log(response.data);
//         navigator('/admin')
//       }).catch(error=>{
//         console.error(error);
//       })
//     }
//   }
  

//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState();

//   const{id} = useParams();


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ title, description, date });
//     // Optionally, clear the form fields after submission
//   };

//   useEffect(()=>{
//     if(id){
//       getEvent(id).then((response)=>{
//         setTitle(response.data.title);
//         setDescription(response.data.description);
//         setDate(response.data.date);
//       }).catch(error=>{
//         console.error(error);
//       })
//     }
//   }, [])
  

//   return (
//     <form className="update-event-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="date">Date:</label>
//         <input
//           type="date"
//           id="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit" onClick={saveOrUpdateEvent}>Update Event</button>
//     </form>
//   );
// };

// export default UpdateEventForm;
