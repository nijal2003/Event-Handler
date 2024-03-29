import './App.css';

import Admin from './screens/Admin';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Navbar from './components/Navbar';
import Login from './screens/Login';
import User from './screens/User';
import Singup from './screens/Singup';
import UpdateEventForm from './components/updateEvent';
// import ListEventComponents from './components/ListEventComponents.js';


function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/admin/:id" element={<UpdateEventForm />}/>
            <Route exact path="/user" element={<User />}/>
            <Route exact path="/singup" element={<Singup />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
