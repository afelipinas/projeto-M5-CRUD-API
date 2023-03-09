import { openDb } from '../configDB.js';

//para criar uma tabela
export async function createTableSanduiche(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS sanduiche ( cod_sanduiche INTEGER PRIMARY KEY, nome_sanduiche varchar(30), descricao_sanduiche TEXT, preco_sanduiche int, imagem_sanduiche TEXT, qt_sanduiche int)');
    });
}