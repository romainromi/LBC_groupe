import { db } from "../config/db.js"

export const annonceModel = {
    create: async (title, price, city, image, user_id, category_id) => {
        try {
            const sql = `INSERT INTO annonces (title, price, city, image, user_id, category_id, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())`
            return db.query(sql, [title, price, city, image, user_id, category_id])
        } catch (error) {
            console.error('Erreur lors de la creation de l\'annonce :', error.message);
            throw error;
        }
    },
    affiche: async () => {
        try {
            const [rows] = await db.query(`SELECT * FROM annonces ORDER BY created_at DESC`)
            return rows
        } catch (error) {
            console.error('Erreur lors de la récupération des annonces :', error.message);
            throw error;
        }
    },getById: async (id) => {
        try {
            const [rows] = await db.query('SELECT * FROM annonces WHERE id = ?', [id])
            return rows[0];
        } catch (error) {
            console.error("Erreur lors de la récupération de l'annonce", error.message);
            throw error;
        }
    },
    updateById: async (id, title, price, city, image, category_id ) => {
        try {
            await db.query('UPDATE annonces SET title = ?, price = ?, city = ?, image = ?, category_id = ? WHERE id = ?', [title, price, city, image, category_id, id])
            
        } catch (error) {
            console.error("Erreur lors de la modification de l'article", error.message)
            throw error
        }
    },
    deleteById: async (id) => {
        try {
            const [result] = await db.query("DELETE FROM annonces WHERE id = ?", [id])
            return result.affectRows
        } catch (error) {
            console.error("Erreur lors de la suppresision de l'article", error.message)
            throw error
        }
    }
}