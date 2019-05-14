saveGame, getGameHistory

const connection = require('./connection')

function saveGame({ word, definition, start_time, attempt_duration, word_correct, spelling_attempt }, testDb) {
    const db = testDb || connection
  
    return db('meetings')
      .insert({
        meeting_name: meetingName,
        time: time,
        duration: duration,
        attendees: attendees,
        cost: cost
      })
  }

  function getGameHistory(user_id, testDb) {
    const db = testDb || connection
  
    return db('attendees')
      .join('meetings', 'attendees.meeting_id', '=', 'meetings.id')
      .where('attendees.user_id', '=', user_id)
      .select()
  }