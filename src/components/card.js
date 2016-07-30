import React, { Component } from 'react';

export default class card extends Component {
    render() {
        return (
            <div className={ `card-grid-card black-card `}>
                <div className="card-content">
                    <strong>{this.props.details.title}</strong>
                    <div>Check if this stretches</div>
                </div>
                <div className="project-type-display">
                
                </div>
            </div>
        );
    }
}