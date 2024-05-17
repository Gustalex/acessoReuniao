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
                return res.status(403).json({error: 'O usuário está bloqueado de fazer reservas!'})
            }
            return res.status(200).json({valido: true});
        }catch(error){
            return res.status(500).json({error:error.message});
        }
    }
}
module.exports=listaNegraController;