import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../../Context'

export class Contacts extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <h1 className="ui center aligned header">
                               <span className="ui red header">Contacts</span> List
                            </h1>
                            {contacts.map(contact => (
                                <Contact
                                    key={contact.id}
                                    contact={contact} />
                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts

