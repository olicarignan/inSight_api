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
      // .where({user_id: user_id})
  }

  const addNote = (note) => {
    return knex('notes')
      .insert({category_id: note.category_id, appointment_id: note.appointment_id, note_title: note.note_title, note_content: note.note_content, note_preview: note.note_preview})
      .returning('*')
      .then(res => res.rows[0])
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

  const updateAppointmentTrue = (category_id) => {
    return knex('appointments')
      .where({category_id: category_id})
      .update({toggle: true})
      .returning('*')
  }

  const updateAppointmentFalse = (category_id) => {
    return knex('appointments')
      .where({category_id: category_id})
      .update({toggle: false})
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
              togle: appointment.togle,
               end_date: appointment.end_date, 
               toggle: appointment.toggle,
               allday: appointment.allday,
               appointment_name: appointment.appointment_name,
               category_id: appointment.category_id,
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
    updateAppointmentTrue,
    updateAppointmentFalse,
    updateCategory,
    updateNote,
    deleteAppointment,
    deleteCategory,
    deleteNote,
    getAppointmentsById
  }
}