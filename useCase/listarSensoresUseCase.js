class ListarSensoresUseCase {

    constructor(sensorDAO) {
        this.sensorDAO = sensorDAO;
    }

    ejecutar = async () => {
        return this.sensorDAO.listar()
    }
}

export default ListarSensoresUseCase