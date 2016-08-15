import axios from 'axios';
import Moment from 'moment';


export const INGEST_CARDS = 'INGEST_CARDS';

var ProjectData = require('../../resources/data/projects.json');
var MediumData = require('../../resources/data/medium.json');

export function ingestCards(toIngest = 10) {
    console.log("ACTION: Ingest the cards");

    var tempCards = [];
    if(toIngest.medium) {
        //Ingest medium posts
        //const request = axios.get(`https://medium.com/feed/@sirhamy`);
        //console.log(request);  
        tempCards = [...tempCards, ...MediumData.projects]; 
    }

    if(toIngest.code) {
        //Ingest code posts
        //var toAdd = ProjectData.projects.map();
        tempCards = [...tempCards, ...ProjectData.projects];
    }

    console.log("tempcards");
    console.log(tempCards);

    tempCards.sort((a, b) => {

        return new Moment(b.date) - new Moment(a.date);
    });

    return {
        type: INGEST_CARDS,
        payload: tempCards
    };
};