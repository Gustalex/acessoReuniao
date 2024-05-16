const request=require('supertest');
const app='http://localhost:3000';

describe('Teste das rotas de tipoUsuario', ()=>{
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
            .send({});
        expect(response.status).toBe(201); 
    });
    it('Deve atualizar uma tipoUsuario existente', async () => {
        const response = await request(app)
            .put('/tipoUsuario/1')
            .send({});
        expect(response.status).toBe(200);
    });
    it('Deve deletar uma tipoUsuario existente', async () => {
        const response = await request(app).delete('/tipoUsuario/1'); 
        expect(response.status).toBe(200); 
    });
});