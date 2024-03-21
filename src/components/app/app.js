import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import Contacts from "../pages/contacts";
import Materials from "../pages/materials";
import Question from "../pages/question/question";
import NotFound from "../pages/notFound";
import '../app/app.css';

export default class App extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/materials" element={<Materials/>}/>
                <Route path="/question" element={<Question/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        );
    }
};
