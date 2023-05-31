// commonjs
// const express = require('express')

// module
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';

import { checkPhone, getToken, sendTokenToSMS } from './phone.js';

const app = express();

/* Swagger Config */
const swaggerSpec = swaggerJsdoc(options);

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/boards', (req, res) => {
    const result = [
        { number: 1, author: 'asher', title: 'board title 1', content: 'board content 1' },
        { number: 2, author: 'asher', title: 'board title 2', content: 'board content 2' },
        { number: 3, author: 'asher', title: 'board title 3', content: 'board content 3' },
    ];

    res.send(result);
});

app.post('/boards', (req, res) => {
    console.log(req.body);
});

app.post('/tokens/phone', (req, res) => {
    const myPhone = req.body.phone;

    const isValid = checkPhone(myPhone);
    if (isValid === false) return;

    const myToken = getToken();

    sendTokenToSMS(myPhone, myToken);

    res.send('Valid!!');
});

app.listen(3000);
