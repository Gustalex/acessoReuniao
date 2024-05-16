const Controller=require('./controller.js');
const NivelAcessoServices=require('../Services/nivelAcessoServices.js');
const nivelAcessoServices=new NivelAcessoServices();

class nivelAcessoController extends Controller{
    constructor(){
        super(nivelAcessoServices);
    }
}
module.exports=nivelAcessoController;