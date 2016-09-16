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

    getBackgroundImage() {
        if(this.props.details.image != null) {
            return { 
                backgroundImage: 'url(/resources/images/card_backgrounds/' + this.props.details.image + ')',
                backgroundSize: '100% 100%'
            }
        } else {
            return { 
                backgroundImage: 'url(/resources/icons/' + this.props.details.type + '-icon.png)',
                backgroundSize: '100% 100%'
             }
        }
    }

    render() {
        return (
            <HamLink link={this.props.details.link}>
                <div className="card-grid-card">
                    <div className="card-grid-content black-card">
                        <div className="card-content">
                            <h4>{this.props.details.title}</h4>
                        </div>
                        <div className={`project-type-display ${this.getCardTypeIcon()}`}>
                        </div>
                    </div>
                    <div className="card-grid-content-hidden" style={this.getBackgroundImage()}>
                    </div>
                </div>
            </HamLink>
        );
    }
}