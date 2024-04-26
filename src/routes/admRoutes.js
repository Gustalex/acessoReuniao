const {Router} = require('express');
const AdmController = require('../controller/admController.js');
const admController = new AdmController();
const router = Router();

router.get('/adm', (req, res) => admController.pegaTodos(req, res));
router.get('/adm/:id', (req, res) => admController.pegaPorId(req,res));
//rota de login
router.post('/adm/login', (req, res) => admController.login(req, res));
//need to return true and the ID of the user
router.post('/adm', (req, res) => admController.cria(req, res));
//need to return only true
router.put('/adm/:id', (req, res) => admController.atualiza(req, res));
//need to return only true
router.delete('/adm/:id', (req, res) => admController.deleta(req,res));
//need to return only true
module.exports = router;