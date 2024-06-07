const {Router}= require('express');
const RecepcionistaController=require('../controller/recepcionistaController.js');
const recepcionistaController=new RecepcionistaController();
const router=Router();

router.get('/recepcionista', (req, res) => recepcionistaController.pegaTodos(req, res));
router.get('/recepcionista/:id', (req, res) => recepcionistaController.pegaPorId(req,res));
router.post('/recepcionista', (req, res) => recepcionistaController.cria(req, res));
router.put('/recepcionista/:id', (req, res) => recepcionistaController.atualiza(req, res));
router.delete('/recepcionista/:id', (req, res) => recepcionistaController.deleta(req,res));

module.exports=router;