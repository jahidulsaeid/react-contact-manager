import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';
import Header from './Components/Header';
function App() {
 
  return (

    <div className="ui container">
      <Header/>
      <Contact name="Jahidul Islam" email="Jahidulislam@gmail.com" phone="0182984327"/>
      <Contact name="Mredul Orfiaz" email="Mredul@gmail.com" phone="017383475438"/>
      <Contact name="Saimum Islam" email="Saimum@gmail.com" phone="019384743534"/>
  
    </div>
  );
}

export default App;


