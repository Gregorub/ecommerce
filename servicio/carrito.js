import ModelMongoDB from '../model/DAO/carrito/carritoMongoDB.js'
import config from '../config.js'
import { preference } from './pago.js'



class Servicio {
    constructor() {
        this.model = new ModelMongoDB();
    }

    obtenerCarrito = async _ => {
        const carrito = await this.model.obtenerCarrito()
        return carrito
    }

    guardarCarrito = async carrito => {
        const carritoGuardado = await this.model.guardarCarrito(carrito)
        return carritoGuardado
    }

    createPreference = async prefItems => {
        try {
            const preferences = await preference.create(prefItems)
            return preferences.id
        }
        catch(error) {
            console.log(`Error al crear preferences: ${error.message}`)
            return null
        }
    }
}

export default Servicio;

