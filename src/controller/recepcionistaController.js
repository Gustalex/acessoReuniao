const Controller=require('./controller.js');
const RecepcionistaServices=require('../services/RecepcionistaServices.js');
const recepcionistaServices=new RecepcionistaServices();

class RecepcionistaController extends Controller{
    constructor(){
        super(recepcionistaServices);
    }
}

module.exports=RecepcionistaController;