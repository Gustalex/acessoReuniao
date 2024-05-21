const dataSource = require('../models');

class Services {
    constructor(nomeDoModel, validador) {
        this.model = nomeDoModel;
        this.validador = validador;
    }
    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }
    async pegaUmRegistro(id) {
        return dataSource[this.model].findOne({ where: { id } });
    }
    async criaRegistro(dados) {
        if (this.validador) {
            try {
                this.validador.parse(dados);
            } catch (error) {
                const invalidFields = error.errors.map(err => `${err.path}: ${err.message}`).join(', ');
                throw new Error(`Dados inválidos: ${invalidFields}`);
            }
        }
        dados.createdAt = new Date();
        dados.updatedAt = new Date();
        return dataSource[this.model].create(dados);
    }
    async atualizaRegistro(dadosAtualizados, id) {
        if (this.validador) {
            try {
                this.validador.parse(dadosAtualizados);
            } catch (error) {
                const invalidFields = error.errors.map(err => `${err.path}: ${err.message}`).join(', ');
                throw new Error(`Dados inválidos: ${invalidFields}`);
            }
        }
        dadosAtualizados.updatedAt = new Date();
        return await dataSource[this.model].update(dadosAtualizados, { where: { id } });
    }
    async deletaRegistro(id) {
        return dataSource[this.model].destroy({ where: { id } });
    }
}

module.exports = Services;
