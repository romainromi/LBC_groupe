import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import annonceRoutes from './routes/annonce.routes.js'

dotenv.config()


const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send('<h1> voila mon serveur !!! </h1>')
})

app.use('/annonces', annonceRoutes)

app.use(cors())
app.use(helmet())

export default app;