const knex = require("../db/connection");

function read(location_city, location_state){
    return knex("locations")
        .select("*")
        .whereRaw('LOWER(location_state) like ?', `%${location_state.toLowerCase()}%`)
        .andWhereRaw('LOWER(location_city) like ?', `%${location_city.toLowerCase()}%`)
        .first()
};

//saves locations for specific user
function create(userLocation){
    return knex("usersLocations")
        .insert(userLocation)
        .returning("*")
        .then((createdUserLocation) => createdUserLocation[0]);
}

module.exports = {
    read,
    create,
}