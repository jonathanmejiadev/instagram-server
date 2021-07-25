import { User } from '../models'
import * as bcrypt from '../libs/bcrypt';

export const register = async (user) => {
    try {
        user.password = await bcrypt.hash(user.password);
        return await User.create(user)
    } catch (err) {
        console.log(err);
        throw err;
    }

}