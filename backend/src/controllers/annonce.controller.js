import { annonceModel } from "../models/annonce.model.js";
import { annonceSchema } from "../validations/annonce.validation.js";

export const createAnnonce = async (req, res) => {
    try {
        
        const {error,value} = annonceSchema.validate(req.body)

        if (error) {
            return res.status(400).json({message: "Erreur lors de controller", error: error.details[0].message})

        }

        const {title, price, city, image} = req.body;

        await annonceModel.create(title, price, city, image);
        res.status(201).json({message: "Annonce crée"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "erreur du seurveur", message: error.message});

    }
};

export const afficheAnnonce = async (req, res) => {
    try {
        const annonces = await annonceModel.affiche()
        res.status(201).json({message: "Liste des articles", data: annonces})
    } catch (error) {
        
    }
}