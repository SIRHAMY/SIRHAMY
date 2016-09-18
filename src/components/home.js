import React, { Component } from 'react';

import CardHolder from './card_holder';
import Topbar from './topbar';

export default class Home extends Component {

    getCurrentPage() {
        var page = this.props.params.pageID;

        switch(page) {
            case "blogPage": 
                page = "blog";
                break;
            case "projects":
                page = "projects";
                break;
            default:
                page = "home";
                break;
        }

        return page;
    }

    render() {
        return (
            <div>
                <Topbar />
                <CardHolder currPage={this.getCurrentPage()}/>
            </div>
        );
    }
}