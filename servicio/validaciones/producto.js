import Joi from 'joi'

const validar = producto => {
    const productoSchema = Joi.object({
        evento: Joi.string().min(1).max(50).required().messages({"any.required": `El evento es requerido`,
                                                                "string.empty": `El evento no puede ser nulo`,
                                                                "string.min": `El evento debe tener un mínimo de {#limit} caracteres`,
                                                                "string.max": `El evento debe tener un máximo de {#limit} caracteres`}),
        precio: Joi.number().greater(0).required().messages({"any.required": `El precio es requerido`,
                                                            "number.base": "El precio debe ser un número",
                                                            "number.greater": `El precio debe ser mayor a {#limit}`}),
        paquetesDisponibles: Joi.number().greater(0).required().messages({"any.required": `Paquetes disponibles es requerido`,
                                                                        "number.base": "Paquetes disponibles debe ser un número",
                                                                        "number.greater": `Paquetes disponibles debe ser mayor a {#limit}`}),
        entradas: Joi.string().min(1).max(40).required().messages({"any.required": `Entradas es requerido`,
                                                                    "string.empty": `Entradas no puede ser nulo`,
                                                                    "string.min": `Entradas debe tener un mínimo de {#limit} caracteres`,
                                                                    "string.max": `Entradas debe tener un máximo de {#limit} caracteres`}),
        hotel: Joi.string().min(1).max(40).required().messages({"any.required": `El hotel es requerido`,
                                                                "string.empty": `El hotel no puede ser nulo`,
                                                                "string.min": `El hotel debe tener un mínimo de {#limit} caracteres`,
                                                                "string.max": `El hotel debe tener un máximo de {#limit} caracteres`}),
        categoria: Joi.string().min(1).max(40).required().messages({"any.required": `Categoría es requerido`,
                                                                    "string.empty": `Categoría no puede ser nulo`,
                                                                    "string.min": `Categoría debe tener un mínimo de {#limit} caracteres`,
                                                                    "string.max": `Categoría debe tener un máximo de {#limit} caracteres`}),
        detalles: Joi.string().min(1).max(100).required().messages({"any.required": `Detalles es requerido`,
                                                                    "string.empty": `Detalles no puede ser nulo`,
                                                                    "string.min": `Detalles debe tener un mínimo de {#limit} caracteres`,
                                                                    "string.max": `Detalles debe tener un máximo de {#limit} caracteres`}),
        foto: Joi.string().required().messages({"any.required": `La Foto es requerida`,
                                                "string.empty": `La Foto no puede ser nula`}),
        pensionCompleta: Joi.boolean()
    })

    const { error } = productoSchema.validate(producto)
    return error
}

export default validar