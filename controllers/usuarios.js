const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, nombre = "no name", apikey } = req.query

    res.json({
        ok: true,
        msg: 'GET API | Controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req = request, res = response) => {
    const id = req.params.id

    res.json({
        ok: true,
        msg: 'PUT API | Controlador',
        id
    });
}

const usuariosPatch = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'PATCH API | Controlador'
    });
}

const usuariosPost = (req = request, res = response) => {
    const body = req.body;

    res.json({
        ok: true,
        msg: 'POST API | Controlador',
        body
    });
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'DELETE API | Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPatch,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}