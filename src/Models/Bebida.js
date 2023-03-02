import { openDb } from '../configDB.js';

//para criar uma tabela
export async function createTableBebida(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS bebida (cod_bebida INTEGER PRIMARY KEY, nome_bebida varchar(30), descricao_bebida TEXT, preco_bebida INTEGER, imagem_bebida TEXT )')
    })
}