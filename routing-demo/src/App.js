import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import './App.css';
import User from './components/User';
function App() {
  const users = [1,2,3,4,5,6,7,8,9,10];
  
  return (
    <div className="">
      <div className="mx-20 flex gap-5 my-24">
        {
          users.map((user) => {
            return (
              <Link to={`users/${user}`}>user{user} </Link>
            )
          })
        }
      </div>
      <Routes>
        <Route path="users/:userId" element={<UserDetails />} />
      </Routes>

    </div>
  );
}

export default App;