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
        return dataSource[this.model].create(dados);
    }
    async atualizaRegistro(dadosAtualizados, id) {
        const listaRegistrosAtualizados = await dataSource[this.model].update(
            dadosAtualizados,
            {where: { id:id},});
            if(listaRegistrosAtualizados[0] === 0){
                return false;
            }
        return true;
    }
    async deletaRegistro(id) {
        return dataSource[this.model].destroy({ where: { id } });
    }
}
module.exports = Services;