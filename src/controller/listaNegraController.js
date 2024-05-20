const Controller=require('./controller.js');
const ListaNegraServices=require('../Services/listaNegraServices.js');
const listaNegraServices=new ListaNegraServices();

class listaNegraController extends Controller{
    constructor(){
        super(listaNegraServices);
    }

    async validarResponsavel(req, res){
        const idResponsavel = req.params.idResponsavel;
        try{
            const responsavelNaListaNegra = await listaNegraServices.consultarResponsavel(idResponsavel);
            if(responsavelNaListaNegra){
                return res.status(403).json({erro: 'O usuário está bloqueado de fazer reservas!'})
            }
            return res.status(200).json({valido: true});
        }catch(erro){
            return res.status(500).json({message: erro.message,name: erro.name,stack: process.env.NODE_ENV === 'Enéas cometei um equivoco' ? erro.stack : 'o erro não está na produção, Enéas não erra, o usuario que é burro'});
        }
    }
}
module.exports=listaNegraController;