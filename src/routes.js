const express = require('express');
const router = express.Router();

const PecasController = require('./controllers/PecasController');

router.get('/pecas',PecasController.buscarTodas);
router.get('/pecas/:codigo', PecasController.buscarUm);
router.post('/pecas', PecasController.inserir);
router.put('/pecas/:codigo', PecasController.alterar);
router.delete('/pecas/:codigo', PecasController.excluir);

module.exports = router;