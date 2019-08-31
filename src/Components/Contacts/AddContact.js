import React, { Component } from 'react'
import { Consumer } from '../../Context'
import uuid from 'uuid';

export class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        
        const { name, email, phone } = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };
        dispatch({ type: 'ADD_CONTACT', payload: newContact });

        this.setState ({
            name: '',
            email: '',
            phone: ''
        });
    };

    render() {
        const { name, email, phone } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="ui grid centered" style={{ margin: '20px 0' }}>

                            <form className="ui form eight wide column card fluid" onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <h1 style={{ textAlign: 'center' }}>Add Contact</h1>
                                <div className="field">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Name..."
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email..."
                                        value={email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Enter Phone..."
                                        value={phone}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button className="ui button primary centered" type="submit">Add Contact</button>
                            </form>

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact
