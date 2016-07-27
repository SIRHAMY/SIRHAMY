import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Topbar extends Component {
    render() {
        return (
            <div>
                <div className="topbar">
                    <ul>
                        <li className="logo"><a>SIRHAMY</a></li>
                        <li><a>About</a></li>
                        <li><a>Blog</a></li>
                        <li><Link to={"/projects"}>Projects</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}