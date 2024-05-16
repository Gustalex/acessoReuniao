const Controller=require('./controller.js');
const ParticipanteServices=require('../Services/participanteServices.js');
const participanteServices=new ParticipanteServices();

class participanteController extends Controller{
    constructor(){
        super(participanteServices);
    }
}
module.exports=participanteController;