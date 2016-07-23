import React, { Component } from 'react';

export default class card extends Component {
    render() {
        return (
            <div className={ `card-grid-card ${this.props.details.type == 'code' ? 'red-card' : 'blue-card' } `}>
                <strong>{this.props.details.title}</strong>
                <div>Check if this stretches</div>
            </div>
        );
    }
}