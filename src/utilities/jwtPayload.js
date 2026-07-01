import app from '../../app.js';
import jwt from 'jsonwebtoken';
import keyGen from './keyGen.js';

function jwtPayload(user) {
    const JWT_SECRET = keyGen();

    const payload = {
        id: user.id,
        user: user.username,
        role: user.role
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

export default jwtPayload;