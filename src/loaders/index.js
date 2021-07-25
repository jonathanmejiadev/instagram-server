import express from 'express';
import expressLoader from './express';

const app = express();

const PORT = process.env.PORT || 3000;

export default () => {
    expressLoader(app);

    app.listen(PORT, () => {
        console.log(`Server listening on port ${3000}`);
    });
};

