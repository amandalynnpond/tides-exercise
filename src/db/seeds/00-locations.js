const locations = require("./00-locations.json");

exports.seed = function (knex) {
  return knex
  //resets primary key values and deletes old data
    .raw("TRUNCATE TABLE locations RESTART IDENTITY CASCADE")
  //inserts locations data from 00-locations.json
    .then(() => knex("locations").insert(locations));
};
