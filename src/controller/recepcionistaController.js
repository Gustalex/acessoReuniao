const Controller=require('./controller.js');
const RecepcionistaServices=require('../services/RecepcionistaServices.js');
const recepcionistaServices=new RecepcionistaServices();

class RecepcionistaController extends Controller{
    constructor(){
        super(recepcionistaServices);
    }
    async login(req,res){
        const {login,senha}=req.body;
        try{
            const response=await recepcionistaServices.login(login,senha);
            if(response) return res.status(200).json(response);
            return res.status(404).json({message:'Recepcionista não encontrado'});
        }catch(erro){
            return res.status(500).json({error:erro.name, message:erro.message, model:'Recepcionista', method:'login'});
        }    
    } 
}

module.exports=RecepcionistaController;