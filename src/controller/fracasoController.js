const Controller=require('./controller.js');
const FracasoServices=require('../Services/fracasoServices.js');
const fracasoServices=new FracasoServices();

class fracasoController extends Controller{
    constructor(){
        super(fracasoServices);
    }
}
module.exports=fracasoController;