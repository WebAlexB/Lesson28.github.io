import React, {Component} from 'react';
import '../logo/logo.css'
export default class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <a href="#">
                    <img src="static/images/logo.png" alt="logo" />
                </a>
            </div>
        );
    }
};