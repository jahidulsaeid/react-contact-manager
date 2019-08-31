import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';


export class Header extends Component {
    render() {
        return (
            <div className="ui red huge inverted menu">
                <a href="/" className="item">Contact Manager</a>
                <div className="right menu">
                    <a href="/" className="item">Home</a>
                </div>
            </div>
        )
    }
}

export default Header
