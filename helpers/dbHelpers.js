module.exports = knex => {

  const getUsers = (email, password) => {

    return knex
      .select('*')
      .from('users')
      // .where({email: email, password: password})
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
    return knex('users')
      .insert({first_name: user.first_name, last_name: user.last_name, email: user.email, password: user.password})
      .returning('id')
      .then(res => res.rows[0])
  }

  // const addAppointment = (appointment) => {
  //   return knex('appointments')
  //     .insert({})
  // }



  return {
    getUsers,
    getCategories,
    getAppointments,
    getNotes,
    addUser,
    // addAppointment
  }
}