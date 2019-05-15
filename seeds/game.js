
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        {id: 1, user_id: 3, word: 'apple', definition:"crunchy", start_time:'22/2/2019 17:12', attempt_duration: 8, word_correct:true, spelling_attempt:'apple'},
        {id: 2, user_id: 3, word: 'banana', definition:"yellow", start_time:'30/2/2019 17:23', attempt_duration: 9, word_correct:false, spelling_attempt:'bananana'},
        {id: 3, user_id: 1, word: 'elephant', definition:"large", start_time:'25/4/2019 14:12', attempt_duration: 5, word_correct:true, spelling_attempt:'elephant'},
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