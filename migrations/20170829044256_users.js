exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('user_name').unique()
    table.string('first_name')
    table.string('last_name')
    table.string('password_hash')
    table.string('image_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
