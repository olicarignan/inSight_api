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

  const addUser = (user) => {
    console.log(user)
    return knex('users')
      .insert({first_name: user.first_name, last_name: user.last_name, email: user.email, password: user.password})
      .returning('id')
      .then(res => res.rows[0])
  }

  return {
    getUsers,
    getCategories,
    getAppointments,
    getNotes,
    addUser
  }
}