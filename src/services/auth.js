import { User } from '../models'

export const register = async (user) => {
    try {

        return await User.create(user)
    } catch (err) {
        console.log(err);
        throw err;
    }

}