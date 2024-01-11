import CnxMongoDB from "../../DBMongo.js"

class ModelMongoDB {

    obtenerCarrito = async () => {
        if(!CnxMongoDB.connection) return []
        const carrito = await CnxMongoDB.db.collection('carritos').find({}).toArray()
        return carrito
    }

    guardarCarrito = async carrito => {
        if(!CnxMongoDB.connection) return {}
        await CnxMongoDB.db.collection('carritos').insertOne(carrito)
        return carrito
    }
}

export default ModelMongoDB