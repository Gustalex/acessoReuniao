const dataSource = require('../models');

class Services {
    constructor(nomeDoModel, validador) {
        this.model = nomeDoModel;
        this.validador = validador;
    }
    validarDados(dados) {
        try {
            this.validador.parse(dados);
        } catch (error) {
            const invalidFields = error.errors.map(err => `${err.path}: ${err.message}`).join(', ');
            throw new Error(`Dados inválidos: ${invalidFields}`);
        }
    }
    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }
    async pegaUmRegistro(id) {
        return dataSource[this.model].findOne({ where: { id } });
    }
    async criaRegistro(dados) {
        this.validarDados(dados);

        dados.createdAt = new Date();
        dados.updatedAt = new Date();
        return dataSource[this.model].create(dados);
    }
    async atualizaRegistro(dadosAtualizados, id) {
        const dadosExistentes = await this.pegaUmRegistro(id);
        if (!dadosExistentes) {
            throw new Error('Registro não encontrado');
        }

        const dadosParaAtualizar = {
            ...dadosExistentes.toJSON(), 
            ...dadosAtualizados,
            updatedAt: new Date()
        };

        this.validarDados(dadosParaAtualizar);

        return await dataSource[this.model].update(dadosParaAtualizar, { where: { id } });
    }
    async deletaRegistro(id) {
        return dataSource[this.model].destroy({ where: { id } });
    }
}

module.exports = Services;
