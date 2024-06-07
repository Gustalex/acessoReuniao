const Controller=require('./controller.js');
const ListaNegraServices=require('../services/ListaNegraServices.js');
const listaNegraServices=new ListaNegraServices();

class ListaNegraController extends Controller{
    constructor(){
        super(listaNegraServices);
    }
}
module.exports=ListaNegraController;