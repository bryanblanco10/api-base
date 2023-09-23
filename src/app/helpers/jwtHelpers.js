import { sign } from "jsonwebtoken";

export function generateToken(user, secret, expires){
    return sign(user, secret, {expiresIn: expires})
}