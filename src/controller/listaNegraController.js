const Controller=require('./controller.js');
const ListaNegraServices=require('../Services/listaNegraServices.js');
const listaNegraServices=new ListaNegraServices();

class listaNegraController extends Controller{
    constructor(){
        super(listaNegraServices);
    }
}
module.exports=listaNegraController;