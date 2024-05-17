const request=require('supertest');
const app='http://localhost:3000';

describe('Teste das rotas de tipoUsuario', ()=>{
    const atributos = ['tipoUser', 'glossarioTipo'];
    const tipoUsuario={
        id:5,
        tipoUser: 5,
        glossarioTipo: "Enéas um deus",
        createdAt: new Date(),
        updatedAt: new Date()
    };
    it('Deve listar todos os tipoUsuarios', async () => {
        const response = await request(app).get('/tipoUsuario');
        expect(response.status).toBe(200);
    });
    it('Deve retornar um tipoUsuario por ID', async () => {
        const response = await request(app).get('/tipoUsuario/1');
        expect(response.status).toBe(200);
    });
    it('Deve criar uma nova tipoUsuario', async () => {
        const response = await request(app)
            .post('/tipoUsuario')
            .send(tipoUsuario);
        expect(response.status).toBe(201); 
    });
    it('Deve atualizar uma tipoUsuario existente', async () => {
        const response = await request(app)
            .put('/tipoUsuario/1')
            .send({glossarioTipo:"Enéas é foda", updatedAt: new Date()});
        expect(response.status).toBe(200);
    });
    atributos.forEach(atributo => {
        it(`Deve retornar erro 400 ao tentar criar uma tipoUsuario sem o atributo '${atributo}'`, async () => {
            const novaTipoUsuario = { ...tipoUsuario };
            delete novaTipoUsuario[atributo];
            const response = await request(app)
                .put('/tipoUsuario/5')
                .send(novaTipoUsuario);
                expect(response.status).toBe(500);
        });
    });
    it('Deve deletar uma tipoUsuario existente', async () => {
        const response = await request(app).delete('/tipoUsuario/5'); 
        expect(response.status).toBe(200); 
    });
});