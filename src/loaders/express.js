import morgan from 'morgan';
import helmet from 'helmet';
import indexRouter from '../routes';

export default (app) => {
    //middlewares
    app.use(morgan('dev'));
    app.use(helmet());

    //index router
    app.use(indexRouter)

    //error handlers
};