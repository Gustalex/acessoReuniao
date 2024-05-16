const Services=require('./services.js');
const dataSource=require('../models/index.js');
const z=require('zod');
class userServices extends Services {
    constructor() {
        super('User'); //nome do modelo
    }
    async login(login, senha) {
        return dataSource.User.findOne({ where: {login, senha } });
    }
    validacaoCadastro=z.object({
        senha: z.string().min(6).max(20),
        identificador: z.string().min(6).max(20),
    });

    async criaRegistro(novoRegistro) {
        const response=await this.validacaoCadastro.safeParseAsync(novoRegistro);
        if (!response.success) return { error: response.error };
        return await dataSource.User.create(novoRegistro);
    }
}
module.exports=userServices;