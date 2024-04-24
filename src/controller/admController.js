const Controller=require('./controller.js');
const AdmServices=require('../services/admServices.js');
const admServices=new AdmServices();

class AdmController extends Controller{
    constructor(){
        super(admServices);
    }
    async login(req,res){
        const {login,senha}=req.body;
        try{
            const adm=await admServices.login(login,senha);
            if(adm) return res.status(200).json(adm);
            return res.status(404).json({error:'Usuário não encontrado'});
        }catch(error){
            return res.status(500).json({error:error.message});
        }    
    } 
}
module.exports=AdmController;