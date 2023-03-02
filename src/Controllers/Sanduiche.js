import { openDb } from '../configDB.js';
import { createTableSanduiche } from '../Models/sanduiche.js';

createTableSanduiche();

export async function getSanduiches(req, res){
    openDb().then(db => {
        db.all('SELECT * FROM sanduiche').then(sanduiches => res.json(sanduiches))
    });
}

export async function getSanduiche(req, res){
    let id = req.body.cod_sanduiche
    openDb().then(db => {
        db.get('SELECT * FROM sanduiche WHERE cod_sanduiche=?', [id])
        .then(sanduiche => res.json(sanduiche)) 
    });  
}

export async function postSanduiche(req, res){ 
    let sanduiche = req.body;
    openDb()
    .then(db => {
        db.run('INSERT INTO sanduiche (nome_sanduiche, descricao_sanduiche, preco_sanduiche, imagem_sanduiche) VALUES (?,?,?,?)', [sanduiche.nome_sanduiche, sanduiche.descricao_sanduiche, sanduiche.preco_sanduiche, sanduiche.imagem_sanduiche])
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateSanduiche(req, res){
    let sanduiche = req.body;
    openDb()
    .then(db => {
        db.run('UPDATE sanduiche SET nome_sanduiche=?, descricao_sanduiche=?, preco_sanduiche=?, imagem_sanduiche=? WHERE cod_sanduiche=?', [sanduiche.nome_sanduiche, sanduiche.descricao_sanduiche, sanduiche.preco_sanduiche, sanduiche.imagem_sanduiche, sanduiche.cod_sanduiche])
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteSanduiche(req, res){
    let id = req.body.cod_sanduiche
    openDb().then(db => {
        db.get('DELETE FROM sanduiche WHERE cod_sanduiche=?', [id])
        .then(res => res)
    });
    res.json({
        "statusCode": 200
    })
}