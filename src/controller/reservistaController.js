const Controller=require('./controller.js');
const ReservistaServices=require('../Services/reservistaServices.js');
const reservistaServices=new ReservistaServices();

class reservistaController extends Controller{
    constructor(){
        super(reservistaServices);
    }
}
module.exports=reservistaController;