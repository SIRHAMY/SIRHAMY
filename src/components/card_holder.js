import React, { Component } from 'react';

import Card from './card';

var ProjectData = require('../../resources/data/projects.json');

export default class CardHolder extends Component {
    render() {
        //Check if json data loaded
        console.log(ProjectData);
        return (
            <div>
              This is a card holder.
              <Card />
            </div>
        );
    }
}