import React, { Component } from 'react';
import Header from "../../header";
import './materials.css';

class Materials extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="materials">
                    <h2>Матеріали</h2>
                </div>
            </>
        );
    }
}

export default Materials;