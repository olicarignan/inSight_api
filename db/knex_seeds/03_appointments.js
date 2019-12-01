exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('appointments').del(),
    knex.raw('ALTER SEQUENCE appointments_id_seq RESTART WITH 1'),
    knex('appointments').then(function() {
      // Inserts seed entries
      return knex('appointments').insert([
        {
          appointment_name: 'Psychology',
          location: 'red',
          start_date:'2019-11-28',
          end_date:'2019-11-29',
          category_name: 'Psychology',
          allday:'True',
          appointment_small_note:'this is a small note',
          category_id: 1,
          user_id: 1
        },
      ]);
    }),
  ]);
};