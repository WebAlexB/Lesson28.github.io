import React, { Component } from 'react';
import './notFound.css';
import Header from "../../header";

class NotFound extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="not-found">
                    <h2>404</h2>
                </div>
            </>
        );
    }
}

export default NotFound;