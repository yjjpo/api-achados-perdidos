const express = require('express');
const router = express.Router();

// Dados iniciais de exemplo (mantidos em memória).
let objetos = [
    {
        id: 1,
        descricao: 'Carteira preta',
        local: 'Biblioteca',
        data: '2026-10-09',
        status: 'Encontrado'
    },
    {
        id: 2,
        descricao: 'Chaveiro com chaves',
        local: 'Sala 12',
        data: '2026-10-08',
        status: 'Aguardando retirada'
    },
    {
        id: 3,
        descricao: 'Garrafa azul',
        local: 'Cantina',
        data: '2026-10-07',
        status: 'Devolvido'
    }
];

let proximoId = 4;

// GET /objetos - listar todos os objetos.
router.get('/objetos', (req, res) => {
    return res.status(200).json(objetos);
});

// GET /objeto?id=1 - buscar um objeto pelo ID.
router.get('/objeto', (req, res) => {
    const id = Number(req.query.id);

    if (!req.query.id || !Number.isInteger(id) || id <= 0) {
        return res.status(400).json({ mensagem: 'Informe um id válido na URL. Exemplo: /objeto?id=1' });
    }

    const objeto = objetos.find(item => item.id === id);

    if (!objeto) {
        return res.status(404).json({ mensagem: 'Objeto não encontrado.' });
    }

    return res.status(200).json(objeto);
});

// POST /objeto - cadastrar um objeto.
router.post('/objeto', (req, res) => {
    const { descricao, local, data, status } = req.body;

    if (!descricao || !local || !data || !status) {
        return res.status(400).json({ mensagem: 'Informe descricao, local, data e status.' });
    }

    const novoObjeto = {
        id: proximoId++,
        descricao,
        local,
        data,
        status
    };

    objetos.push(novoObjeto);

    return res.status(201).json(novoObjeto);
});

// PUT /objeto - atualizar um objeto. O id e os campos vão no JSON.
router.put('/objeto', (req, res) => {
    const { id, descricao, local, data, status } = req.body;
    const idObjeto = Number(id);

    if (!id || !Number.isInteger(idObjeto) || idObjeto <= 0) {
        return res.status(400).json({ mensagem: 'Informe um id válido no corpo da requisição.' });
    }

    if (!descricao || !local || !data || !status) {
        return res.status(400).json({ mensagem: 'Informe descricao, local, data e status.' });
    }

    const indice = objetos.findIndex(item => item.id === idObjeto);

    if (indice === -1) {
        return res.status(404).json({ mensagem: 'Objeto não encontrado.' });
    }

    objetos[indice] = { id: idObjeto, descricao, local, data, status };

    return res.status(200).json({
        mensagem: 'Objeto atualizado com sucesso.',
        objeto: objetos[indice]
    });
});

// DELETE /objeto - excluir um objeto. O id vai no JSON.
router.delete('/objeto', (req, res) => {
    const id = Number(req.body.id);

    if (!req.body.id || !Number.isInteger(id) || id <= 0) {
        return res.status(400).json({ mensagem: 'Informe um id válido no corpo da requisição.' });
    }

    const indice = objetos.findIndex(item => item.id === id);

    if (indice === -1) {
        return res.status(404).json({ mensagem: 'Objeto não encontrado.' });
    }

    const objetoExcluido = objetos.splice(indice, 1)[0];

    return res.status(200).json({
        mensagem: 'Objeto excluído com sucesso.',
        objeto: objetoExcluido
    });
});

module.exports = router;
