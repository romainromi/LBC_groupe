import { categoryModel } from "../models/category.model.js";

export const createCategory = async (req,res) => {
    try {
        const {error, value} = categorySchema.validate(req.body)
        if(error) {
            return res.status(400).json ({message: 'erreur lors', error: error.details[0].message})
        }

        const {name} = req.body;

        await categoryModel.create(name);
        res.status(201).json({message:'categorie créée'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'erreur du serveur', message: error.message})
        
    }
}

export const afficheCategory = async (req,res) => {
    try {
        const category = await categoryModel.affiche() 
        res.status(201).json({message:'liste des categories', data:category})
    }catch (error){
        
    }
}