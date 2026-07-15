class AlertaDAOMemoria {
    
    constructor() {
        this.alertas = [];
    }

    guardarOActualizar = async alerta => {
        const index = this.alertas.findIndex(a => a.id === alerta.id)
        if (index !== -1) {
            this.alertas.push(alerta)
        } else {
            this.alertas[index] = alerta
        }
        return alerta
    }

    eliminarPorSensorId = async sensorId => {
        this.alertas = this.alertas.filter(a => a.sensorId !== sensorId)
    }

    listar = async () => {
        return this.alertas
    }

}

export default AlertaDAOMemoria