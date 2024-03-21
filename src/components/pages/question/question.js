import React, { Component } from 'react';
import Header from "../../header";
import './question.css';

class Question extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="question">
                    <h2>Питання</h2>
                </div>
            </>
        );
    }
}

export default Question;