import app from '../../app.js';
import jwt from 'jsonwebtoken';
import { keyGen } from './keyGen.js';

export function jwtPayload(user) {
    const JWT_SECRET = process.env.JWT_SECRET;

    const payload = {
        id: user.id,
        user: user.username,
        role: user.role
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    return token
}
