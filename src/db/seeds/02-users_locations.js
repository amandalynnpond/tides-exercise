exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('usersLocations').del()
  await knex('usersLocations').insert([
    {user_id: 1, location_id: 1}
  ]);
};
