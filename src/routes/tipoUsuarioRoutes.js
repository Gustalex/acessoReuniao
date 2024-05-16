const {Router} = require('express');
const TipoUsuarioController = require('../controller/tipoUsuarioController.js');
const tipoUsuarioController = new TipoUsuarioController();
const router = Router();

router.get('/tipoUsuario', (req, res) => tipoUsuarioController.pegaTodos(req, res));
router.get('/tipoUsuario/:id', (req, res) => tipoUsuarioController.pegaPorId(req,res));
router.post('/tipoUsuario', (req, res) => tipoUsuarioController.cria(req, res));
router.put('/tipoUsuario/:id', (req, res) => tipoUsuarioController.atualiza(req, res));
router.delete('/tipoUsuario/:id', (req, res) => tipoUsuarioController.deleta(req,res));

module.exports = router;