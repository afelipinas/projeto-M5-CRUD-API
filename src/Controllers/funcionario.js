import { openDb } from "../configDB.js";
import {createTableFuncionario} from "../Models/Funcionario.js";

createTableFuncionario();

export async function getFuncionarios(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM funcionario')
        .then(funcionarios=> res.json(funcionarios))
    });

}

export async function getFuncionario(req, res){
    let cod_funcionario = req.body.cod_funcionario;
    openDb().then(db=>{
        db.get('SELECT * FROM funcionario WHERE cod_funcionario=?' , [cod_funcionario])
        .then(funcionario=> res.json(funcionario) );
    });
}
export async function postFuncionario(req, res){
    let funcionario = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO funcionario (nome_funcionario, sobrenome_funcionario, cargo_funcionario, periodo_funcionario) VALUES (?,?,?,?)', [funcionario.nome_funcionario, funcionario.sobrenome_funcionario, funcionario.cargo_funcionario, funcionario.periodo_funcionario]);
    });
    res.json({
        "statusCode": 200 
    })
}

export async function updateFuncionario(req, res){
    let funcionario = req.body;
    openDb().then(db=>{
        db.run('UPDATE funcionario SET nome_funcionario=?, sobrenome_funcionario=?, cargo_funcionario=?, periodo_funcionario=? WHERE cod_funcionario=?', [funcionario.nome_funcionario, funcionario.sobrenome_funcionario, funcionario.cargo_funcionario, funcionario.periodo_funcionario, funcionario.cod_funcionario]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteFuncionario(req, res){
    let cod_funcionario = req.body.cod_funcionario;
        openDb().then(db=>{
            db.get('DELETE FROM funcionario WHERE cod_funcionario=?', [cod_funcionario])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}

