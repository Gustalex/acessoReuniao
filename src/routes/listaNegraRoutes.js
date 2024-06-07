const {Router}= require('express');
const ListaNegraController=require('../controller/listaNegraController.js');
const listaNegraController=new ListaNegraController();
const router=Router();

router.get('/listaNegra', (req, res) => listaNegraController.pegaTodos(req, res));
router.get('/listaNegra/:id', (req, res) => listaNegraController.pegaPorId(req,res));
router.post('/listaNegra', (req, res) => listaNegraController.cria(req, res));
router.put('/listaNegra/:id', (req, res) => listaNegraController.atualiza(req, res));
router.delete('/listaNegra/:id', (req, res) => listaNegraController.deleta(req,res));

module.exports=router;