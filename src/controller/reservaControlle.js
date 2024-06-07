const Controller=require('./controller.js');
const ReservaServices=require('../services/ReservaServices.js');
const reservaServices=new ReservaServices();

class ReservaController extends Controller{
    constructor(){
        super(reservaServices);
    }
}

module.exports=ReservaController;