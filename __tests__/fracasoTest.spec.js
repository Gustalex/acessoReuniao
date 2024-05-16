const request=require('supertest');
const app='http://localhost:3000';

describe('Teste das rotas de fracaso', ()=>{
    it('Deve listar todas as fracasos', async () => {
        const response = await request(app).get('/fracaso');
        expect(response.status).toBe(200);
    });
    it('Deve retornar uma fracaso por ID', async () => {
        const response = await request(app).get('/fracaso/1');
        expect(response.status).toBe(200);
    });
    it('Deve criar uma nova fracaso', async () => {
        const response = await request(app)
            .post('/fracaso')
            .send({});
        expect(response.status).toBe(201); 
    });
    it('Deve atualizar uma fracaso existente', async () => {
        const response = await request(app)
            .put('/fracaso/1')
            .send({});
        expect(response.status).toBe(200);
    });
    it('Deve deletar uma fracaso existente', async () => {
        const response = await request(app).delete('/fracaso/1'); 
        expect(response.status).toBe(200); 
    });
});