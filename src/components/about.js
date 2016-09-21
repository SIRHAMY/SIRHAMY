import React, { Component } from 'react';

import SocialProfiles from './social_profiles';
import Topbar from './topbar';

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <Topbar />
                
                <div>
                    <div className="col-md-12 content-section container">
                        <div className="col-md-4 col-sm-12" style={{paddingLeft: 0, paddingRight: 0}}>
                            <img src="/resources/images/pages/about/hamilton-greene-profile.png" style={{width: '100%', border: 'solid #000 10px'}} />
                        </div>
                        <div className="col-md-8 col-sm-12" style={{paddingRight: 0}}>
                            <div>
                                <h2>HAMILTON GREENE</h2>
                            </div>
                            <div className="content">
                                <strong>Hi, I'm Hamilton Greene and I'm a fullstack software engineer. </strong>

                                For the past two years, I've focused heavily on web technologies, drawn to their platform versatility and nigh inherent connectivity (JavaScript and Python are my current weapons of choice). I do everything from spinning up the servers and installing the DBs to creating the views on the UI.

                                I like tackling real, hard problems with practical, elegant solutions and LOVE building things. In fact, this paradigm is what drew me to software in the first place. 

                                I'm on track to graduate from Georgia Tech in December of 2016 with a degree in Computer Science and am actively seeking full-time software engineering roles to start my professional career.
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 content-section container">
                        <h2>CONNECT</h2>
                        <SocialProfiles />
                    </div>
                    <div className="col-md-12 content-section container">
                        <h2>EDUCATION</h2>
                        
                        <h3>Georgia Institute of Technology</h3>
                        <ul className="entry-details content">
                            <li>{"<>"} BS Computer Science </li>
                            <li>{"<>"} Threads: Information Internetworks and Media </li>
                            <li>{"<>"} Graduating: December 2016 </li>
                        </ul>

                    </div>
                    <div className="col-md-12 content-section container">
                        <h2>EXPERIENCE</h2>

                        <h3>Maelstrom Intern - Frontend Developer</h3>
                        <ul className="entry-details content">
                            <li>2016 - IBM | Austin, TX</li>
                            <li>{"<>"} IBM's premier design internship </li>
                            <li>{"<>"} Worked on multidisciplinary team tackling enterprise business problems through research, design, and iterative prototyping</li>
                            <li>{"<>"} Tech: CSS, Express, Flask, HTML, IBM [Bluemix,Cloud
Foundry, Watson], NodeJS, Python, React, Webpack </li>
                        </ul>

                        <h3>Technology Intern</h3>
                        <ul className="entry-details content">
                            <li>2016 - CNN | Atlanta, GA</li>
                            <li>{"<>"} Built features for internal web apps, system
dashboards, and web video player </li>
                            <li>{"<>"} Tech: AngularJS, CSS, Express, HTML, JavaScript,
Less, MongoDB, NodeJS </li>
                        </ul>

                        <h3>Intern - Software Engineering</h3>
                        <ul className="entry-details content">
                            <li>2015 - FactSet | Norwalk, CT</li>
                            <li>{"<>"} Designed and built frontend for charting test
harness, targeting mobile devices </li>
                            <li>{"<>"} Tech: AngularJS, Bootstrap, CSS, HTML, JavaScript </li>
                        </ul>

                        <h3>Associate Developer</h3>
                        <ul className="entry-details content">
                            <li>2014 - The Home Depot | Atlanta, GA</li>
                            <li>{"<>"} Designed and built autonomous robotic systems to
navigate dynamic retail environments </li>
                            <li>{"<>"} Tech: Arduino, C, Python </li>
                        </ul>

                        <h3>Supply Chain IT Intern</h3>
                        <ul className="entry-details content">
                            <li>2014 - The Home Depot | Atlanta, GA</li>
                            <li>{"<>"} Built system to monitor health of restocking service used in brick-and-mortar stores </li>
                            <li>{"<>"} Developed Chrome extension to display dashboard </li>
                            <li>{"<>"} Tech: Java, JavaScript, Splunk </li>
                        </ul>

                    </div>
                </div>

            </div>
        )
    }
}