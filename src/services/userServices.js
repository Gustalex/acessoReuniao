const Services = require('./services.js');
const dataSource = require('../models/index.js');
const z=require('zod');

class UserServices extends Services {
    constructor() {
        super('User', z.object({
            login: z.string().min(4).max(20),
            senha: z.string().min(10).max(56),
            identificador: z.string().min(11).max(14),
            ativo: z.boolean(),
            tipo: z.number().int().nonnegative(),
            nivelAcesso: z.number().int().positive(),
        }));
    }

    async login(login, senha) {
        return dataSource.User.findOne({ where: { login, senha } });
    }
}

module.exports = UserServices;