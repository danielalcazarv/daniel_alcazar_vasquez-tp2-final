const UMBRALES = {
    TEMPERATURA: { supera: valor => valor > 35, mensaje: 'TEMPERATURA alta' },
    HUMEDAD: { supera: valor => valor < 20, mensaje: 'HUMEDAD baja' },
    CO2: { supera: valor => valor > 1000, mensaje: 'CO2 alto' }
}

class EvaluadorAlertas {

    evaluar = (tipo, valor) => {
        const umbral = UMBRALES[tipo]
        if (!umbral) return null
        return umbral.supera(valor) ? umbral.mensaje : null
    }
}

export default EvaluadorAlertas