import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contacts from './Components/Contacts/Contacts';
import Header from './Components/Layout/Header';
import AddContact from './Components/Contacts/AddContact';
import EditContact from './Components/Contacts/EditContact';
import { Provider } from './Context';
import About from './Components/Pages/About'
import NotFound from './Components/Pages/NotFound';
import Test from './Components/test/Test';
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
            <Route exact path="/contact/edit/:id" component={EditContact} />
            <Route exact path="/test" component={Test} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
}

export default App;


