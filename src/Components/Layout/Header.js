import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Link} from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <div className="ui red huge inverted menu">
                <Link to="/" className="item">Contact Manager</Link>
                <div className="right menu">
                    <Link to="/" className="item">Home</Link>
                    <Link to="/contact/add" className="item">Add Contact</Link>
                    <Link to="/about" className="item">About</Link>
                </div>
            </div>
        )
    }
}

export default Header
