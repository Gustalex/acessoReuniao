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
                throw new Error('Dados inválidos: ' + error.errors);
            }
        }
        dados.createdAt=new Date();
        dados.updatedAt=new Date();
        return dataSource[this.model].create(dados);
    }
    async atualizaRegistro(dadosAtualizados, id) {
        if (this.validador) {
            try {
                this.validador.parse(dados);
            } catch (error) {
                throw new Error('Dados inválidos: ' + error.errors);
            }
        }
        dadosAtualizados.updatedAt=new Date();
        return await dataSource[this.model].update(dadosAtualizados,{where: { id:id},});
    }
    async deletaRegistro(id) {
        return dataSource[this.model].destroy({ where: { id } });
    }
}
module.exports = Services;