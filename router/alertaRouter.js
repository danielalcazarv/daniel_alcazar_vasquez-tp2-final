import express from 'express'

import AlertaController from '../controller/alertaController.js'

class AlertaRouter {

    constructor() {
        this.alertaController = new AlertaController()
        this.router = express.Router()
    }

    start() {
        this.router.get('/', this.alertaController.listarAlertas)

        return this.router
    }
}

export default AlertaRouter
