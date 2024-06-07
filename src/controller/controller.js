class Controller {
    constructor(entidadeService) {
       this.entidadeService = entidadeService;
    }
    
    async pegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistro);
        }catch(erro){
            return res.status(500).json({error:erro.name, message:erro.message, model:this.entidadeService, method:'pegaTodos'});
        }
    }
    
    async cria(req, res) {
        const novoRegistro = req.body;
        try{
            const novoRegistroCriado = await this.entidadeService.criaRegistro(novoRegistro);
            return res.status(200).json(novoRegistroCriado);
        }catch(erro){
            if (erro.error) {
                return res.status(400).json({error:erro.name, message:erro.message, model:this.entidadeService, method:'cria'});
            } else {
                return res.status(500).json({error:erro.name, message:erro.message, model:this.entidadeService, method:'cria'});
            }
        }
    }
    
    async atualiza(req,res){
        const id = req.params.id;
        const dadosNovos = req.body;
        try{
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosNovos,Number(id));
            if(foiAtualizado) return res.status(200).json({mensage:'Atualizado com Sucesso'});
        }catch(erro){
            return res.status(500).json({error:erro.name, message:erro.message, model:this.entidadeService, method:'atualiza'});
        }
    }
    
    async deleta(req,res){
        const id = req.params.id;
        try{
            await this.entidadeService.deletaRegistro(Number(id));
            return res.status(200).json({mensage:`id ${id} deletado`});
        }catch(erro){
            return res.status(500).json({error:erro.name, message:erro.message, model:this.entidadeService, method:'deleta'});
        }
    }
    
    async pegaPorId(req, res) {
        const id = req.params.id;
        try {
            const registro = await this.entidadeService.pegaUmRegistro(Number(id));
            return res.status(200).json(registro);
        }catch(erro){
            return res.status(500).json({error:erro.name, message:erro.message, model:this.entidadeService, method:'pegaPorId'});
        }
    }
}

module.exports = Controller;