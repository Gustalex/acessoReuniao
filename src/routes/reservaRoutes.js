const {Router}= require('express');
const ReservaController=require('../controller/reservaController.js');
const reservaController=new ReservaController();
const router=Router();

//CRUD
router.get('/reserva',(req, res)=>reservaController.pegaTodos(req, res));
router.get('/reserva/:id', (req, res)=>reservaController.pegaPorId(req,res));
router.get('/reserva/status/:status',(req, res) => reservaController.reservasStatus(req, res));
router.get('/reserva/:idSala/:dataReservada',(req, res)=>reservaController.verificaHorarioReservaExistente(req, res));
router.get('/reserva/:idSala/:dataReservada/:horaReservada',(req, res)=>reservaController.verificaDisponibilidade(req, res));
router.post('/reserva',(req, res)=>reservaController.cria(req, res));
router.post('/reserva/email',(req, res)=>reservaController.enviaEmail(req, res));
router.put('/reserva/:id',(req, res)=>reservaController.atualiza(req, res));
router.delete('/reserva/:id', (req, res)=>reservaController.deleta(req,res));


module.exports=router;