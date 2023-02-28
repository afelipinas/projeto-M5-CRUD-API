import { openDb } from "../configDB.js";
import {createTableCliente} from "../Models/Cliente.js";

createTableCliente();

//para selecionar todos os clientes (Get)
export async function selectClientes(req, res){
     openDb().then(db=>{
        db.all('SELECT * FROM cliente ')
        .then(clientes =>res.json(clientes))
     });
 }

//para selecionar apenas um cliente (Get)
 export async function selectCliente(req, res){
    let cod_cliente =req.body.cod_cliente
    openDb().then(db=>{
      db.get('SELECT * FROM cliente WHERE cod_cliente=?', [cod_cliente])
        .then(cliente=>res.json(cliente))
     });
 }

//para inserir novos clientes (post)
export async function insertCliente(req, res){
    let cliente = req.body
    openDb().then(db=>{
        db.run('INSERT INTO cliente (nome, email, senha) VALUES (?,?,?)', [cliente.nome, cliente.email, cliente.senha]);
    });
    res.json({
        "statusCode": 200
    })
}

//para atualizar dados do cliente (put)
export async function updateCliente(req, res){
    let cliente = req.body
    openDb().then(db=>{
        db.run('UPDATE cliente SET nome=?, email=?, senha=? WHERE cod_cliente=? ', [cliente.nome, cliente.email, cliente.senha, cliente.cod_cliente]);
    });
    res.json({
        "statusCode": 200
    })
}
//para atualizar dados do cliente (patch)
export async function patchCliente(req, res){
    let cliente = req.body;
    openDb()
    .then(db => {
        db.run('UPDATE cliente SET nome=?, email=?, senha=?  WHERE cod_cliente=?', [cliente.nome, cliente.email, cliente.senha, cliente.cod_cliente]);
    });
    res.json({
        "statusCode": 200
    })
}

//para excluir o cliente (delete)
 export async function deleteCliente(req, res){
    let cod_cliente = req.body.cod_cliente
    openDb().then(db=>{
        db.get('DELETE FROM cliente WHERE cod_cliente=?', [cod_cliente])
        .then(res=>res)
     });
     res.json({
        "statusCode": 200
    })
 } 
