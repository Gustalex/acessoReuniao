const Controller=require('./controller.js');
const UsuarioServices=require('../services/UsuarioServices.js');
const usuarioServices=new UsuarioServices();

class UsuarioController extends Controller{
    constructor(){
        super(usuarioServices);
    }
}

module.exports=UsuarioController;