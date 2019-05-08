exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('meetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetings').insert([
        {
          id: 101,
          meeting_name: 'Boring shite',
          time: new Date().toString(),
          duration: 3600,
          attendees: 2,
          cost: 1000,
        },
        {
          id: 102,
          meeting_name: 'Exciting shite',
          time: new Date().toString(),
          duration: 4400,
          attendees: 3,
          cost: 5000,
        },
        {
          id: 103,
          meeting_name: 'Mediocre shite',
          time: new Date().toString(),
          duration: 1800,
          attendees: 2,
          cost: 1500,
        }
      ])
    })
}