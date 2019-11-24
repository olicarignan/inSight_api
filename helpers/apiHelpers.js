module.exports = () => {

  const getApiResult = (url) => {
    return axios.get({url})
  }
  
  return {
    getApiResult, 
  }
}