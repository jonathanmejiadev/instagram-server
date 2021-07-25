import * as authService from '../services/auth';

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = {
            username,
            email,
            password,
            profilePhoto: null,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        const savedUser = await authService.register(user);
        res.status(201).json({ success: true, data: savedUser });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Server Internal Error'
        });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const access_token = await authService.login(username, password)
        res.status(200).json({
            success: true,
            message: 'Account has been logged in successfully',
            access_token,
            token_type: 'Bearer'
        })
    } catch (err) {
        res.json(err);
    }
};
