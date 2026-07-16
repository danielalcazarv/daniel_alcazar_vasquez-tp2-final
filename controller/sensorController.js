import useCaseFactory from '../factory/useCaseFactory.js'

class SensorController {

    constructor() {
        this.listarSensoresUseCase = useCaseFactory.getListarSensoresUseCase()
    }

    listarSensores = async (req, res) => {
        try {
            const sensores = await this.listarSensoresUseCase.ejecutar()
            res.status(200).json(sensores)
        } catch (error) {
            console.log('error listarSensores', error)
            res.status(500).json({ errorMsg: 'Error interno del servidor' })
        }
    }
}

export default SensorController
