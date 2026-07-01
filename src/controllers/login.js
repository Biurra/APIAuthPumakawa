import app from '../../app.js';
import * as utils from '../utilities/uIndex.js';
import databaseExample from '../utilities/dbExample.js';

export async function login(req, res) {
    const { user, pwd } = req.body;

    if (!user) {
        return res.status(401).json({ text: 'Invalid credentials' });
    }

    utils.jwtPayload(user);

    res.json({ text: 'Login succesful' });
}

export async function loginAuth(req, res) {
    //TO DO
    res.json({ text: 'User authenticated' });
}