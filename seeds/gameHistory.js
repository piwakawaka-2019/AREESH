
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game_history').del()
    .then(function () {
      // Inserts seed entries
      return knex('game_history').insert([
        {id: 1, user_id: 2, game_id: 3},
        {id: 2, user_id: 2, game_id: 2},
        {id: 3, user_id: 3, game_id: 1}
      ]);
    });
};
