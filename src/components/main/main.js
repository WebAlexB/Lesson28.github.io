import React, {Component} from 'react';
import Description from "../description/description";
import Logo from "../logo/logo";
import '../main/main.css';

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <div>
                    <Description />
                    <Logo />
                </div>
            </div>
        );
    }
};