import { openDb } from "../configDB.js";
import {createTableCliente} from "../Models/Cliente.js";

createTableCliente();

//para selecionar todos os clientes (Get)
export async function getClientes(req, res){
     openDb().then(db=>{
        db.all('SELECT * FROM cliente ')
        .then(clientes =>res.json(clientes))
     });
 }

//para selecionar apenas um cliente (Get)
 export async function getCliente(req, res){
    let cod_cliente =req.body.cod_cliente
    openDb().then(db=>{
      db.get('SELECT * FROM cliente WHERE cod_cliente=?', [cod_cliente])
        .then(cliente=>res.json(cliente))
     });
 }

//para inserir novos clientes (post)
export async function postCliente(req, res){ 
    let cliente = req.body
    openDb().then(db=>{
        db.run('INSERT INTO cliente (nome_cliente, email_cliente, senha_cliente) VALUES (?,?,?)', [cliente.nome_cliente, cliente.email_cliente, cliente.senha_cliente]);
    });
    res.json({
        "statusCode": 200
    }) 
}

//para atualizar dados do cliente (put/patch)
export async function updateCliente(req, res){
    let cliente = req.body
    openDb().then(db=>{
        db.run('UPDATE cliente SET nome_cliente=?, email_cliente=?, senha_cliente=? WHERE cod_cliente=? ', [cliente.nome_cliente, cliente.email_cliente, cliente.senha_cliente, cliente.cod_cliente]);
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
