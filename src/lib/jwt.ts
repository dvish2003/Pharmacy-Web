import jwt from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET as string;


export function signToken (payload:object,expireIn = '3h') {
  return jwt.sign(payload, SECRET, { expiresIn: expireIn });
}


export function verifyToken (token:string) {
  return jwt.verify(token, SECRET);
}