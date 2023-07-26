import jwt from "jsonwebtoken";

export const tokenHelper = {
  sign: (payload, secretKey, options = {}) => {
    return jwt.sign(payload, secretKey, options);
  },
  verify: (token, secretKey) => {
    try {
      return jwt.verify(token, secretKey);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
};
