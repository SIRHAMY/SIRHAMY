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
                        <li><Link to={"/about"}>ABOUT</Link></li>
                        <li><Link to={"/cards/blogPage"}>BLOG</Link></li>
                        <li><Link to={"/cards/projects"}>PROJECTS</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}