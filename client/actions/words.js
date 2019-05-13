import { removeUser } from '../utils/auth'

function saveCurrentWord (wordData) {
  return {
    type: 'SAVE_WORD_DATA',
    wordData
  }
}

function saveWords (words) {
  return {
    type: 'SAVE_WORDS',
    words
  }
}
  
//not used yet
loading = () => {
return {
    type: 'LOADING'
  }
}

//not used yet
doneLoading = () => {
  return {
    type: 'DONE_LOADING'
  }
}


//just an example of thunk async call
export function getWordsFromAPI () {
  return dispatch => {
    document.location = '/#/'
    dispatch(loading())
    //getWords() will be an api call
    dispatch(doneLoading())
  }
}
