import React, { Component } from 'react'
import { Consumer } from '../../Context'
import uuid from 'uuid';
import TextInputField from '../Layout/TextInputField'

export class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: ''
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        // Check For Errors
        if (name=== ''){
            this.setState({errors: {name: 'Name is required'}});
            return;
        }
        if (email=== ''){
            this.setState({errors: {email: 'Email is required'}});
            return;
        }
        if (phone=== ''){
            this.setState({errors: {phone: 'Phone is required'}});
            return;
        }


        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };
        dispatch({ type: 'ADD_CONTACT', payload: newContact });

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });
        this.props.history.push('/');
    };

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="ui grid centered" style={{ margin: '20px 0' }}>

                            <form className="ui form eight wide column card fluid" onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <h1 style={{ textAlign: 'center' }}>Add Contact</h1>

                                <TextInputField
                                    name="name"
                                    placeholder="Enter Name..."
                                    value={name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                />
                                <TextInputField
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email..."
                                    value={email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                />
                                <TextInputField
                                    name="phone"
                                    placeholder="Enter Phone..."
                                    value={phone}
                                    onChange={this.onChange}
                                    error={errors.phone}
                                />
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
