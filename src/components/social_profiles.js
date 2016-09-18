import React, { Component } from 'react';

import SocialProfile from './social_profile';

export default class SocialProfiles extends Component {
    render() {
        return (
            <div className="social-profile-holder">

                <SocialProfile image="8tracks" toLink="http://8tracks.com/sirhamy"/>
                
                <SocialProfile image="facebook" toLink="https://www.facebook.com/hamilton.greene.13"/>

                <SocialProfile image="github" toLink="http://github.com/sirhamy"/>

                <SocialProfile image="instagram" toLink="https://www.instagram.com/sirhamy/"/>

                <SocialProfile image="linkedin" toLink="http://linkedin.com/in/hamiltongreene"/>

                <SocialProfile image="medium" toLink="http://medium.com/@SIRHAMY"/>

                <SocialProfile image="soundcloud" toLink="https://soundcloud.com/sirhamy"/>

            </div>
        );
    }
}