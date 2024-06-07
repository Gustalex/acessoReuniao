const {Router}= require('express');
const EstadoSalaController=require('../controller/estadoSalaController.js');
const estadoSalaController=new EstadoSalaController();
const router=Router();

router.get('/estadoSala', (req, res) => estadoSalaController.pegaTodos(req, res));
router.get('/estadoSala/:id', (req, res) => estadoSalaController.pegaPorId(req,res));
router.post('/estadoSala', (req, res) => estadoSalaController.cria(req, res));
router.put('/estadoSala/:id', (req, res) => estadoSalaController.atualiza(req, res));
router.delete('/estadoSala/:id', (req, res) => estadoSalaController.deleta(req,res));

module.exports=router;