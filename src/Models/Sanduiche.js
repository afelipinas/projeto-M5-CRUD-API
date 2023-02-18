import { openDb } from '../configDB.js';

export async function createTableSanduiche(){
    openDb()
    .then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Sanduiche ( cod_sanduiche INTEGER PRIMARY KEY, nome varchar(30), descricao TEXT, preco int, imagem_sanduiche TEXT)');
    });
}