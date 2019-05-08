exports.up = function(knex, Promise) {
    return knex.schema.createTable('meetings', function (table) {
        table.increments('id').primary()
        table.string('meeting_name')
        // timestamp representing start time of the meeting, saved as a string
        table.string('time')
        // duration of the meeting, in seconds
        table.integer('duration')
        // number of people at the meeting
        table.integer('attendees')
        // cost of meeting in dollars
        table.decimal('cost')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('meetings')
};
