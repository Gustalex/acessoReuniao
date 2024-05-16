const {Router} = require('express');
const FracasoController = require('../controller/fracasoController.js');
const fracasoController = new FracasoController();
const router = Router();

router.get('/fracaso', (req, res) => fracasoController.pegaTodos(req, res));
router.get('/fracaso/:id', (req, res) => fracasoController.pegaPorId(req,res));
router.post('/fracaso', (req, res) => fracasoController.cria(req, res));
router.put('/fracaso/:id', (req, res) => fracasoController.atualiza(req, res));
router.delete('/fracaso/:id', (req, res) => fracasoController.deleta(req,res));

module.exports = router;