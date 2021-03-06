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

  const getAppointments = (user_id) => {
    return knex
      .select('*')
      .from('appointments')
      .where({user_id: user_id})
  }

  
  const updateCategory = (category_id) => {
    return knex('categories')
      .where({id: category_id})
      .update({ category_name: category.category_name, colour: category.colour})
  }
  
  const deleteCategory = (category_id) => {
    return knex('categories')
      .where({id: category_id})
      .del()

  }

  const getNotes = (user_id) => {
    return knex
      .select('*')
      .from('notes')
      .where({user_id: user_id})
  }

  const getUsersNotesForCategory = (user_id, category_id) => {
    return knex
      .select('*')
      .from('notes')
      .where({user_id: user_id, category_id: category_id})
  }

  const addNote = (note_title, note, category_id, note_preview, note_index, user_id) => {
    return knex.raw(
    `insert into notes (note_title, category_id, note_content, note_preview, index, user_id)
     values (:note_title, :category_id, :note, :note_preview, :note_index, :user_id)
     on conflict (index)
     do update
     set note_content = :note
     returning note_content;`
     ,{note_title, category_id, note, note_preview, note_index, user_id})
  }

  const updateNote = (note_id) => {
    return knex('notes')
      .where({id: note_id})
      .update({category_id: note.category_id, appointment_id: note.appointment_id, note_title: note.note_title, note_content: note.note_content, note_preview: note.note_preview})
  }

  const deleteNote = (note_id) => {
    return knex('notes')
      .where({id: note_id})
      .del()
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

  const updateAppointmentToggle = (category_id, toggle) => {
    return knex('appointments')
      .where({category_id: category_id})
      .update({toggle: toggle})
      .returning('*')
  }

  const getAppointmentsById = (category_id) => {
    return knex
      .select('*')
      .from('appointments')
      .where({category_id: category_id})
  }

  const addAppointment = (appointment) => {
    console.log('dbhelper', appointment)
    
    return knex('appointments')
      .insert({start_date: appointment.start_date, 
               end_date: appointment.end_date, 
               appointment_name: appointment.appointment_name,
               category_id: appointment.category_id,
               category_name: appointment.category_name,
               toggle: appointment.toggle,
               location: appointment.location,
               user_id: appointment.user_id,
               appointment_small_note: appointment.appointment_small_note
               })
      .returning('*')
  }

  const deleteAppointment = (appointment_id) => {
    return knex('appointments')
      .where({id: appointment_id})
      .del()
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
    addCategories,
    updateAppointmentToggle,
    updateCategory,
    updateNote,
    deleteAppointment,
    deleteCategory,
    deleteNote,
    getAppointmentsById,
    getUsersNotesForCategory
  }
}