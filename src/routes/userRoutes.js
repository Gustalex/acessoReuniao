const {Router} = require('express');
const UserController = require('../controller/userController.js');
const userController = new UserController();
const router = Router();

router.get('/user', (req, res) => userController.pegaTodos(req, res));
router.get('/user/:id', (req, res) => userController.pegaPorId(req,res));
//rota de login
router.post('/user/login', (req, res) => userController.login(req, res));
router.post('/user', (req, res) => userController.cria(req, res));
router.put('/user/:id', (req, res) => userController.atualiza(req, res));
router.delete('/user/:id', (req, res) => userController.deleta(req,res));

module.exports = router;