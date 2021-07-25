import * as authService from '../services/auth';

export const register = async (req, res) => {
    try {
        //const { username, email, password } = req.body;
        console.log(req.body);
        //console.log(username);
        //const user = {
        //    username, email, password
        //};
        //const savedUser = await authService.register(user);
        //res.status(201).json({ success: true, msg: 'Account has been registered ', data: savedUser });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: 'Server Internal Error' })
    }
}

export const login = (req, res) => {
    res.status(200).json({ success: true, msg: 'Account has been logged successfully ' })
}
