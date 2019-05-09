const {
  generatePasswordHash
} = require('../auth/hash')

const connection = require('./connection')


function createUser(user_name, first_name, last_name, password, profilePictureUrl, testDb) {
  const db = testDb || connection
  return generatePasswordHash(password)
    .then(hash => {
      return db('users').insert({
        user_name: user_name,
        first_name: first_name,
        last_name: last_name,
        password_hash: hash,
        image_url: profilePictureUrl
      })
    })
}

function userExists(user_name, testDb) {
  const db = testDb || connection

  return db('users')
    .where('user_name', user_name)
    .then(users => users.length > 0)
}

function getUsers(testDb) {
  const db = testDb || connection

  return db('users')
    .select()
}

function getUserByUsername(user_name, testDb) {
  console.log('user_name: ', user_name);

  const db = testDb || connection
  return db('users')
    .where('user_name', user_name)
    .first()
}



module.exports = {
  createUser,
  userExists,
  getUserByUsername,
  getUsers
}
