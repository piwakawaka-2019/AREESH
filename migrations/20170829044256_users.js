exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('user_name').unique()
    table.decimal('hourly_wage')
    table.string('password_hash')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
