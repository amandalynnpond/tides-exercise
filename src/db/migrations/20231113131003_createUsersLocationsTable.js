exports.up = function(knex) {
    return knex.schema.createTable("usersLocations", (table) => {
      table.integer("user_id").unsigned().notNullable();
      table
        .foreign("user_id")
        .references("user_id")
        .inTable("users")
        .onDelete("cascade");
      table.integer("location_id").unsigned().notNullable();
      table
        .foreign("location_id")
        .references("location_id")
        .inTable("locations")
        .onDelete("SET NULL")
      table.primary(["user_id", "location_id"]);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("usersLocations");
  };
