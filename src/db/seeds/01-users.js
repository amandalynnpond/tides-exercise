exports.seed = function(knex) {
  // Deletes all existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Pond'},
        {username: 'Oswin'},
      ]);
    });
};
