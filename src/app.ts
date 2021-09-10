import express from 'express';
import {Request, Response, NextFunction} from 'express';
import "reflect-metadata";
import {createConnection} from "typeorm";
import router from "./router";

const app = express();

app.get('/', (request:Request, response:Response, next: NextFunction) => {
    response.send('hello');
});

app.listen(80,()=>{
    console.log('start')
})

app.use('/', router);


createConnection().then(async connection => {
    console.log('database connected');

}).catch(error => console.log(error));