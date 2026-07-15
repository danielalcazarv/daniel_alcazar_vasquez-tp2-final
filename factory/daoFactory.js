import SensorDAOMemoria from '../dao/sensorDAOMemoria.js'
import AlertaDAOMemoria from '../dao/alertaDAOMemoria.js'

class DAOFactory {
    constructor() {
        this.sensorDAO = new SensorDAOMemoria()
        this.alertaDAO = new AlertaDAOMemoria()
    }

    getSensorDAO() {
        return this.sensorDAO
    }

    getAlertaDAO() {
        return this.alertaDAO
    }
}

export default new DAOFactory()