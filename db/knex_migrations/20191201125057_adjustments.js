exports.up = function(knex) {

  return knex.schema
  .createTable('users', function(user) {
    user.increments('id').primary();
    user.string('first_name');
    user.string('last_name');
    user.string('email');
    user.string('password')
    user.timestamps(true, true);
  })

  .createTable('categories', function(category) {
    category.increments('id').primary();
    category.string('category_name');
    category.string('colour');
    category.integer('user_id').references('id').inTable('users').notNull().onDelete('cascade')
    category.timestamps(true, true);
  })

  .createTable('appointments', function(appointment) {
    appointment.increments('id').primary();
    appointment.string('appointment_name');
    appointment.string('location');
    appointment.datetime('start_date');
    appointment.datetime('end_date');
    appointment.boolean('allday');
    appointment.boolean('toggle');
<<<<<<< HEAD:db/knex_migrations/20191130202414_database_update.js
<<<<<<< HEAD:db/knex_migrations/20191130202414_database_update.js
=======
    appointment.string('category_name'),
>>>>>>> token:db/knex_migrations/20191201120627_adjustments.js
=======
    appointment.string('category_name'),
>>>>>>> fb4bf0b5aee283110f0b3e3902b77ee26398d6e0:db/knex_migrations/20191201125057_adjustments.js
    appointment.string('appointment_small_note')
    appointment.integer('category_id').references('id').inTable('categories').notNull().onDelete('cascade');
    appointment.integer('user_id').references('id').inTable('users').notNull().onDelete('cascade');
    appointment.timestamps(true, true);
  })

  .createTable('notes', function(note) {
    note.increments('id').primary();
    note.integer('category_id').references('id').inTable('categories').notNull().onDelete('cascade');
    note.integer('appointment_id').references('id').inTable('appointments').notNull().onDelete('cascade');
    note.string('note_title');
    note.text('note_content')
    note.string('note_preview')
    note.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTable('notes')
  .dropTable('appointments')
  .dropTable('categories')
  .dropTable('users');
};