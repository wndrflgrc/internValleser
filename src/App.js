// src/App.js
import React from 'react';
import Header from "./Components/Header";
import SignUp from './Components/Signup';
import Login from './Components/Login';


const App = () => {
  return (
    <div>
      <Header />
      <SignUp />
      <Login />
    </div>
  );
};

export default App;
