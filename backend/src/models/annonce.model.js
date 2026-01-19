import {db} from "../config/db.js"

export const annonceModel = {
    create: async (title, price, city, image) => {
        const sql = `INSERT INTO annonces VALUES (?, ?, ? ,?)`
        return db.execute(sql, [title, price, city, image])
    },
    affiche: async () => {
        const [rows] = await db.execute (`SELECT * FROM title`)
        return rows
    }
}