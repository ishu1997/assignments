const jwt = require('jsonwebtoken');
const zod = require('zod');
const jwtPassword = 'secret';

const schema = zod.object( {
    username :zod.string().email("This is not a valid email."),
    password :zod.string().min(6)
});



/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {

const info = {
    username:username,
    password:password
};
const response  = schema.safeParse(info)
   if(!response.success){
    return null;
   }
   
const token  = jwt.sign({username:username},jwtPassword);

return token;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    try{
   const verified = jwt.verify(token,jwtPassword);
   return verified ? true:false;
    } catch(e){
        return false;
    }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {true|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    const verified = jwt.decode(token,jwtPassword);
    if(verified){
        return true;
    }
    return false;
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
