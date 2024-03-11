import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

export default function Login() {
  const navigate = useNavigate();

  const handleAdmin = (e) => {
    navigate(`/admin`);
  };

  const handleUser = (e) => {
    navigate(`/user`);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    } else {
      if (username === 'admin' && password === 'admin') {
        handleAdmin(e);
      }
      if (username === 'user' && password === 'user') {
        handleUser(e);
      }
    }

    setErrorMessage('');

    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {errorMessage && <div className="error">{errorMessage}</div>}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'


// export default function Login() {

//   const navigate = useNavigate();


//   const handleAdmin=(e)=>{
//     navigate(`/admin`)
//   }

//   const handleUser=(e)=>{
//     navigate(`/user`)
//   }

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       setErrorMessage('Please enter both username and password.');
//       return;
//     }else{
//       if(username==="admin" && password==="admin")
//       {
//         handleAdmin(e);
//       }
//       if(username==="user" && password==="user"){
//         handleUser(e);
//       }
//     }

//     setErrorMessage('');

//     console.log('Username:', username);
//     console.log('Password:', password);
//   };
//   return (
//     <div>
//       <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         {errorMessage && <div className="error">{errorMessage}</div>}
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" onClick={handleSubmit}>Login</button>
//       </form>
//     </div>
//       {/* <button onClick={handleAdmin}>Admin</button>
//       <button onClick={handleUser}>User</button> */}
//     </div>
//   )
// }
