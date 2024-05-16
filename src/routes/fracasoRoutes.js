const {Router} = require('express');
const FracasoController = require('../controller/fracasoController.js');
const fracasoController = new FracasoController();
const router = Router();

router.get('/participante', (req, res) => fracasoController.pegaTodos(req, res));
router.get('/participante/:id', (req, res) => fracasoController.pegaPorId(req,res));
router.post('/participante', (req, res) => fracasoController.cria(req, res));
router.put('/participante/:id', (req, res) => fracasoController.atualiza(req, res));
router.delete('/participante/:id', (req, res) => fracasoController.deleta(req,res));

module.exports = router;