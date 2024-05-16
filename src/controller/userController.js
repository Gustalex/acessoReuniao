const Controller=require('./controller.js');
const UserServices=require('../services/userServices.js');
const userServices=new UserServices();

class userController extends Controller{
    constructor(){
        super(userServices);
    }
    async login(req,res){
        const {login,senha}=req.body;
        try{
            const user=await userServices.login(login,senha);
            if(user) return res.status(200).json(user);
            return res.status(404).json({error:'Usuário não encontrado'});
        }catch(error){
            return res.status(500).json({error:error.message});
        }    
    } 
}
module.exports=userController;