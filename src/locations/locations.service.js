const knex = require("../db/connection");

function read(location_city, location_state){
    return knex("locations")
        .select("*")
        .where({ location_state })
        .andWhere({ location_city })
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