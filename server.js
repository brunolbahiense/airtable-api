import express from 'express'
import cors from 'cors'
import routes from './routes.js'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()
const port = process.env.PORT;

app.use(express.json())
app.use(bodyParser.urlencoded({
extended: true
}));


const corsOptions = {
  origin: '*', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204,
}

app.use(cors(corsOptions));


// app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)
app.listen(port)