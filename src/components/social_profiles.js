import React, { Component } from 'react';

import SocialProfile from './social_profile';

export default class SocialProfiles extends Component {
    render() {
        return (
            <div className="social-profile-holder">

                <SocialProfile image="LinkedIn" toLink="http://linkedin.com"/>

                <SocialProfile image="LinkedIn" toLink="http://linkedin.com"/>
                
            </div>
        );
    }
}