import React, { Component } from 'react';

import HamLink from './ham_link';

export default class SocialProfile extends Component {
    
    getCardStyle() {
        //Depending on size, make div that large
        //Have image resize based on this size

        return {
            backgroundImage: 'url(/resources/icons/'+ this.props.image + '-icon-white.svg)',
            backgroundSize: '100% 100%'
        }
    }

    render() {
        return (
            <HamLink link={this.props.toLink}>
                <div className="social-profile" style={this.getCardStyle()}>
                {
                    /*
                    I'm a profile
                    Image: {this.props.image}
                    URL: {this.props.toLink}
                    */
                }
                </div>
            </HamLink>
        )
    }
}