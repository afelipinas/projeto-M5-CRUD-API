import { openDb } from "../configDB.js";
import { createTablePedido } from "../Models/Pedido.js";

createTablePedido();

//para selecionar todos os pedidos (Get)
export async function selectPedidos(req, res){
    openDb().then(db=>{
       db.all('SELECT * FROM pedido')
       .then(pedidos =>res.json(pedidos))
    });
}

//para selecionar apenas um pedido (Get)
export async function selectPedido(req, res){
    let cod_pedido =req.body.cod_pedido
    openDb().then(db=>{
      db.get('SELECT * FROM pedido WHERE cod_pedido=?', [cod_pedido])
        .then(pedido=>res.json(pedido))
     });
 }

 //para inserir novos pedidos (post)
export async function insertPedido(req, res){
    let pedido = req.body
    openDb().then(db=>{
        db.run('INSERT INTO pedido (cod_sanduiche, cod_bebida, cod_cliente, valor_total, status_pedido, data_pedido) VALUES (?,?,?,?,?,?)', [pedido.cod_sanduiche, pedido.cod_bebida, pedido.cod_cliente, pedido.valor_total, pedido.status_pedido, pedido.data_pedido]);
    });
    res.json({
        "statusCode": 200
    })
}

//para atualizar dados do pedido (put)
export async function updatePedido(req, res){
    let pedido = req.body
    openDb().then(db=>{
        db.run('UPDATE pedido SET cod_sanduiche=?, cod_bebida=?, cod_cliente=? email=?, email=?, email=? WHERE cod_cliente=? ', [cliente.nome, cliente.email, cliente.senha, cliente.cod_cliente]);
    });
    res.json({
        "statusCode": 200
    })
}