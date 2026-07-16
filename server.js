import express from 'express'

import LecturaRouter from './router/lecturaRouter.js'
import SensorRouter from './router/sensorRouter.js'
import AlertaRouter from './router/alertaRouter.js'

const app = express();

app.use(express.json())

const lecturaRouter = new LecturaRouter()
const sensorRouter = new SensorRouter()
const alertaRouter = new AlertaRouter()

app.use('/lecturas', lecturaRouter.start())
app.use('/sensores', sensorRouter.start())
app.use('/alertas', alertaRouter.start())

const PORT = 8080;
const server = app.listen(PORT,
    () => console.log(`Servidor express escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log('Servidor express en error:', error))
