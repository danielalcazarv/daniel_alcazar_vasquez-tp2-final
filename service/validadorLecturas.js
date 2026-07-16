const TIPOS_VALIDOS = ['TEMPERATURA', 'HUMEDAD', 'CO2'];
const REGEX_ID = /^[a-zA-Z0-9]{8}$/

class ValidadorLecturas {

    validar = ({ id, tipo, valor, timestamp }) => {
        if (typeof id !== 'string' || !REGEX_ID.test(id)) {
            throw { errorMsg: 'id inválido: debe ser un código alfanumérico de 8 caracteres' }
        }

        if (!TIPOS_VALIDOS.includes(tipo)) {
            throw { errorMsg: `tipo inválido: debe ser uno de ${TIPOS_VALIDOS.join(', ')}` }
        }

        const valorNumerico = typeof valor === 'number' ? valor : Number(valor)
        if (valor === undefined || valor === null || valor === '' || Number.isNaN(valorNumerico)) {
            throw { errorMsg: 'valor inválido: debe ser numérico' }
        }

        if (typeof timestamp !== 'string' || timestamp.trim() === '') {
            throw { errorMsg: 'timestamp inválido: debe ser un string' }
        }

        return { id, tipo, valor: valorNumerico, timestamp }
    }
}

export default ValidadorLecturas