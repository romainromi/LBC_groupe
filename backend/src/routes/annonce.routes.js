import express from "express";
import { afficheAnnonce, createAnnonce } from "../controllers/annonce.controller.js";

const router = express.Router()

router.post("/create", createAnnonce);
router.get('/', afficheAnnonce);

export default router