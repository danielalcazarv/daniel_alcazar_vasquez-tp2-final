import useCaseFactory from '../factory/useCaseFactory.js'

class AlertaController {

    constructor() {
        this.listarAlertasUseCase = useCaseFactory.getListarAlertasUseCase()
    }

    listarAlertas = async (req, res) => {
        try {
            const alertas = await this.listarAlertasUseCase.ejecutar()
            res.status(200).json(alertas)
        } catch (error) {
            console.log('error listarAlertas', error)
            res.status(500).json({ errorMsg: 'Error interno del servidor' })
        }
    }
}

export default AlertaController
