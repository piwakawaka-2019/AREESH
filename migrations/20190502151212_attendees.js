exports.up = function(knex, Promise) {
    return knex.schema.createTable('attendees', function (table) {
        table.increments('id').primary()
        // foreign key representing a meeting they have attanded
        table.integer('meeting_id')
        // foreign key representing a user
        table.integer('user_id')
    })
    
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('attendees')
};

