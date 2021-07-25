import bcrypt from 'bcrypt';

export const hash = (password) => {
    let saltRounds = 10;
    return bcrypt.hash(password, saltRounds)
        .then(hash => hash)
        .catch(err => {
            console.log(err);
            throw new Error('Error to hash password');
        });
};


export const compare = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
        .then(result => result)
        .catch(err => {
            console.log(err);
            throw new Error('Error to compare passwords');
        });
};