exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('notes').del(),
    knex.raw('ALTER SEQUENCE notes_id_seq RESTART WITH 1'),
    knex('notes').then(function() {
      // Inserts seed entries
      return knex('notes').insert([
        {
          category_id: 1,
          appointment_id: 1,
          user_id: 1,
          note_title: 'Note title from db',
          note_content: 'here we have the note content thank you it can be as biiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiig as you want it to be', 
          note_preview: 'small preview of the note content',
        }
      ]);
    }),
  ]);
};