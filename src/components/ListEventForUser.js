
import React, { useEffect, useState } from 'react';
import { listEvents } from '../services/EventService';
// import { useNavigate } from 'react-router-dom';
import './ListEventComponents.css'; 

const ListEventForUser = () => {
  // const navigator = useNavigate();

  const [events, setEvents] = useState([]);

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

  // function updateEvent(id) {
  //   navigator(`/admin/${id}`);
  // }

  // function removeEvent(id) {
  //   console.log(id);

  //   deleteEvent(id)
  //     .then((response) => {
  //       getAllEvents();
  //     })
  //     .catch((error) => {});
  // }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">User Event Manager</div>
      </nav>
      <div className="list-event-container">
        <h2>List of events</h2>
        <table className="event-table">
          <thead>
            <tr>
              <th>Event Id</th>
              <th>Event Title</th>
              <th>Event Description</th>
              <th>Event Date</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Event Manager</p>
      </footer>
    </div>
  );
};

export default ListEventForUser;


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

