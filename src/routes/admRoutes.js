const {Router} = require('express');
const AdmController = require('../controller/admController.js');
const admController = new AdmController();
const router = Router();

router.get('/adm', (req, res) => admController.pegaTodos(req, res));
router.get('/adm/:id', (req, res) => admController.pegaPorId(req,res));
//rota de login
router.post('/adm/login', (req, res) => admController.login(req, res));
router.post('/adm', (req, res) => admController.cria(req, res));
router.put('/adm/:id', (req, res) => admController.atualiza(req, res));
router.delete('/adm/:id', (req, res) => admController.deleta(req,res));

module.exports = router;