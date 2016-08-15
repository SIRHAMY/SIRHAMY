import React, { Component } from 'react';
import { Link } from 'react-router';

import { ingestCards } from '../actions/index';

export default class Topbar extends Component {
    render() {
        return (
            <div>
                <div className="topbar">
                    <ul>
                        <li className="logo"><Link to={"/"}>SIRHAMY</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/cards/blogPage"}>Blog</Link></li>
                        <li><Link to={"/cards/projects"}>Projects</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}