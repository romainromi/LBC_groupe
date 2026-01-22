import { annonceModel } from "../models/annonce.model.js";
import { annonceSchema } from "../validations/annonce.validation.js";

export const createAnnonce = async (req, res) => {
    try {

        const { title, price, city, category_id } = req.body;
        const image = req.file ? req.file.filename : null
        const user_id = req.user.id

        
        const { error, value } = annonceSchema.validate({title, price, city, category_id})

        if (error) {
            return res.status(400).json({ message: "Erreur lors de la creation de l'annonce", error: error.details[0].message })
        }


        await annonceModel.create(title, price, city, image, user_id, category_id);
        res.status(201).json({ message: "Annonce crée" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "erreur du seurveur lors de la création de l'annonce", message: error.message });

    }
};

export const afficheAnnonce = async (req, res) => {
    try {
        const annonces = await annonceModel.affiche()
        res.status(201).json({ message: "Liste des annonces :", data: annonces })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "erreur du serveur lors de la récupération des articles", message: error.message })
    }
};

export const getAnnonceById = async (req, res) => {
    try {
        const { id } = req.params;
        const annonce = await annonceModel.getById(id)

        if (!annonce) {
            return res.status(400).json({ message: "Aucune annonce trouvé" })
        }

        res.json({ annonce })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "erreur du serveur", message: error.message })
    }
}

export const updateAnnonceById = async (req, res) => {
    try {
        const { id } = req.params
        const image = req.file ? req.file.filename : undefined

        const existingAnnonce = await annonceModel.getById(id);

        if (!existingAnnonce){
            return res.status(404).json({message: "Annonce introuvable"})
        }

        const updatedData = {
            title: req.body.title ?? existingAnnonce.title,
            price: req.body.price ?? existingAnnonce.price,
            city: req.body.city ?? existingAnnonce.city,
            category_id: req.body.category_id ?? existingAnnonce.category_id,
            image: image ?? existingAnnonce.image
        }

        const {error} = annonceSchema.validate(updatedData)

        if (error) {
            return res.status(400).json({message: error.details[0].message})
        }
        
        await annonceModel.updateById(id, updatedData)

        res.json({message: "Annonce mis a jour avex succèes"})

    } catch (error) {
        console.error("Erreur lors de la modification de l'annonces ", error.message)
        res.status(500).json({message: "erreur du serveur", message: error.message})
    }
}

export const deleteAnnonceById = async (req, res) => {
    try {
        const { id } = req.params
        const affectRows = await annonceModel.deleteById(id)

        if(affectRows){
            return res.status(404).json({message: "aucune annonce trouvé"})
        }

        res.json({message: "ANonce supprimé"})

    } catch (error) {
        console.error("Erreur lors de la suppression de l'annonce ", error.message)
        res.status(500).json({message: "erreur du serveur", message: error.message})        
    }
}