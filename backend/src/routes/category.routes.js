import express from 'express'
import {afficheCategory, createCategory} from "../controllers/category.controller.js"

const router = express.Router()

router.post("/create", createCategory)
router.get("/", afficheCategory)

export default router