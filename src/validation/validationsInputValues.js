const { addPassengerSchema } = require('./schemas');
  
const validateNewProducts = (name) => {
  const { error } = addPassengerSchema
    .validate({ name });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};
module.exports = {
  validateNewProducts,
};