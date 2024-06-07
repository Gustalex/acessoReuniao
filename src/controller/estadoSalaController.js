const Controller=require('./controller.js');
const EstadoSalaServices=require('../services/EstadoSalaServices.js');
const estadoSalaServices=new EstadoSalaServices();

class EstadoSalaController extends Controller{
    constructor(){
        super(estadoSalaServices);
    }
}
module.exports=EstadoSalaController;