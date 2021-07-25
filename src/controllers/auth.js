
export const register = (req, res) => {
    res.status(201).json({ success: true, msg: 'Account has been registered ' })
}

export const login = (req, res) => {
    res.status(200).json({ success: true, msg: 'Account has been logged successfully ' })
}