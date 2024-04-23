class Controller {
    constructor(entidadeService) {
       this.entidadeService = entidadeService;
    }
    
    async pegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistro);
        } catch (erro) {
           return res.status(500).json(erro.message);
        }
    }
    
    async cria(req,res){
        const novoRegistro = req.body;
        try{
            const novoRegistroCriado = await this.entidadeService.criaRegistro(novoRegistro);
            return res.status(201).json(novoRegistroCriado);
        }catch(erro){
            return res.status(500).json(erro.message);
        }
    }
    
    async atualiza(req,res){
        const id = req.params.id;
        const dadosNovos = req.body;
        try{
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosNovos,Number(id));
            if(foiAtualizado){
                return res.status(200).json({mensagem:'Atualizado com Sucesso'});
            }
        }catch(erro){
            return res.status(500).json(erro.message);
        }
    }
    
    async deleta(req,res){
        const id = req.params.id;
        try{
            await this.entidadeService.deletaRegistro(Number(id));
            return res.status(200).json({mensagem:`id ${id} deletado`});
        }catch(erro){
            return res.status(500).json(erro.message);
        }
    }
    
    async pegaPorId(req, res) {
        const id = req.params.id;
        try {
            const registro = await this.entidadeService.pegaUmRegistro(Number(id));
            return res.status(200).json(registro);
        } catch (erro) {
           return res.status(500).json(erro.message);
        }
    }
}

module.exports = Controller;