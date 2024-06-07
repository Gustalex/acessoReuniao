const {Router}= require('express');
const NivelAcessoController=require('../controller/nivelAcessoController.js');
const nivelAcessoController=new NivelAcessoController();
const router=Router();

router.get('/nivelAcesso', (req, res) => nivelAcessoController.pegaTodos(req, res));
router.get('/nivelAcesso/:id', (req, res) => nivelAcessoController.pegaPorId(req,res));
router.post('/nivelAcesso', (req, res) => nivelAcessoController.cria(req, res));
router.put('/nivelAcesso/:id', (req, res) => nivelAcessoController.atualiza(req, res));
router.delete('/nivelAcesso/:id', (req, res) => nivelAcessoController.deleta(req,res));

module.exports=router;