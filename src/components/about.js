import React, { Component } from 'react';

import Topbar from './topbar';

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <Topbar />
                
                <div>
                    <div className="col-md-12 content-section container">
                        <div className="col-md-4 col-sm-12" style={{paddingLeft: 0, paddingRight: 0}}>
                            <img src="/resources/images/pages/about/hamilton-greene-profile.png" style={{width: '100%'}} />
                        </div>
                        <div className="col-md-8 col-sm-12" style={{paddingRight: 0}}>
                            <div>
                                <h2>HAMILTON GREENE</h2>
                            </div>
                            <div className="content">
                                <strong>Hi, I'm Hamilton Greene and I'm a fullstack software engineer.</strong>

                                I like tackling real, hard problems with practical, elegant solutions and LOVE building software. 
                                
                                For the past two years, I've been heavily focused on web technologies, drawn to their platform versatility and nigh inherent connectivity. 

                                I plan to graduate from Georgia Tech in December of 2016 with a degree in Computer Science. I'm actively seeking a full-time software engineering role for my post-college career.
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 content-section container">
                        <h2>EXPERIENCE</h2>
                    </div>
                </div>

                
            </div>
        )
    }
}