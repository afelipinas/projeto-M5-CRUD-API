import { openDb } from "../configDB.js";
import { createTablePedido } from "../Models/Pedido.js";

createTablePedido();

//para selecionar todos os pedidos (Get)
export async function getPedidos(req, res){
    openDb().then(db=>{
       db.all('SELECT * FROM pedido')
       .then(pedidos =>res.json(pedidos))
    });
}

//para selecionar apenas um pedido (Get)
export async function getPedido(req, res){
    let id = req.body.cod_pedido
    openDb()
    .then(db => {
        db.all('SELECT * FROM pedido WHERE cod_pedido=?', [id])
        .then(pedidos => res.json(pedidos))
    }); 
}

 //para inserir novos pedidos (post) 
export async function postPedido(req, res){  
    let pedido = req.body
    openDb().then(db=>{
        db.run('INSERT INTO pedido (nome_produto, cod_cliente, valor_total, status_pedido, data_pedido) VALUES (?,?,?,?,?)', [pedido.nome_produto, pedido.cod_cliente, pedido.valor_total, pedido.status_pedido, pedido.data_pedido]);
    });
    res.json({
        "statusCode": 200 
    })
}

//para atualizar dados do pedido (put/patch)
export async function updatePedido(req, res){
    let pedido = req.body
    openDb().then(db=>{
        db.run('UPDATE pedido SET nome_produto=?, cod_cliente=?, valor_total=?, status_pedido=?, data_pedido=? WHERE cod_pedido=? ', [pedido.nome_produto, pedido.cod_cliente, pedido.valor_total, pedido.status_pedido, pedido.data_pedido, pedido.cod_pedido]);
    });
    res.json({
        "statusCode": 200
    })
}

//para excluir o pedido (delete)
export async function deletePedido(req, res){
    let cod_pedido = req.body.cod_pedido
    openDb().then(db=>{
        db.get('DELETE FROM pedido WHERE cod_pedido=?', [cod_pedido])
        .then(res=>res)
     });
     res.json({
        "statusCode": 200
    })
 } 