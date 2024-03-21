import React, { Component } from 'react';
import Header from "../../header";
import './contacts.css';

class Contacts extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="contacts">
                    <h2>Контакти</h2>
                </div>
            </>
        );
    }
}

export default Contacts;