import React, { Component } from 'react';
import { Link } from 'react-router';

import HamLink from './ham_link';

export default class card extends Component {
    
    getCardTypeIcon() {
        var cardType = this.props.details.type;
        var returnClass = null;

        switch(cardType) {
            case "code":
                returnClass = "code-card";
                break;
            case "design":
                returnClass = "design-card";
                break;
            case "medium":
                returnClass = "medium-card";
                break;
        }

        return returnClass;
    }

    render() {
        return (
            <HamLink link={this.props.details.link}>
                <div className={ `card-grid-card black-card `}>
                    <div className="card-content">
                        <strong>{this.props.details.title}</strong>
                        <div>Check if this stretches</div>
                    </div>
                    <div className={`project-type-display ${this.getCardTypeIcon()}`}>

                    </div>
                </div>
            </HamLink>
        );
    }
}