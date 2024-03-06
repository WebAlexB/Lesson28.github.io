import React, {Component} from 'react';
import '../menuItem/menuItem.css';

export default class MenuItem extends Component {
    render() {
        const {link, children} = this.props;

        return (
            <div className="menu-items">
                <a href={link}>{children}</a>
            </div>
        );
    }
}
