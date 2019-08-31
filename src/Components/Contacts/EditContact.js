import React, { Component } from 'react'
import { Consumer } from '../../Context'
// import uuid from 'uuid';
import TextInputField from '../Layout/TextInputField'
import axios from 'axios';

export class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: ''
    };
    async componentDidMount(){
        const { id }  = this.props.match.params;
        const res =await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        })
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = async (dispatch, e) => {
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
        

        const updContact ={
            name,
            email,
            phone
        }
        const { id } = this.props.match.params;

        const res = await  axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updContact);

        dispatch({type:'UPDATE_CONTACT',payload:res.data})

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
                                <h1 style={{ textAlign: 'center' }}>Edit Contact</h1>

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
                                <button className="ui button primary centered" type="submit">Update Contact</button>
                            </form>

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default EditContact
