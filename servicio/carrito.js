import ModelMongoDB from '../model/DAO/carrito/carritoMongoDB.js'
import config from '../config.js'
import { preference } from './pago.js'



class Servicio {
    constructor() {
        this.model = new ModelMongoDB();
        this.dominio = process.env.NODE_ENV === 'production'? `${config.DOMINIO}`: 'http://localhost'
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
        //console.log(prefItems)
        try {
            const preferences = await preference.create({ body: {
                items: prefItems.items,
                back_urls: {
                    "success": `${this.dominio}:${config.PORT}/api/carrito/mp/feedback`,
                    "failure": `${this.dominio}:${config.PORT}/api/carrito/mp/feedback`,
                    "pending": `${this.dominio}:${config.PORT}/api/carrito/mp/feedback`
                },
                auto_return: "approved",
            }})
            return preferences.id
        }
        catch(error) {
            console.log(`Error al crear preferences: ${error.message}`)
            return null
        }
    }
}

export default Servicio

