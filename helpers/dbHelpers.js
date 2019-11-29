module.exports = knex => {

  const getUsers = () => {
    return knex
      .select('*')
      .from('users')
  }

  const getCategories = (user_id) => {
    console.log(user_id)
    return knex
      .select('*')
      .from('categories')
      .where({user_id: user_id})
      
  }
  const addCategories = (category) => {
    return knex('categories')
      .insert({user_id: category.user_id, category_name: category.category_name, colour: category.colour})
      .returning('*')
  }
  const getAppointments = () => {
    return knex
      .select('*')
      .from('appointments')
      .where({user_id: user_id})
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
  }

  const getUsersLogin = (email) => {
    return knex
      .select('*')
      .from('users')
      .where({email: email})
  }

  const addAppointment = (appointment) => {
    return knex('appointments')
      .insert({start_date: appointment.start_date, 
               start_time: appointment.start_time,
               end_date: appointment.end_date, 
               end_time: appointment.end_time,
               appointment_name: appointment.appointment_name,
               category_id: appointment.category_id,
               location: appointment.location,
               user_id: appointment.user_id,
               appointment_small_note: appointment.appointment_small_note
               })
      .returning('*')
  }




  return {
    getUsers,
    getCategories,
    getAppointments,
    getNotes,
    addUser,
    getUsersLogin,
    addAppointment,
    addNote,
    addCategories
  }
}