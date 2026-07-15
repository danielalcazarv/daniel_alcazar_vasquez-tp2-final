class SensorDAOMemoria {
    
    constructor() {
        this.sensores = [];
    }

    buscarPorId = async id => {
        return this.sensores.find(s => s.id === id) ?? null
    }

    guardarOActualizar = async sensor => {
        const index = this.sensores.findIndex(s => s.id === sensor.id)
        if (index !== -1) {
            this.sensores.push(sensor)
        } else {
            this.sensores[index] = sensor
        }
        return sensor
    }

    listar = async () => {
        return this.sensores
    }
}

export default SensorDAOMemoria