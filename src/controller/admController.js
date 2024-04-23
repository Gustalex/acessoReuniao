const Controller=require('./controller.js');
const AdmServices=require('../services/admServices.js');
const admServices=new AdmServices();

class AdmController extends Controller{
    constructor(){
        super(admServices);
    }
}
module.exports=AdmController;