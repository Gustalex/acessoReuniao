const Services=require('./services.js');
const dataSource=require('../models');
const z=require('zod');
class admServices extends Services {
    constructor() {
        super('Adm'); //nome do modelo
    }
    async login(login, senha) {
        return dataSource.Adm.findOne({ where: {login, senha } });
    }
    validacaoCadastro=z.object({
        senha: z.string().min(6).max(20),
        telefone: z.string().min(10).max(16),
        cpf: z.string().length(11),
    });

    async criaRegistro(novoRegistro) {
        const response=await this.validacaoCadastro.safeParseAsync(novoRegistro);
        if (!response.success) return { error: response.error };
        return await dataSource.Adm.create(novoRegistro);
    }
}
module.exports=admServices;