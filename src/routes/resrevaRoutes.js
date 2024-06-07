const {Router}= require('express');
const ReservaController=require('../controller/reservaController.js');
const reservaController=new ReservaController();
const router=Router();


router.get('/reserva', (req, res) => reservaController.pegaTodos(req, res));
router.get('/reserva/:id', (req, res) => reservaController.pegaPorId(req,res));
router.post('/reserva', (req, res) => reservaController.cria(req, res));
router.put('/reserva/:id', (req, res) => reservaController.atualiza(req, res));
router.delete('/reserva/:id', (req, res) => reservaController.deleta(req,res));

module.exports=router;