import usuarioController from './controller/usuarioController.js'

export default function adcionarRotas(servidor) {
    servidor.use(usuarioController)
}