import { User } from '../models'
import * as bcrypt from '../libs/bcrypt';
import * as jwt from '../libs/jwt';

export const register = async (user) => {
    try {
        user.password = await bcrypt.hash(user.password);
        return await User.create(user)
    } catch (err) {
        console.log(err);
        throw err;
    }

}

export const login = async (username, password) => {
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) throw new Error('Username or password is incorrect');
        const passwordMatch = await bcrypt.compare(password, user.dataValues.password);
        if (!passwordMatch) throw new Error('Username or password is incorrect');
        const access_token = jwt.provideToken(user.uuid)
        return access_token;
    } catch (err) {
        console.log(err);
        throw err;
    }
}