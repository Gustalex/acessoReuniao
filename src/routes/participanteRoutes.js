const {Router} = require('express');
const ParticipanteController = require('../controller/participanteController.js');
const participanteController = new ParticipanteController();
const router = Router();

router.get('/participante', (req, res) => participanteController.pegaTodos(req, res));
router.get('/participante/:id', (req, res) => participanteController.pegaPorId(req,res));
router.post('/participante', (req, res) => participanteController.cria(req, res));
router.put('/participante/:id', (req, res) => participanteController.atualiza(req, res));
router.delete('/participante/:id', (req, res) => participanteController.deleta(req,res));

module.exports = router;