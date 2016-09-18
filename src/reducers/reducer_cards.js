import { INGEST_CARDS } from '../actions/index';

const INITIAL_STATE = {
    all: [],
    project: null
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case INGEST_CARDS:
            return { project: state.project, all: action.payload};
        default: 
            return state;
    }
}