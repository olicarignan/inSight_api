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
          note_title: 'Note title from db',
          note_content: 'here we have the note content thank you it can be as biiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiig as you want it to be', 
          note_preview: 'small preview of the note content',
        },
        {
          category_id: 2,
          appointment_id: 2,
          note_title: 'another note from the databse',
          note_content: 'here we have the note content thank you it can be as biiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiig as you want it to be', 
          note_preview: 'small preview of the note content hello',
        },
        {
          category_id: 2,
          appointment_id: 3,
          note_title: 'another another note from the databse',
          note_content: 'here we have the note content thank you it can be as biiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiig as you want it to be', 
          note_preview: 'small preview of the note content hello hi',
        },
        {
          category_id: 3,
          appointment_id: 3,
          note_title: 'another another annother note from the databse',
          note_content: 'here we have the note content thank you it can be as biiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiig as you want it to be', 
          note_preview: 'small preview of the note content hello hi',
        },
        {
          category_id: 2,
          appointment_id: 3,
          note_title: 'another another another annother note from the databse',
          note_content: 'here we have the note content thank you it can be as biiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiig as you want it to be', 
          note_preview: 'small preview of the note content hello hi',
        },
      ]);
    }),
  ]);
};