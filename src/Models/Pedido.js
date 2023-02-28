import { openDb } from '../configDB.js';


//para criar uma tabela
export async function createTablePedido(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS pedido(cod_pedido INTEGER PRIMARY KEY, cod_sanduiche INTEGER, cod_bebida INTEGER, cod_cliente INTEGER, valor_total INTEGER, status_pedido INTEGER, data_pedido datetime)')
    })
};