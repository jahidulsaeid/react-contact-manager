import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contacts from './Components/Contacts/Contacts';
import Header from './Components/Layout/Header';
import AddContact from './Components/Contacts/AddContact';
import { Provider } from './Context';
import About from './Components/Pages/About'
import NotFound from './Components/Pages/NotFound';
function App() {

  return (

    <Provider>
      <Router>
        <div className="ui container">
          <Header />
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
}

export default App;


