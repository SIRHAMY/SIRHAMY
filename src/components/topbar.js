import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Topbar extends Component {
    render() {
        return (
            <div>
                <div className="topbar">
                    <ul>
                        <li className="logo"><strong><Link to={"/"}>SIRHAMY</Link></strong></li>
                        <li><strong><a>About</a></strong></li>
                        <li><strong><Link to={"/cards/blogPage"}>Blog</Link></strong></li>
                        <li><strong><Link to={"/cards/projects"}>Projects</Link></strong></li>
                    </ul>
                </div>
            </div>
        );
    }
}