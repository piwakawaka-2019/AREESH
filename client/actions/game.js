import { getUserGames, saveGame} from '../apis/game'

export function changeView(view) {
    return {
        type: 'CHANGE_VIEW',
        view
    }
}

export function setWord(word) {
    return {
        type: 'SET_WORD',
        word
    }
}

export function setDefinitions(definitions) {
    return {
        type: 'SET_DEFINITIONS',
        definitions
    }
}

export function setStartTime(startTime) {
    return {
        type: 'SET_START_TIME',
        startTime
    }
}

export function setDuration(duration) {
    return {
        type: 'SET_DURATION',
        duration
    }
}

export function setWordCorrect(wordCorrect) {
    return {
        type: 'SET_WORD_CORRECT',
        wordCorrect
    }
}

export function resetGame(view) {
    return {
        type: 'RESET_GAME',
        view

    }
}

export function setSpellingAttempt(spellingAttempt) {
    return {
        type: 'SET_SPELLING_ATTEMPT',
        spellingAttempt
    }
}

export function saveWord(wordData){
    return {
        type: 'SAVE_WORD_DATA',
        wordData
    }
}

export function saveUserGames(gameHistory){
    return {
        type: 'SAVE_USER_GAMES',
        gameHistory
    }
}

export function clearUserGames(){
    return {
        type: 'CLEAR_USER_GAMES',
    }
}

export function fetchUserGames() {
    return dispatch => {
        return getUserGames()
            .then((gameHistory) => {
             
                dispatch(saveUserGames(gameHistory))
            })
            .catch(err => {
                console.log(err);
                dispatch(loginError(err.response.body.message))
            })
    }
}


export function storeUserGame (game) {
    return dispatch => {
      return saveGame(game)
        .then((message) => {
         
        })
        .catch(err => {
          dispatch(loginError(err.response.body.message))
        })
    }
  }





