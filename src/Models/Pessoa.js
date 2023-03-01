import { openDb } from '../configDB.js';

//para criar uma tabela
export async function createTablePessoa(){
    openDb()
    .then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS pessoa ( id INTEGER PRIMARY KEY, nome TEXT, email TEXT, senha TEXT )') 
    });
}