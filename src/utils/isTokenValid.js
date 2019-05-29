import jwt from 'jsonwebtoken';

/**
 * Validate user token
 * @param {object} token
 */
const isTokenValid = async (token) => {
  try {
    await jwt.verify(token, 'questioner40');
    return true;
  } catch (error) {
    return false;
  }
};

export default isTokenValid;
