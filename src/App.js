import React from 'react';
import './App.css';
import Contacts from './Components/Contacts/Contacts';
import Header from './Components/Layout/Header';
import AddContact from './Components/Contacts/AddContact';
import { Provider } from './Context';
function App() {

  return (

    <Provider>
      <div className="ui container">
        <Header />
        <AddContact/>
        <Contacts />
      </div>
    </Provider>

  );
}

export default App;


