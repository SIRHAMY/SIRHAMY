import React, { Component } from 'react';

import AboutSection from './about_section';
import FeatureSection from './feature_section';
import FeedSection from './feed_section';
import ProjectsSection from './projects_section';
import Topbar from './topbar';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Topbar />
                HOME
                <FeatureSection />
                <ProjectsSection />
                <FeedSection />
                <AboutSection />
            </div>
        );
    }
}