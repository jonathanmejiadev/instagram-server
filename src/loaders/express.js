import morgan from 'morgan';
import helmet from 'helmet';

export default (app) => {
    //middlewares
    app.use(morgan('dev'));
    app.use(helmet());

    //error handlers
};