import 'reflect-metadata';
import 'express-async-errors';
import '@shared/infra/typeorm';
import 'dotenv/config';
import '@shared/container';
import { app } from './app';
import { dataSource } from '../typeorm';

dataSource.initialize().then(() => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server started on port ${process.env.SERVER_PORT}`);
    });
});
