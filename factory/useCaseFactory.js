import daoFactory from './daoFactory.js'
import ValidadorLecturas from '../service/validadorLecturas.js'
import EvaluadorAlertas from '../service/evaluadorAlertas.js'
import RegistrarLecturaUseCase from '../usecase/registrarLecturaUseCase.js'
import ListarSensoresUseCase from '../usecase/listarSensoresUseCase.js'
import ListarAlertasUseCase from '../usecase/listarAlertasUseCase.js'

const validadorLecturas = new ValidadorLecturas()
const evaluadorAlertas = new EvaluadorAlertas()

class UseCaseFactory {

    getRegistrarLecturaUseCase = () => new RegistrarLecturaUseCase(
        daoFactory.getSensorDAO(),
        daoFactory.getAlertaDAO(),
        validadorLecturas,
        evaluadorAlertas
    )

    getListarSensoresUseCase = () => new ListarSensoresUseCase(daoFactory.getSensorDAO())

    getListarAlertasUseCase = () => new ListarAlertasUseCase(daoFactory.getAlertaDAO())
}

export default new UseCaseFactory()


