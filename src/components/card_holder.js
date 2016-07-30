import React, { Component } from 'react';

import Card from './card';

var ProjectData = require('../../resources/data/projects.json');

export default class CardHolder extends Component {


    componentWillMount() {
        this.cards = {};

        var mediumIn = false;
        var codeIn = false;
        var designIn = false;
        
        switch(this.props.currPage) {
            case "home":
                mediumIn = true;
                codeIn = true;
                designIn = true;
                break;
            case "projects":
                codeIn = true;
                designIn = true;
                break;
        }

        //Ingest data

        var toIngest = {
            "medium": mediumIn,
            "code": codeIn,
            "design": designIn
        }

        this.ingestData(toIngest);

    }

    ingestData(toIngest) {
        var tempCards = [];
        if(toIngest.medium) {
            //Ingest medium posts
        }

        if(toIngest.code) {
            //Ingest code posts
            //var toAdd = ProjectData.projects.map();
            tempCards = [...tempCards, ...ProjectData.projects];
        }

        this.setState( { cards: tempCards } );
    }
    
    renderCards() {
        return this.state.cards.map((project) => {
            console.log("Rendering card");
            //console.log(project);
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
                <div className="card-grid">
                    {this.renderCards()}
                </div>
            </div>
        );
        
    }
}