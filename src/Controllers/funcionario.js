// import res from 'express/lib/response';
import { openDb } from '../configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Funcionario (id INTEGER PRIMARY KEY NOT NULL, nome varchar(50) NOT NULL, sobrenome varchar(50) NOT NULL, cargo varchar(30) NOT NULL, periodo varchar(50) )')
    })
}

export async function selectFuncionarios(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Funcionario')
       .then(funcionarios=> res.json(funcionarios))
   });

   }

   export async function selectFuncionario(req, res){
       let id = req.body.id;
        openDb().then(db=>{
           db.get('SELECT * FROM Funcionario WHERE id=?' , [id])
           .then(funcionario=> res.json(funcionario) );
       });
    }
export async function InsetFuncionario(req, res){
    let funcionario = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Funcionario (nome, sobrenome,cargo,periodo) VALUES (?,?,?,?)', [funcionario.nome, funcionario.sobrenome, funcionario.cargo, funcionario.periodo]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateFuncionario(req, res){
    let funcionario = req.body;
    openDb().then(db=>{
        db.run('UPDATE Funcionario SET nome=?, sobrenome=?,cargo=?,periodo=? WHERE id=?', [funcionario.nome, funcionario.sobrenome, funcionario.cargo, funcionario.periodo]);
    });
    res.json({
        "statusCode": 200
    })
}

    export async function deleteFuncionario(req, res){
        let id = req.id;
         openDb().then(db=>{
             db.get('DELETE FROM Funcionario WHERE id=?' , [id])
            .then(res=>res)
        });
        res.json({
            "statusCode": 200
        })
    }

