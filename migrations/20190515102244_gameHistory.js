exports.up = function(knex, Promise) {
    return knex.schema.createTable('game_history', function (table) {
        table.increments('id').primary()
    
        table.integer('game_id')
     
        table.integer('user_id')
    })
    
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('game_history')
};

