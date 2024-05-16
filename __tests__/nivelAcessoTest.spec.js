const request=require('supertest');
const app='http://localhost:3000';

describe('Teste das rotas de nivelAcesso', ()=>{
    it('Deve listar todas as nivelAcessos', async () => {
        const response = await request(app).get('/nivelAcesso');
        expect(response.status).toBe(200);
    });
    it('Deve retornar uma nivelAcesso por ID', async () => {
        const response = await request(app).get('/nivelAcesso/1');
        expect(response.status).toBe(200);
    });
    it('Deve criar uma nova nivelAcesso', async () => {
        const response = await request(app)
            .post('/nivelAcesso')
            .send({});
        expect(response.status).toBe(201); 
    });
    it('Deve atualizar uma nivelAcesso existente', async () => {
        const response = await request(app)
            .put('/nivelAcesso/1')
            .send({});
        expect(response.status).toBe(200);
    });
    it('Deve deletar uma nivelAcesso existente', async () => {
        const response = await request(app).delete('/nivelAcesso/1'); 
        expect(response.status).toBe(200); 
    });
});