import React, { Component } from 'react';

export default class HamLink extends Component {

    linkIsExternal() {
        if(this.props.link.substring(0, 4) == 'http') {
            return true;
        }

        return false;
    }

    getLink() {

        if( this.linkIsExternal() ) {
            return (
                <a href={this.props.link} target="_blank">
                    {this.props.children}
                </a>
            )
        } else {
            return (
                <Link to={this.props.link}>
                    {this.props.children}
                </Link>
            )
        }
    }

    render() {
        return (
                this.getLink()
        )
    }
}