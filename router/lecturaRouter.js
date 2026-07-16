import express from 'express'

import LecturaController from '../controller/lecturaController.js'

class LecturaRouter {

    constructor() {
        this.lecturaController = new LecturaController()
        this.router = express.Router()
    }

    start() {
        this.router.post('/', this.lecturaController.registrarLectura)

        return this.router
    }
}

export default LecturaRouter
