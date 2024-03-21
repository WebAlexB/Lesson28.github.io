import React, {Component} from 'react';
import Header from "../../header";
import Main from "../../main";
import './home.css';

class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <Header/>
                    <Main/>
                </div>
            </>
        );
    }
}

export default Home;