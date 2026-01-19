import mysql from "mysql2/promise";
import 'dotenv/config';

let db;

try{
    db= await mysql.createPool({
        host: process.env.DB_HOST, 
        user: process.env.DB_USER, 
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

await db.getConnection();
console.log(`Connexion a la base de donnée ${process.env.DB_NAME}est réussie`);

} catch(error){
    console.log(`Connexion a la base de donnée ${process.env.DB_NAME} échouée`, error.message);
    process.exit(1);
    
}

export {db}