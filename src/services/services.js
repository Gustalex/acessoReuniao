const dataSource = require('../models');

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }
    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }
    async pegaUmRegistro(id) {
        return dataSource[this.model].findOne({ where: { id } });
    }
    async criaRegistro(dados) {
        return !!dataSource[this.model].create(dados);
    }
    async atualizaRegistro(dadosAtualizados, id) {
        return !!await dataSource[this.model].update(dadosAtualizados,{where: { id:id},});
    }
    async deletaRegistro(id) {
        return !!dataSource[this.model].destroy({ where: { id } });
    }
}
module.exports = Services;