const express = require('express');
const bodyParser = require('body-parser');
const message_ctr = require('./controllers/messages_controller');
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public/build`));

app.get('/api/messages', message_ctr.read);
app.post('/api/messages', message_ctr.create);
app.put('/api/messages/:id', message_ctr.update);
app.delete('/api/messages/:id', message_ctr.delete);

app.listen(port, _=>{
    console.log(`yo what up! Im port ${port} and welcome to my crib`)
})