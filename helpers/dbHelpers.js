module.exports = knex => {

  const getUsers = () => {
    return knex
      .select('*')
      .from('users')
  }

  const getCategories = () => {
    return knex
      .select('*')
      .from('categories')   
  }

  const getAppointments = () => {
    return knex
      .select('*')
      .from('appointments')
  }

  const getNotes = () => {
    return knex
      .select('*')
      .from('notes')
  }

  const addNote = (note) => {
    return knex('notes')
      .insert({category_id: note.category_id, appointment_id: note.appointment_id, note_title: note.note_title, note_content: note.note_content, note_preview: note.note_preview})
      .returning('*')
      .then(res => res.rows[0])
  }

  const addUser = (user) => {
    return knex('users')
      .insert({first_name: user.first_name, last_name: user.last_name, email: user.email, password: user.password})
      .returning('*')
<<<<<<< HEAD
      .then(res => res.rows[0])
=======
>>>>>>> master
  }

  const getUsersLogin = (email) => {
    return knex
      .select('*')
      .from('users')
      .where({email: email})
  }

  const addAppointment = (appointment) => {
    return knex('appointments')
      .insert({})
  }



  return {
    getUsers,
    getCategories,
    getAppointments,
    getNotes,
    addUser,
    getUsersLogin,
    addAppointment,
    addNote
  }
}