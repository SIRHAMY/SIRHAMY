import React, { Component } from 'react';

import CardHolder from './card_holder';
import Topbar from './topbar';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <CardHolder />
            </div>
        );
    }
}