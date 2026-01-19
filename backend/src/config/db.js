import mysql from 'mysql2/promise'
import 'dotenv/config'

let db;
let env = process.env

try {

    db = await mysql.createPool({

        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASS,
        name: env.DB_NAME
    })
    await db.getConnection()
    console.log(`CONNEXION A LA BASE de DONNEES ${process.env.DB_USER} réussie`);
    

} catch (error) {
    console.error(`Erreur lors de la connexion a la base de donnée `, error.message)
    process.exit(1)
}

export {db}