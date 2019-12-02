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
          user_id: 1,
          index: '1bta4',
          note_title: 'Note title from db',
          note_preview: 'small preview of the note content',
        }
      ]);
    }),
  ]);
};