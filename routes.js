import express from "express"
const routes = express()
import { listAirtable } from "./controllers/apiConnection"

routes.get('/list', listAirtable)
routes.get("/", (req, res) => res.json("API ON 🟢"))



export default routes
