import express from 'express'

import SensorController from '../controller/sensorController.js'

class SensorRouter {

    constructor() {
        this.sensorController = new SensorController()
        this.router = express.Router()
    }

    start() {
        this.router.get('/', this.sensorController.listarSensores)

        return this.router
    }
}

export default SensorRouter
