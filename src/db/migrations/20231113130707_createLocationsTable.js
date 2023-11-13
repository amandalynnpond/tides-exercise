exports.up = function(knex) {
    return knex.schema.createTable("locations", (table) => {
      table.increments("location_id").primary().notNullable();
      table.string("location_city").notNullable();
      table.string("location_state").notNullable();
      table.time("high_tide").notNullable();
      table.time("low_tide").notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("locations")
  };
  
