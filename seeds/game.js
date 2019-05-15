
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        { id: 1, user_id: 3, word: 'apple', definition: "crunchy", start_time: 'Mon 13 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 8, word_correct: true, spelling_attempt: 'apple' },
        { id: 2, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Mon 13 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 3, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Mon 13 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 4, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Mon 13 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 6, user_id: 3, word: 'apple', definition: "crunchy", start_time: 'Mon 13 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 8, word_correct: true, spelling_attempt: 'apple' },
        { id: 7, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Tue 14 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 8, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Tue 14 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 9, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Wed 15 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 10, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Wed 15 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 11, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Wed 15 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 12, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Wed 15 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 13, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Wed 15 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 14, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Wed 15 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 15, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Thu 16 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 16, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Thu 16 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 17, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Thu 16 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 18, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Thu 16 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 19, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Thu 16 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 20, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Thu 16 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 21, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Thu 16 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 22, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Thu 16 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 23, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Thu 16 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 24, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Thu 16 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 25, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Thu 16 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 26, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Thu 16 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' },
        { id: 27, user_id: 3, word: 'banana', definition: "yellow", start_time: 'Thu 16 May 2019 16:13:12 GMT+1200 (New Zealand Standard Time)', attempt_duration: 9, word_correct: true, spelling_attempt: 'bananana' }
        
      ]);
    });
};


// table.increments('id').primary()
// table.string('word')

// table.string('definition')

// table.string('start_time')

// table.integer('attempt_duration')

// table.boolean('word_correct')

// table.string('spelling_attempt'