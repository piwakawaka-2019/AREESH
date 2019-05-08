const { hashSync } = require('bcrypt')
const saltRounds = 10

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'John',
          last_name: 'Doe',
          user_name: 'johndoe',
          hourly_wage: 100,
          password_hash: hashSync('Krang', saltRounds),
        },
        {
          id: 2,
          first_name: 'Jane',
          last_name: 'Doe',
          user_name: 'janedoe',
          hourly_wage: 100,
          password_hash: hashSync('Krang', saltRounds),
        },
        {
          id: 3,
          first_name: 'Mickey',
          last_name: 'Mouse',
          user_name: 'houseofmouse',
          hourly_wage: 100,
          password_hash: hashSync('Krang', saltRounds),
        }
      ])
    })
}
