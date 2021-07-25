import { sign, verify } from 'jsonwebtoken';
import config from '../config'

export const provideToken = (payload) => {
    return sign({ id: payload }, config.SECRET || 'randomsecret', { expiresIn: 60 * 60 * 24 });
};

export const verifyToken = (token) => {
    try {
        const decodedToken = verify(token, config.SECRET || 'randomsecret');
        return decodedToken;
    } catch (err) {
        if (err) throw new Unauthorized('Invalid token');
    }
};