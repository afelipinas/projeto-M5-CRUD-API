import { openDb } from '../configDB.js';

//para criar uma tabela
export async function createTableFuncionario(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS funcionario (cod_funcionario INTEGER PRIMARY KEY NOT NULL, nome_funcionario varchar(50) NOT NULL, sobrenome_funcionario varchar(50) NOT NULL, cargo_funcionario varchar(30) NOT NULL, periodo_funcionario varchar(50) )')
    })
}