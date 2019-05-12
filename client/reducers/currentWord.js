const initialState = {
    word: '',
    definition: '',
    // the time string needs to be converted back to a date object upon extraction
    startTime: '',
    attemptDuration: null,
    lettersCorrect:[],
    wordCorrect:false
}

//We may not need  this. Could become part of global state.
export default function currentWord(state = initialState, action) {
    switch (action.type) {
      case "SAVE_WORD":
        return {
            ...state,
            word: action.word
        }
      default:
        return state;
    }
  }

