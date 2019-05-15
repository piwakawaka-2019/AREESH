const initialState = []

//We may not need  this. Could become part of global state.
export default function currentWord(state = initialState, action) {
    switch (action.type) {
        case "SAVE_USER_GAMES":
            return action.gameHistory
        case "CLEAR_USER_GAMES":
            return initialState
        default:
            return state;
    }
}

