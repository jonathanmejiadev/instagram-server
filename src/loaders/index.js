import express from 'express';
import expressLoader from './express';

const app = express();

const PORT = process.env.PORT || 3000;

export default () => {
    expressLoader(app);

    app.get('/', (req, res) => {
        console.log('hello');
        res.send('Instagram');
    });

    app.listen(PORT, () => {
        console.log(`Server listening on port ${3000}`);
    });
};

