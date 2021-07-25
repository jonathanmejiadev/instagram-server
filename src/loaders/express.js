import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import indexRouter from '../routes';

export default (app) => {
    //middlewares
    app.use(morgan('dev'));
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    //index router
    app.use(indexRouter)

    //error handlers
};