//importando a biblioteca sql
const Database = require("sqlite-async");

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `);
}

//exportando a funcionalidade
// pedindo para que o banco de dados abra o diretorio do momento
//e coloque um arquivo sqlite
module.exports = Database.open(__dirname + "/database.sqlite").then(execute);
