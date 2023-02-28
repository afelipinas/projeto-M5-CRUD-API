import { openDb } from '../configDB.js';


//para criar uma tabela
export async function createTableCliente(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS cliente (cod_cliente INTEGER PRIMARY KEY, nome varchar(50), email TEXT, senha INTEGER)')
    })
};