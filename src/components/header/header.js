import React, {Component} from 'react';
import MenuItem from "../menuItem/menuItem";
import '../header/header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <MenuItem link="#">Головна</MenuItem>
                <MenuItem link="#">Питання</MenuItem>
                <MenuItem link="#">Матеріали</MenuItem>
                <MenuItem link="#">Контакти</MenuItem>
            </div>
        );
    }
};