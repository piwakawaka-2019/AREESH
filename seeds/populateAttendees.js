exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('attendees').del()
    .then(function () {
      // Inserts seed entries
      return knex('attendees').insert([
        {
          meeting_id: 101,
          user_id: 1
        },
        {
          meeting_id: 101,
          user_id: 3
        },
        {
          meeting_id: 102,
          user_id: 1
        },
        {
          meeting_id: 102,
          user_id: 2
        },
        {
          meeting_id: 102,
          user_id: 1
        },
        {
          meeting_id: 103,
          user_id: 2
        },
        {
          meeting_id: 103,
          user_id: 3
        },
      ])
    })
}
