import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import envVars from '../config/env';

const generateToken = (payload: JwtPayload, expiresIn: string): string => {
  const token = jwt.sign(payload, envVars.JWT.JWT_ACCESS_SECRET, {
    expiresIn,
  } as SignOptions);
  return token;
};

const verifyToken = (token: string) => {
  const verifyToken = jwt.verify(token, envVars.JWT.JWT_ACCESS_SECRET);
  return verifyToken;
};

export { generateToken, verifyToken };
