import _ from 'lodash'

const displayIntro = 0
const displayWordHint = 1
const displaySpellWord = 2
const displaySpellResult = 3
const displaySuccess = 4

const initialState = {
    views: {
        displayHome: true,
        displayWhichWord: false,
        displayWordDefinition: false,
        displayLiveSpelling: false,
        displayResults: false,
        displayWinner: false
    },
    wordData: {
        word: "",
        definitions:
            [],
        // the time string needs to be converted back to a date object upon extraction
        startTime:
            "",
        attemptDuration: null,
        // lettersCorrect: [], May not need?
        wordCorrect: false,
        spellingAttempt: "",
        LiveSpellingOn: false
    }
}

//We may not need  this. Could become part of global state.
export default function game(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_VIEW":
            return {
                ...state,
                views: {
                    ..._.map(state.views, () => false), //the underscore is the lodash object
                    [action.view]: true
                }
            }
        case "SET_WORD":
            return {
                ...state,
                wordData: {
                    ...state.wordData,
                    word: action.word
                }
            }
        case "SET_DEFINITIONS":
            return {
                ...state,
                wordData: {
                    ...state.wordData,
                    definitions: action.definitions
                }
            }
        case "SET_START_TIME":
            return {
                ...state,
                wordData: {
                    ...state.wordData,
                    startTime: action.startTime
                }
            }
        case "SET_DURATION":
            return {
                ...state,
                wordData: {
                    ...state.wordData,
                    attemptDuration: action.attemptDuration
                }
            }
        case "SET_WORD_CORRECT":
            return {
                ...state,
                wordData: {
                    ...state.wordData,
                    wordCorrect: action.wordCorrect
                }
            }
        case "RESET_GAME":
            return {
                ...initialState,
                views: {
                    ..._.map(state.views, () => false), //the underscore is the lodash object
                    [action.view]: true
                }
            }
        case "SET_SPELLING_ATTEMPT":
            return {
                ...state,
                wordData: {
                    ...state.wordData,
                    spellingAttempt: action.spellingAttempt
                }
            }
        default:
            return state;
        
    }
}

