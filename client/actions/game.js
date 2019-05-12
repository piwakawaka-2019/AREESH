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

export function resetGame() {
    return {
        type: 'RESET_GAME',

    }
}





