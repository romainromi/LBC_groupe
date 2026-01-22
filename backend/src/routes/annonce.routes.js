import express from "express";
import { afficheAnnonce, createAnnonce, deleteAnnonceById, getAnnonceById, updateAnnonceById } from "../controllers/annonce.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";

const router = express.Router()

router.post("/create", authMiddleware, upload.array('image', 5), createAnnonce);
router.get('/', afficheAnnonce);
router.get('/:id', getAnnonceById)
router.put('/id', authMiddleware, updateAnnonceById)
router.delete('/:id', authMiddleware, deleteAnnonceById)

export default router