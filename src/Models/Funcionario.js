import { openDb } from '../configDB.js';

//para criar uma tabela
export async function createTableFuncionario(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS funcionario (cod_funcionario INTEGER PRIMARY KEY, nome_funcionario varchar(50), sobrenome_funcionario varchar(50), cargo_funcionario varchar(30), periodo_funcionario varchar(30))') 
    })
};