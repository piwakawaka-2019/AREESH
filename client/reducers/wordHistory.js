const initialState = []

//We may not need  this. Could become part of global state.
export default function currentWord(state = initialState, action) {
    switch (action.type) {
      case "SAVE_WORD_DATA":
        return [
            ...state,
            action.wordData
        ]
      default:
        return state;
    }
  }

