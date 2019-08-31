import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import axios from 'axios';

class Contact extends Component {
    state = {
        showContactInfo: false
    };


    onDeleteClick = async (id, dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: 'DELETE_CONTACT', payload: id });
    };


    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return (

            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="contact" style={{ width: '600px', margin: 'auto' }}>
                            <div className="ui card fluid">
                                <div className="content">
                                    <div className="header" >
                                        {name}{' '}
                                        <i className="angle down icon"

                                            onClick={() => this.setState({
                                                showContactInfo: !this.state.showContactInfo
                                            })}

                                        ></i>


                                        <i className="x icon ui right floated red" onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>


                                        
                                        <Link to={`contact/edit/${id}`}>
                                            <i className="pencil right floated alternate icon"
                                            style={{color:'black',cursor:'pointer',margin:'0 20px',fontSize:'14px'}}
                                            ></i>
                                        </Link>


                                    </div>
                                    {showContactInfo ? (<div className="ui relaxed divided list">
                                        <div className="item">
                                            <i className="large mail middle aligned icon"></i>
                                            <div className="content">
                                                <h4 className="header">{email}</h4>
                                            </div>
                                        </div>
                                        <div className="item">

                                            <i className="large phone middle aligned icon"></i>
                                            <div className="content">
                                                <h4 className="header">{phone}</h4>
                                            </div>
                                        </div>
                                    </div>) : null}
                                </div>
                            </div>
                            <br />
                        </div>
                    )
                }}
            </Consumer>


        )
    }
}

Contact.propType = {
    contact: PropTypes.object.isRequired,
}

export default Contact;
