import React, {Component} from 'react';
import Header from "../header/header";
import Main from "../main/main";
import '../app/app.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
};
