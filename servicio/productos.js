import ModelMongoDB from '../model/DAO/productos/productosMongoDB.js'
import validar from './validaciones/producto.js'


class Servicio {

    constructor() {
        this.model = new ModelMongoDB();
    }

    obtenerProductos = async id => {
        if(id) {
            const producto = await this.model.obtenerProducto(id)
            return producto
        }
        else {
            const productos = await this.model.obtenerProductos()
            return productos
        }
    }

    guardarProducto = async producto => {
        const error = validar(producto)
        if(!error) {
            const productoGuardado = await this.model.guardarProducto(producto)
            return productoGuardado
        }
        else {
            throw new Error(error.details[0].message)
        }
    }

    actualizarProducto = async (id,producto) => {
        const error = validar(producto)
        if(!error) {
            const productoActualizado = await this.model.actualizarProducto(id,producto)
            return productoActualizado
        }
        else {
            console.log(error.details[0].message)
            throw new Error(error.details[0].message)
        }
    }

    borrarProducto = async id => {
        const productoEliminado = await this.model.borrarProducto(id)
        return productoEliminado
    }
}

export default Servicio

