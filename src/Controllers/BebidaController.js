import { openDb } from "../configDB.js";
import {createTableBebida} from "../Models/Bebida.js";

createTableBebida();

//para selecionar todos os clientes (Get)
export async function getBebidas(req, res){
     openDb().then(db=>{
        db.all('SELECT * FROM bebida ')
        .then(bebidas => res.json(bebidas))
     });
 }

//para selecionar apenas um item (Get)
 export async function getBebida(req, res){
    let cod_bebida =req.body.cod_bebida
    openDb().then(db=>{
      db.get('SELECT * FROM bebida WHERE cod_bebida=?', [cod_bebida])
        .then(bebida => res.json(bebida))
     });
 }

//para inserir novas bebidas (post)
export async function postBebida(req, res){  
    let bebida = req.body
    openDb().then(db=>{
        db.run('INSERT INTO bebida (nome_bebida, descricao_bebida, preco_bebida, imagem_bebida, qt_bebida) VALUES (?,?,?,?,?)', [bebida.nome_bebida, bebida.descricao_bebida, bebida.preco_bebida, bebida.imagem_bebida, bebida.qt_bebida]);
    });
    res.json({
        "statusCode": 200
    }) 
}

//para atualizar dados do cliente (put/patch)
export async function updateBebida(req, res){
    let bebida = req.body
    openDb().then(db=>{
        db.run('UPDATE bebida SET nome_bebida=?, descricao_bebida=?, preco_bebida=?, imagem_bebida=?, qt_bebida=? WHERE cod_bebida=? ', [bebida.nome_bebida, bebida.descricao_bebida, bebida.preco_bebida, bebida.imagem_bebida, bebida.qt_bebida, bebida.cod_bebida]);
    });
    res.json({
        "statusCode": 200
    })
}

//para excluir o cliente (delete)
 export async function deleteBebida(req, res){
    let cod_bebida = req.body.cod_bebida
    openDb().then(db=>{
        db.get('DELETE FROM bebida WHERE cod_bebida=?', [cod_bebida])
        .then(res=>res)
     });
     res.json({
        "statusCode": 200
    })
 } 
