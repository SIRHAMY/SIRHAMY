import React, { Component } from 'react';

import Topbar from './topbar';

export default class About extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <div>
                    Hi, I'm Hamilton Greene. I'm a fullstack software engineer.
                </div>
            </div>
        )
    }
}