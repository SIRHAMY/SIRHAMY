import React, { Component } from 'react';

import SocialProfile from './social_profile';

export default class SocialProfiles extends Component {
    render() {
        return (
            <div className="social-profile-holder">

                <SocialProfile image="linkedin" toLink="http://linkedin.com/in/hamiltongreene"/>

                <SocialProfile image="medium" toLink="http://medium.com/@SIRHAMY"/>

            </div>
        );
    }
}