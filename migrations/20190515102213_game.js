exports.up = function(knex, Promise) {
    return knex.schema.createTable('game', function (table) {
        table.increments('id').primary()
        table.string('word')

        table.string('definition')
        
        table.string('start_time')
  
        table.integer('attempt_duration')

        table.boolean('word_correct')

        table.string('spelling_attempt')

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('game')
};
