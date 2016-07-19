import React, { Component } from 'react';

export default class Topbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                SIRHAMY
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}