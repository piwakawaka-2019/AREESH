import _ from 'lodash'

const displayIntro = 0;
const displayWordHint = 1;
const displaySpellWord = 2;
const displaySpellResult = 3;
const displaySuccess = 4;

const initialState = {
    views: {
        displayHome: true,
        displayWhichWord: false,
        displayWordDefinition: false,
        displayLiveSpelling: false,
        displayResults: false,
        displayWinner: false
    }
}

//We may not need  this. Could become part of global state.
export default function currentWord(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_VIEW":
            return {
                ...state,
                views: {
                    ... _.map(state.views, () => false), //the underscore is the lodash object
                    [action.view]:true
                }
            }
        default:
            return state;
    }
}

