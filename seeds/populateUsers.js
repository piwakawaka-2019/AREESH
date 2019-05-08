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
          user_name: 'johndoe',
          first_name: 'John',
          last_name: 'Doe',
          password_hash: hashSync('Krang', saltRounds),
          image_url: 'https://i.kym-cdn.com/entries/icons/facebook/000/009/754/PhotogenicGuy.jpg'
        },
        {
          id: 2,
          user_name: 'janedoe',
          first_name: 'Jane',
          last_name: 'Doe',
          password_hash: hashSync('Krang', saltRounds),
          image_url: 'https://worldwideinterweb.com/wp-content/uploads/2013/05/funny-looking-mugshots-1.png'
        },
        {
          id: 3,
          user_name: 'houseofmouse',
          first_name: 'Mickey',
          last_name: 'Mouse',
          password_hash: hashSync('Krang', saltRounds),
          image_url: 'http://clipart-library.com/images/M8iAKoBca.gif'
          
        }
      ])
    })
}
