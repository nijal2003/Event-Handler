import React, { useEffect, useState } from 'react';
import { deleteEvent, listEvents } from '../services/EventService';
import { useNavigate } from 'react-router-dom';
import './ListEventComponents.css'; // Importing CSS file

const EventCategory = ({ category }) => {
  return <td>{category}</td>;
};

const ListEventComponents = () => {
  const navigator = useNavigate();

  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // State for managing selected category

  useEffect(() => {
    getAllEvents();
  }, []);

  function getAllEvents() {
    listEvents()
      .then((response) => {
        setEvents(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function updateEvent(id) {
    navigator(`/admin/${id}`);
  }

  function removeEvent(id) {
    console.log(id);

    deleteEvent(id)
      .then((response) => {
        getAllEvents();
      })
      .catch((error) => {});
  }

  // Filter events based on selected category
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  return (
    <div className="list-event-container">
      <h2>List of events</h2>
      {/* Add category filter dropdown */}
      <div className="category-filter">
      <label htmlFor="category" className="form-label">Filter by Category:</label>
<select
  id="category"
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
  className="form-select"
>
  <option value="">All Categories</option>
  <option value="College">College Event</option>
  <option value="School">School Event</option>
  <option value="Sports">Sports Event</option>
  <option value="Fest">Fest</option>
  {/* Add more options as needed */}
</select>

      </div>
      <table className="event-table">
        <thead>
          <tr>
            <th>Event Id</th>
            <th>Event Title</th>
            <th>Event Description</th>
            <th>Category</th>
            <th>Event Date</th>

          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <EventCategory category={event.category} />
              <td>{event.date}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEventComponents;


// import React, { useEffect, useState } from 'react';
// import { listEvents } from '../services/EventService';
// // import { useNavigate } from 'react-router-dom';
// import './ListEventComponents.css'; 

// const ListEventForUser = () => {
//   // const navigator = useNavigate();

//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     getAllEvents();
//   }, []);

//   function getAllEvents() {
//     listEvents()
//       .then((response) => {
//         setEvents(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   // function updateEvent(id) {
//   //   navigator(`/admin/${id}`);
//   // }

//   // function removeEvent(id) {
//   //   console.log(id);

//   //   deleteEvent(id)
//   //     .then((response) => {
//   //       getAllEvents();
//   //     })
//   //     .catch((error) => {});
//   // }

//   return (
//     <div>
//       <nav className="navbar">
//         <div className="navbar-brand">User Event Manager</div>
//       </nav>
//       <div className="list-event-container">
//         <h2>List of events</h2>
//         <table className="event-table">
//           <thead>
//             <tr>
//               <th>Event Id</th>
//               <th>Event Title</th>
//               <th>Event Description</th>
//               <th>Event Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map((event) => (
//               <tr key={event.id}>
//                 <td>{event.id}</td>
//                 <td>{event.title}</td>
//                 <td>{event.description}</td>
//                 <td>{event.date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <footer className="footer">
//         <p>&copy; 2024 Event Manager</p>
//       </footer>
//     </div>
//   );
// };

// export default ListEventForUser;


// import React, { useEffect, useState } from 'react';
// import { deleteEvent, listEvents } from '../services/EventService';
// import { useNavigate } from 'react-router-dom';
// import './ListEventComponents.css'; // Importing CSS file

// const ListEventForUser = () => {
//   const navigator = useNavigate();

//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     getAllEvents();
//   }, []);

//   function getAllEvents() {
//     listEvents()
//       .then((response) => {
//         setEvents(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   function updateEvent(id) {
//     navigator(`/admin/${id}`);
//   }

//   function removeEvent(id) {
//     console.log(id);

//     deleteEvent(id)
//       .then((response) => {
//         getAllEvents();
//       })
//       .catch((error) => {});
//   }

//   return (
//     <div className="list-event-container">
//       <h2>List of events</h2>
//       <table className="event-table">
//         <thead>
//           <tr>
//             <th>Event Id</th>
//             <th>Event Title</th>
//             <th>Event Description</th>
//             <th>Event Date</th>
//             {/* <th>Actions</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {events.map((event) => (
//             <tr key={event.id}>
//               <td>{event.id}</td>
//               <td>{event.title}</td>
//               <td>{event.description}</td>
//               <td>{event.date}</td>
//               {/* <td>
//                 <button className="update-btn" onClick={() => updateEvent(event.id)}>Update</button>
//                 <button className="delete-btn" onClick={() => removeEvent(event.id)}>Delete</button>
//               </td> */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListEventForUser;

