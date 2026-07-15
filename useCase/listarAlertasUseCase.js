class ListarAlertasUseCase {

    constructor(alertaDAO) {
        this.alertaDAO = alertaDAO;
    }

    ejecutar = async () => {
        return this.alertaDAO.listar()
    }
}

export default ListarAlertasUseCase