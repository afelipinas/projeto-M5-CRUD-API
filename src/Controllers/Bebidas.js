import { openDb } from "../configDB.js";

export async function createtable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Bebida (id INTEGER PRIMARY KEY, nome TEXT, Preco INTEGER, Descricao TEXT, Imagem TEXT )')
    })
}

export async function insertBebida(req, res){
    let Bebida = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Bebida (nome, Descricao, Preco, Imagem) VALUES (?,?)', [Bebida.nome, Bebida.Descricao, Bebida.Preco, Bebida.imagem]);
    });
    res.json({
        "statuscode": 200
    })
}

export async function updateBebida(req, res){
    let Bebida = req.body;
    openDb().then(db=>{
        db.run('UPDATE Bebida SET nome=?, Descricao=? WHERE Preco=?', [Bebida.nome, Bebida.Descricao, Bebida.Preco, Bebida.imagem ]);
    });
    res.json({
        "statuscode": 200
    })
}

export async function selectBebida(req, res){
   openDb().then(db=>{
     db.get('SELECT * FROM Bebida')
        .then(res=>res)
    });
}

export async function selectBebidas(req, res){
    let id =req.body.id;
    openDb().then(db=>{
       db.all('SELECT * FROM Bebida WHERE id=?', [id])
          .then(Bebida=>res.json(Bebida) );
      });
  }

  export async function deleteBebidas(req, res){
    let Bebida = req.body.id;
     openDb().then(db=>{
       db.all('DELETE FROM Bebida WHERE id=?', [id])
          .then(res=>res)
      });
      res.json({
        "statuscode": 200
    })
  }