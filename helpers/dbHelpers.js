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

  return {
    getUsers,
    getCategories,
    getAppointments,
    getNotes
  }
}