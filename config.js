import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT

const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA
const STRCNX = process.env.STRCNX
const BASE = process.env.BASE
const FTP_HOST = process.env.FTP_HOST || ''
const FTP_USER = process.env.FTP_USER || ''
const FTP_PASS = process.env.FTP_PASS || ''
const MP_AccessToken = process.env.MP_AccessToken || ''
const DOMINIO = process.env.DOMINIO

export default {
    MODO_PERSISTENCIA,
    PORT,
    STRCNX,
    BASE,
    FTP_HOST,
    FTP_USER,
    FTP_PASS,
    MP_AccessToken,
    DOMINIO
}