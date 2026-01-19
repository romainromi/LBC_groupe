import {db} from "../config/db.js";

export const categoryModel = {
    create: async (name) => {
        const sql = "INSERT INTO category (name) VALUES (?,?)"
        return db.execute(sql, [name])
    },
    affiche: async () => {
        const [rows] = await db.execute('SELECT * FROM category')
        return rows
    }
}