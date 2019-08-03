import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';

class Contact extends Component {
    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="contact">
                <div className="ui card fluid">
           
                    <div className="content">
                        <div className="header" style={{borderBottom:' 1px solid rgba(34,36,38,.15)', paddingBottom:'8px'}}>
                        {name}
                        <i className="angle down icon"></i>
                        <i className="x icon ui right floated red"></i>
                        </div>
                        <div className="ui relaxed divided list">
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

                        </div>
                    </div>
                </div>
                <br />
            </div>

        )
    }
}

export default Contact;
