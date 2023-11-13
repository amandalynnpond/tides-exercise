const knex = require("../db/connection");

function read(location_city, location_state){
    return knex("locations")
        .select("*")
        .where({ location_city } && { location_state })
        .first()
};

module.exports = {
    read,
}