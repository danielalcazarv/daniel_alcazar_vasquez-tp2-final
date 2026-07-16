import useCaseFactory from '../factory/useCaseFactory.js'

class LecturaController {

    constructor() {
        this.registrarLecturaUseCase = useCaseFactory.getRegistrarLecturaUseCase()
    }

    registrarLectura = async (req, res) => {
        try {
            const resultado = await this.registrarLecturaUseCase.ejecutar(req.body)
            res.status(200).json(resultado)
        } catch (error) {
            if (error && error.errorMsg) {
                return res.status(400).json({ errorMsg: error.errorMsg })
            }
            console.log('error registrarLectura', error)
            res.status(500).json({ errorMsg: 'Error interno del servidor' })
        }
    }
}

export default LecturaController