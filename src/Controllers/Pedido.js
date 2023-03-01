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
    openDb()
    .then(db => {
        db.all('SELECT San.nome, San.preco, Cli.nome_cliente FROM Sanduiche San INNER JOIN Pedido Ped ON Ped.cod_sanduiche = San.cod_sanduiche INNER JOIN Cliente Cli ON Cli.cod_cliente = Ped.cod_cliente').then(pessoas => res.json(pessoas))
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
        db.run('UPDATE pedido SET cod_sanduiche=?, cod_bebida=?, cod_cliente=?, valor_total=?, status_pedido=?, data_pedido=? WHERE cod_pedido=? ', [pedido.cod_sanduiche, pedido.cod_bebida, pedido.cod_cliente,pedido.valor_total, pedido.status_pedido, pedido.data_pedido, pedido.cod_pedido]);
    });
    res.json({
        "statusCode": 200
    })
}

//para atualizar dados do pedido (patch)
export async function patchPedido(req, res){
    let pedido = req.body;
    openDb()
    .then(db => {
        db.run('UPDATE pedido SET cod_sanduiche=?, cod_bebida=?, cod_cliente=?, valor_total=?, status_pedido=?, data_pedido=? WHERE cod_pedido=? ', [pedido.cod_sanduiche, pedido.cod_bebida, pedido.cod_cliente,pedido.valor_total, pedido.status_pedido, pedido.data_pedido, pedido.cod_pedido]);
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