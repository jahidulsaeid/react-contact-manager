import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) =>{
    switch (action.type) {
        case 'DELETE_CONTACT':
          return {
              ...state,
              contacts:state.contacts.filter(contact => contact.id !== action.payload)
          };
        case 'ADD_CONTACT':
          return {
              ...state,
              contacts: [action.payload, ...state.contacts]
          }
        default:
            return state;
          
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
             id :1,
             name:'saeid',
             email: 'saeid@gmail.com',
             phone: '444-444-444'
            },
            {
             id :2,
             name:'jahidul',
             email: 'jahidul@gmail.com',
             phone: '456-444-444'
            },
            {
             id :3,
             name:'islam',
             email: 'islam@gmail.com',
             phone: '888-444-444'
            },
            {
             id :4,
             name:'mredul',
             email: 'mredul@gmail.com',
             phone: '111-444-444'
            }
 
         ],
         dispatch: action => this.setState(state => reducer(state, action))
     };
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
