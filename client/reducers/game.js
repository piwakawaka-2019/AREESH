import _ from 'lodash'

const displayIntro = 0;
const displayWordHint = 1;
const displaySpellWord = 2;
const displaySpellResult = 3;
const displaySuccess = 4;

const initialState = {
    views: {
        displayIntro: true,
        displayWordHint: false,
        displaySpellWord: false,
        displaySpellResult: false,
        displaySuccess: false
    }
}

//We may not need  this. Could become part of global state.
export default function currentWord(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_VIEW":
            return {
                ...state,
                views: {
                    ... _.map(state.views, () => false),
                    [action.view]:true
                }
            }
        default:
            return state;
    }
}

