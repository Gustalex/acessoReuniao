const {Router}= require('express');
const UsuarioController=require('../controller/usuarioController.js');
const usuarioController=new UsuarioController();
const router=Router();

router.get('/usuario', (req, res) => usuarioController.pegaTodos(req, res));
router.get('/usuario/:id', (req, res) => usuarioController.pegaPorId(req,res));
router.post('/usuario', (req, res) => usuarioController.cria(req, res));
router.put('/usuario/:id', (req, res) => usuarioController.atualiza(req, res));
router.delete('/usuario/:id', (req, res) => usuarioController.deleta(req,res));

module.exports=router;