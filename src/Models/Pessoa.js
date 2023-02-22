import { openDb } from '../configDB.js';

export async function createTablePessoa(){
    openDb()
    .then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, email TEXT, senha TEXT )') 
    });
}