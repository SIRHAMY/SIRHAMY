import Moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from './card';
import HamLink from './ham_link';

//Import Action
import { ingestCards } from '../actions/index';

//var ProjectData = require('../../resources/data/projects.json');

class CardHolder extends Component {


    componentWillMount() {

        //Ingest data

        var toIngest = {
            "medium": true,
            "code": true,
            "design": true
        }

        console.log("ComponentWillMount");
        this.props.ingestCards(toIngest);
    }
    
    renderCards() {
        console.log(this.props.cards);
        if(!this.props.cards || this.props.cards.length == 0) {
            return <div>Loading</div>;
        }
        
        /*
        return this.props.cards.all.map((project) => {
            console.log("Rendering card");
            //console.log(project);
            return (
                    <Card key={project.name} details={project}/>
            );
        });
        */

        var mediumIn = false;
        var codeIn = false;
        var designIn = false;
        
        switch(this.props.currPage) {
            case "blog":
                mediumIn = true;
                break;
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

        var cardsToDisplay = [];

        for(var index in this.props.cards.all) {
            var currCard = this.props.cards.all[index];

            if( ( codeIn && currCard.type == "code" ) || 
                ( designIn && currCard.type == "design") || 
                (mediumIn && currCard.type == "medium")) {
                cardsToDisplay.push(currCard);
            }
        }

        return cardsToDisplay.map((project) => {
            console.log("Rendering card");
            //console.log(project);
            return (
                    <Card key={project.name} details={project}/>
            );
        });
    }

    getHeader() {
        if(this.props.currPage == "blog") {
            return(
                <div className="no-link-style">
                    <a href="http://blog.sirhamy.com">
                        <div className="card-grid-header center-horizontally"
                            style={{fontSize: 15}}>
                            <h4>Visit my Blog</h4>
                        </div>
                    </a>
                </div>
            )
        }

        return '';
    }
    
    render() {
        //Check if json data loaded
        //console.log(ProjectData);
        
        return (
            <div>
                {this.getHeader()}
                <div className="card-grid">
                    {this.renderCards()}
                </div>
            </div>
        );
        
    }
}

//Put the state on the props
function mapStateToProps(state) {
    return{ cards: state.cards };
}

export default connect(mapStateToProps, {ingestCards: ingestCards})(CardHolder);