const Controller=require('./controller.js');
const TipoUsuarioServices=require('../Services/tipoUsuarioServices.js');
const tipoUsuarioServices=new TipoUsuarioServices();

class tipoUsuarioController extends Controller{
    constructor(){
        super(tipoUsuarioServices);
    }
}
module.exports=tipoUsuarioController;