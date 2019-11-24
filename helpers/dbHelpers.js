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

  return {
    getUsers,
    getCategories,
  }
}