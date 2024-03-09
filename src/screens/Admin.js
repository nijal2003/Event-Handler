import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"; 
import Container from "react-bootstrap/Container"; 
import '../design/all.css';

export default function Admin() {

  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function handleSubmit(event){
    event.preventDefault();
    const newEvent = { title, description, date };
    setEvents([...events, newEvent]);
    setShowOutput(true);
    setTitle('');
    setDescription('');
    setDate('');
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
		<Container>
      <div>
        <div className='headOfAdmin'>
          <h2>Admin Panel</h2>
        </div>
        <hr/>
        <div className='buttonForAdd'>
          <button type="button" className="btn btn-outline-primary" onClick={openForm}>Add Event</button>
        </div>

        <div class="form-popup" id="myForm">
          <form class="form-container">
            <h2>Add New Event</h2>
            <hr/>
            <label for="title"><b>Title</b></label>
            <input type="text" placeholder="Enter Title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>

            <label for="description"><b>Description</b></label>
            <input type="text" placeholder="Enter Description" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} required/>

            <label for="date"><b>Date</b></label>
            <input type='date' name='date' value={date} onChange={(e)=>setDate(e.target.value)} required/>

            <button type="submit" class="btn" onClick={handleSubmit}>Add</button>
            <button type="button" class="btn cancel" onClick={closeForm}>Close</button>
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
  )
}



// import React, { useState } from 'react';
// import "bootstrap/dist/css/bootstrap.css"; 
// import Container from "react-bootstrap/Container"; 
// // import Row from "react-bootstrap/Row"; 
// // import Col from "react-bootstrap/Col"; 
// // import Button from "react-bootstrap/Button"; 
// // import InputGroup from "react-bootstrap/InputGroup"; 
// // import FormControl from "react-bootstrap/FormControl"; 
// // import ListGroup from "react-bootstrap/ListGroup"; 
// import '../design/all.css';
// // import HeaderAdmin from '../components/HeaderAdmin'

// export default function Admin() {

//   const [title,setTitle] = useState('');
//   const [description,setDescription] = useState('');
//   const [date,setDate] = useState('');
//   const [showOutput,setShowOutput] = useState(false);

//   function openForm() {
//     document.getElementById("myForm").style.display = "block";
//   }
  
//   function closeForm() {
//     document.getElementById("myForm").style.display = "none";
//   }

//   function handleSubmit(event){
//     event.preventDefault();
//     setShowOutput(true);
//   }

  
//   return (
// 		<Container>
//     <div>
// 			<div className='headOfAdmin'>
// 				<h2>Admin Panel</h2>
// 			</div>
// 			<hr/>
// 			<div className='buttonForAdd'>
// 				<button type="button" className="btn btn-outline-primary" onClick={openForm}>Add Event</button>
// 			</div>

//       <div class="form-popup" id="myForm">
//         <form class="form-container">
//           <h2>Add New Event</h2>
//           <hr/>
//           <label for="title"><b>Title</b></label>
//           <input type="text" placeholder="Enter Title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>

//           <label for="description"><b>Description</b></label>
//           <input type="text" placeholder="Enter Description" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} required/>

//           <label for="date"><b>Date</b></label>
//           <input type='date' name='date' value={date} onChange={(e)=>setDate(e.target.value)} required/>

//           <button type="submit" class="btn" onClick={handleSubmit}>Add</button>
//           <button type="button" class="btn cancel" onClick={closeForm}>Close</button>
//         </form>
//       </div>

//       <div className='addedEvent'>
//         {showOutput &&(
//           <div>
//             <h3>Events</h3>
//             <p><strong>Title:</strong>{title}</p>
//             <p><strong>Description:</strong>{description}</p>
//             <p><strong>Date:</strong>{date}</p>
//           </div>
//         )}
//       </div>

//     </div>
// 		</Container>

//   )
// }




// App.js File 
// import React, { Component } from "react"; 
// import "bootstrap/dist/css/bootstrap.css"; 
// import Container from "react-bootstrap/Container"; 
// import Row from "react-bootstrap/Row"; 
// import Col from "react-bootstrap/Col"; 
// import Button from "react-bootstrap/Button"; 
// import InputGroup from "react-bootstrap/InputGroup"; 
// import FormControl from "react-bootstrap/FormControl"; 
// import ListGroup from "react-bootstrap/ListGroup"; 

// className App extends Component { 
// 	constructor(props) { 
// 		super(props);

// 		// Setting up state 
// 		this.state = { 
// 			userInput: "", 
// 			list: [], 
// 		}; 
// 	} 

// 	// Set a user input value 
// 	updateInput(value) { 
// 		this.setState({ 
// 			userInput: value, 
// 		}); 
// 	} 

// 	// Add item if user input in not empty 
// 	addItem() { 
// 		if (this.state.userInput !== "") { 
// 			const userInput = { 
// 				// Add a random id which is used to delete 
// 				id: Math.random(), 

// 				// Add a user value to list 
// 				value: this.state.userInput, 
// 			}; 

// 			// Update list 
// 			const list = [...this.state.list]; 
// 			list.push(userInput); 

// 			// reset state 
// 			this.setState({ 
// 				list, 
// 				userInput: "", 
// 			}); 
// 		} 
// 	} 

// 	// Function to delete item from list use id to delete 
// 	deleteItem(key) { 
// 		const list = [...this.state.list]; 

// 		// Filter values and leave value which we need to delete 
// 		const updateList = list.filter((item) => item.id !== key); 

// 		// Update list in state 
// 		this.setState({ 
// 			list: updateList, 
// 		}); 
// 	} 

// 	editItem = (index) => { 
// 	const todos = [...this.state.list]; 
// 	const editedTodo = prompt('Edit the Event:'); 
// 	if (editedTodo !== null && editedTodo.trim() !== '') { 
// 		let updatedTodos = [...todos] 
// 		updatedTodos[index].value= editedTodo 
// 		this.setState({ 
// 		list: updatedTodos, 
// 	}); 
// 	} 
// 	} 

// 	render() { 
// 		return ( 
// 			<Container> 
// 				<Row 
// 					style={{ 
// 						display: "flex", 
// 						justifyContent: "center", 
// 						alignItems: "center", 
// 						fontSize: "3rem", 
// 						fontWeight: "bolder", 
// 					}} 
// 				> 
// 					Add Event 
// 				</Row> 

// 				<hr /> 
// 				<Row> 
// 					<Col md={{ span: 5, offset: 4 }}> 
// 						<InputGroup className="mb-3"> 
// 							<FormControl 
// 								placeholder="add event... "
// 								size="lg"
// 								value={this.state.userInput} 
// 								onChange={(item) => 
// 									this.updateInput(item.target.value) 
// 								} 
// 								aria-label="add something"
// 								aria-describedby="basic-addon2"
// 							/> 
// 							<InputGroup> 
// 								<Button 
// 									variant="dark"
// 									className="mt-2"
// 									onClick={() => this.addItem()} 
// 								> 
// 									ADD 
// 								</Button> 
// 							</InputGroup> 
// 						</InputGroup> 
// 					</Col> 
// 				</Row> 
// 				<Row> 
// 					<Col md={{ span: 5, offset: 4 }}> 
// 						<ListGroup> 
// 							{/* map over and print items */} 
// 							{this.state.list.map((item, index) => { 
// 								return ( 
// 								<div key = {index} > 
// 									<ListGroup.Item 
// 										variant="dark"
// 										action 
// 										style={{display:"flex", 
// 												justifyContent:'space-between'
// 									}} 
// 									> 
// 										{item.value} 
// 										<span> 
// 										<Button style={{marginRight:"10px"}} 
// 										variant = "light"
// 										onClick={() => this.deleteItem(item.id)}> 
// 										Delete 
// 										</Button> 
// 										<Button variant = "light"
// 										onClick={() => this.editItem(index)}> 
// 										Edit 
// 										</Button> 
// 										</span> 
// 									</ListGroup.Item> 
// 								</div> 
// 								); 
// 							})} 
// 						</ListGroup> 
// 					</Col> 
// 				</Row> 
// 			</Container> 
// 		); 
// 	} 
// } 

// export default App; 

