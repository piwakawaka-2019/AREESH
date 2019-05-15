
const connection = require('./connection')

function saveUserGame({ userID, word, definitions, startTime, attemptDuration, wordCorrect, spellingAttempt }, testDb) {
    const db = testDb || connection
    return db('game')
      .insert({
        user_id: userID,
        word,
        definition: definitions[0],
        start_time: startTime,
        attempt_duration: attemptDuration,
        word_correct: wordCorrect,
        spelling_attempt: spellingAttempt
      })
  }

  function getUserGames(user_id, testDb) {
    const db = testDb || connection
  
    return db('game')
      .where('game.user_id', '=', user_id)
      .select(
        'user_id as userID', 
        'word', 
        'definition', 
        'start_time as startTime', 
        'attempt_duration as attemptDuration',
        'word_correct as wordCorrect',
        'spelling_attempt as spellingAttempt',
      )
  }

  module.exports = {
    saveUserGame,
    getUserGames
  }
