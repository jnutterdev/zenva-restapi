const express = require('express');
const { request } = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {

    response.send('Hello world');
});

app.get('/test', (request, response) => {

    response.send('Yes, this is a test.');
});

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});