'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res)=> {
    res.status(200).send('Hello world');
});

app.listen(port, ()=> {
    console.log('Listening on port :' + port);
});

app.post('/myFirstBot', (req, resp, next)=> {
    let username = req.body.user_name;
    let botPayload = {
        text: `Hello ${username} ,zhme!`
    };

    if (username !== 'slackbot') {
        return res.status(200).json(botPayload);
    } else {
        return res.status(200).end();
    }
});

