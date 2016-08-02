import Moment from 'moment';


export const INGEST_CARDS = 'INGEST_CARDS';

var ProjectData = require('../../resources/data/projects.json');

export function ingestCards(toIngest) {
    console.log("ACTION: Ingest the cards");

    var tempCards = [];
    if(toIngest.medium) {
        //Ingest medium posts
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