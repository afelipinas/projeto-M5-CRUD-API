import { openDb } from "../configdb";

export default async createTable(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS pessoa (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTEGER')
    })
}