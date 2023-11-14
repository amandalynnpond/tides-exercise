const knex = require("../db/connection");

function read(user_id){
    return knex("users")
        .select("*")
        .where({ user_id })
        .first()
};

function list(user_id){
    return knex("usersLocations as ul")
        .join("locations as l", "ul.location_id", "l.location_id")
        .select("l.*")
        .where({"ul.user_id": user_id})
        .orderBy("location_id")
};

module.exports = {
    read,
    list
}