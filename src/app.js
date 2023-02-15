import {openDb} from './configDb.js';
import {createTable} from './createTable.js';


import express from 'express';

const app = express();
app.use(express.json());

openDb();

app.get('/', (req, res) => {
    res.send('Olá mundo!');
});
app.post('/pessoa', (req, res) => {
    console.log(req.body);
    res.json({
        'statusCode': 200
    });
});

app.listen(3333, () => {
console.log(`Servidor rodando na porta: http://localhost:3333`);

})