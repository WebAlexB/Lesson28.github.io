import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../header/header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link className="link" to="/">Головна</Link>
                <Link className="link" to="/contacts">Контакти</Link>
                <Link className="link" to="/materials">Матеріали</Link>
                <Link className="link" to="/question">Питання</Link>
            </div>
        );
    }
};