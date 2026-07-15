import Sensor from '../models/sensor.js'
import Alerta from '../models/alerta.js'

class RegistrarLecturaUseCase {

    constructor(sensorDAO, alertaDAO, validadorLecturas, evaluadorAlertas) {
        this.sensorDAO = sensorDAO
        this.alertaDAO = alertaDAO
        this.validadorLecturas = validadorLecturas
        this.evaluadorAlertas = evaluadorAlertas
    }

    ejecutar = async lectura => {
        const { id, tipo, valor, timestamp} = this.validadorLecturas.validar(lectura)
        const sensor = new Sensor(id, tipo, valor, timestamp)
        await this.sensorDAO.guardarOActualizar(sensor)
        const mensajeAlerta = this.evaluadorAlertas.evaluar(tipo, valor)

        if (mensajeAlerta) {
            await this.alertaDAO.guardarOActualizar(new Alerta(id, tipo, valor, timestamp, mensajeAlerta))
        }else {
            await this.alertaDAO.eliminarPorSensorId(id)
        }

        return { id, tipo, valor, timestamp, alerta: mensajeAlerta  ?? null}
    }
}

export default RegistrarLecturaUseCase