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
          start_time: '2017-04-20 19:33:56.774+03',
          end_time: '2017-04-20 20:33:56.774+03', 
          category_id: 1,
          user_id: 1
        },
      ]);
    }),
  ]);
};