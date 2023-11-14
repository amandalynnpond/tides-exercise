const knex = require("../db/connection");

function read(user_id){
    return knex("users")
        .select("*")
        .where({ user_id })
        .first()
};

function list(user_id){
    return knex("usersLocations")
        .select("*")
        .where({ user_id })
        .orderBy("location_id")
};

module.exports = {
    read,
    list
}