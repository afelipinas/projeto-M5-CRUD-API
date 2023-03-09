import { openDb } from "../configDB.js";
import {createTableCliente} from "../Models/Cliente.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

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
        let {cod_cliente} = req.body
    openDb().then(db=>{
      db.get('SELECT * FROM cliente WHERE cod_cliente=?', [cod_cliente])
        .then(cliente=>res.json(cliente))
     });
 }

//para inserir novos clientes (post)

export async function registerCliente(req, res){ 
    const senha_cliente = req.body.senha_cliente
    const email_cliente= req.body.email_cliente
    const nome_cliente = req.body.nome_cliente
     
    openDb() 
    .then(db => { 
        db.all("SELECT * FROM cliente WHERE email_cliente = ?", [email_cliente])
        .then((rows, err) => {
            if(err){
                res.send(err);  
            }
            if(rows.length == 0){
                bcrypt.hash(senha_cliente, saltRounds)
                .then((hash, err) => {
                db.run("INSERT INTO cliente ( email_cliente, senha_cliente, nome_cliente) VALUES (?,?,?)", [ email_cliente, hash, nome_cliente])
                .then((response, error) => {
                    if(error){ 
                        res.send(error)
                    }
                    if(response){
                        res.send({ msg: "Usuário cadastrado com sucesso" })
                    }}
                )
                })
            } else{
                res.send({ msg: "Email já cadastrado" });
            }
        })
    }) 
}
export async function loginCliente(req, res){
    const {cliente_nome, email_cliente, senha_cliente} = req.body
    
    openDb()
    .then(db => {
        db.all(`SELECT * FROM cliente WHERE email_cliente = ?`, [email_cliente])
        .then((rows, err) =>{
            if(err){
                return res.json({err}); 
            } 
            if(rows.length > 0){  
                console.log('email igual');
                bcrypt.compare(senha_cliente, rows[0].senha_cliente)
                .then((response, error) => {
                    // if(error){
                    //     res.send(error)
                    // }
                    if(response){
                        console.log('senha igual');
                        res.json({validation: true, results: rows})
                    }else{
                        console.log('senha diferente');
                        return (res.send({msg: "Usuário não credenciado. Invalido!", validation: false}))
                        // return res.json({validation: false}) 
                    }
                }) 
            }else{
                console.log('email diferente');
                res.json({msg: "Usuário não credenciado. Invalido!", validation: false}
                )
            }
        })
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
