import Moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from './card';

//Import Action
import { ingestCards } from '../actions/index';

//var ProjectData = require('../../resources/data/projects.json');

class CardHolder extends Component {


    componentWillMount() {

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

        this.props.ingestCards(toIngest);
    }
    
    renderCards() {
        console.log(this.props.cards);
        if(!this.props.cards || this.props.cards.length == 0) {
            return <div>Loading</div>;
        }
        return this.props.cards.all.map((project) => {
            console.log("Rendering card");
            //console.log(project);
            return (
                    <Card key={project.name} details={project}/>
            );
        });
    }
    
    render() {
        //Check if json data loaded
        //console.log(ProjectData);
        
        return (
            <div>
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