const axios = require('axios');

const getAdvice = async () => {
  const response = await axios.get('https://api.adviceslip.com/advice');
  return response.data.slip.advice;
};

module.exports = { getAdvice };