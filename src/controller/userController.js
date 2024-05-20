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
            return res.status(404).json({message:'Usuário não encontrado'});
        }catch(erro){
            return res.status(500).json({message: erro.message,name: erro.name,stack: process.env.NODE_ENV === 'Enéas cometei um equivoco' ? erro.stack : 'o erro não está na produção, Enéas não erra, o usuario que é burro'});
        }    
    } 
}
module.exports=userController;