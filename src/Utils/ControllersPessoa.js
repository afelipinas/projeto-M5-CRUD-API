import { openDb } from '../configDB.js';
import { createTablePessoa } from './ModelsPessoa.js';
import {generateHash, compareHash} from './password.js'
import * as bcrypt from "bcrypt";

createTablePessoa();

export async function getPessoas(req, res){
    openDb()
    .then(db => {
        db.all('SELECT * FROM pessoa').then(pessoas => res.json(pessoas))
    });
}
export async function getPessoa(req, res){
    let id = req.body.id
    openDb()
    .then(db => {
        db.get('SELECT * FROM pessoa WHERE id=?', [id])
        .then(pessoa => res.json(pessoa))
    });  
}
export async function loginPessoa(req, res){
    const email = req.body.email;
    const senha = req.body.senha;

    openDb()
    .then(db => {
        db.all('SELECT * FROM pessoa WHERE email = ?', [email])
        .then(
        (result, error) =>  {
            if(error){
                res.send(error);
            }
            if(result.length > 0){
                const compare = compareHash(senha, result[0].senha)
                if(compare){
                    res.send("Usuário logado com sucesso")
                    console.log("correta")
                }else{
                    res.send("Senha incorreta!")
                    console.log("incorreta")
                }
                // res.status(200).send({msg: "Usuário logado!"})
                // bcrypt.compare(senha, result[0].senha)
                // .then((result, erro) => {
                //     if(result){
                //         res.send("Usuário logado com sucesso")
                //     }else{
                //         res.send("Senha incorreta!")
                //     }
                // })
            }
            else{
                res.status(400).send("Usuário não encontrado!")
            }
        }) 
    })
}
export async function postPessoa(req, res){
    let pessoa = req.body;
    const email = req.body.email;
    const senha = req.body.senha;

    const passHash = generateHash(senha);

    openDb()
    .then(db => {
        db.all('SELECT * FROM pessoa WHERE email = ?', [email])
        .then((pessoas, err) => {
            if(err){
                res.send(err);
            }
            if(pessoas.length == 0){
                db.run('INSERT INTO pessoa (nome, email, senha) VALUES (?,?,?)', [pessoa.nome, pessoa.email, passHash])
                res.json({
                    "statusCode": 200,
                    "message": "Usuário cadastrado com sucesso!"  
                })
            }
            else{
                res.send("Usuário ja cadastrado")
            }
        })
    });
}
// export async function insertPessoa(req, res){
//     let pessoa = req.body;
//     const email = req.body.email;
//     openDb()
//     .then(db => {
//         db.run('INSERT INTO Pessoa (nome, email, senha) VALUES (?,?,?)', [pessoa.nome, pessoa.email, pessoa.senha])
//     });
//     res.json({
//         "statusCode": 200 
//     })
// }
export async function updatePessoa(req, res){
    let pessoa = req.body;
    openDb()
    .then(db => {
        db.run('UPDATE pessoa SET nome=?, email=?, senha=? WHERE id=?', [pessoa.nome, pessoa.email, pessoa.senha, pessoa.id])
    });
    res.json({
        "statusCode": 200
    })
}

export async function deletePessoa(req, res){
    let id = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM pessoa WHERE id=?', [id])
        .then(res => res)
    });
    res.json({
        "statusCode": 200
    })
}