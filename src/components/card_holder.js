import React, { Component } from 'react';

import Card from './card';

var ProjectData = require('../../resources/data/projects.json');

export default class CardHolder extends Component {
    
    renderCards() {
        return ProjectData.projects.map((project) => {
            console.log("Rendering card");
            return (
                    <Card key={project.name} details={project}/>
            );
        });
    }
    
    render() {
        //Check if json data loaded
        console.log(ProjectData);
        
        return (
            <div>
                This is a card holder
                <div className="card-grid">
                    {this.renderCards()}
                </div>
            </div>
        );
        
    }
}